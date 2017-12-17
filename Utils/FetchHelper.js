import fetch from 'isomorphic-fetch';

export const REQUEST_METHODS = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

const CREDENTIALS = {
    OMIT: 'omit',
    SAME_ORIGIN: 'same-origin',
    INCLUDE: 'include',
};

const credentialsEnumToString = (credentialsEnum) => {
    switch (credentialsEnum) {
        case CREDENTIALS.INCLUDE:
            return 'include';
        case CREDENTIALS.OMIT:
            return 'omit';
        case CREDENTIALS.SAME_ORIGIN:
            return 'same-origin';
        default:
            return 'same-origin';
    }
};

const getApiParams = (requestMethod, payload, reqHeaders, config) => {
    const params = {
        method: requestMethod,
        headers: {},
        /**
         * credentials (String) - Authentication credentials mode. Default: "omit"
         * "omit" - don't include authentication credentials (e.g. cookies) in the request
         * "same-origin" - include credentials in requests to the same site
         * "include" - include credentials in requests to all sites
         */
        credentials: credentialsEnumToString(config.credentials),
    };

    if (requestMethod !== REQUEST_METHODS.GET && payload) {
        params.body = JSON.stringify(payload);
    }

    if (reqHeaders && reqHeaders.cookie) {
        params.headers.cookie = reqHeaders.cookie;
    }

    return params;
};

/**
 *This class is responsible for invoking API endpoints using fetch of isomorphic-fetch library.
 */

export default class RequestAPI {

    static CREDENTIALS = CREDENTIALS;

  /**
   * This function makes the call to back end API using below parameters and returns the promise back to the invoking client.
   *
   * @url - API end point URL.
   * @requestMethod - Request Method to call API  Ex: GET, POST, PUT, PATCH, DELETE.
   * @payload - Request payload to be send to API, this is an optional parameter and can be used for any POST,PUT and PATCH calls if required.
   */

    static invoke(url, requestMethod, payload, reqHeaders, config, middleware) {
        if (process.env.NODE_ENV === 'development') {
            url = url.indexOf('?') !== -1 ? `${url}&dpAkamaiOverride=1` : `${url}?dpAkamaiOverride=1`;
        }
        return fetch(url,
            getApiParams(requestMethod, payload, reqHeaders, config),
        ).then((response) => {
            const status = response.status;
            const statusText = response.statusText;
            if (__SERVER__) {
                try {
                    // TODO:PR: Clone header
                    middleware(url, response.headers);
                } catch (e) {
                    console.error('Middleware execution errored :: ', e);
                }
            }

            if (status === 201) {
                return response.text()
                  .then(text => ({ status, statusText, data: text }));
            }

            return response.json()
                .then(json => ({ status, statusText, data: json }));
        }).catch((error) => {
            console.log('Error in fetching data from Url: ', url, error);
            return error;
        });
    }
}
