import queryString from 'qs';
import RequestApi from './FetchHelper';


/*
 * This function is responsible of preparing API end point URL.
 * @config [cfg] - accepts a string which is endpoint or a config with keys.
 * { protocol, host, verion, url, params } and an additional key external incase if no version has to be appended
 */

const getAPIURL = (context, cfg) => {
    let url;

    const CONFIG = {
        protocol: cfg.protocol ? 'http' : '',
        host: cfg.host ? cfg.host : hostName,
        path: cfg.path ,
    };

    if (typeof cfg === 'string') {
        url = `${CONFIG.protocol}://${CONFIG.host}${CONFIG.path}/${cfg}`;
    } else if (typeof cfg === 'object') {
        if (cfg.external && cfg.external === true) {
            url = cfg.url;
        } else {
            url = `${CONFIG.protocol}://${CONFIG.host}${CONFIG.path}/${cfg.url}`;
        }
    }

    return url;
};

/*
 * This function is responsible of preparing API end point URL with query params if any.
 * @config [cfg] - accepts a string which is endpoint or a config with keys.
 * { protocol, host, verion, url, params } and an additional key external incase if no version has to be appended
 * @config.params - Query params to be appended to the URL.
 */

const getURLWithParams = (context, cfg) => {
    const url = getAPIURL(context, cfg);
    let queryParams = null;
    if (cfg.params) {
        const encode = cfg.encode !== undefined ? cfg.encode : true;
        queryParams = queryString.stringify(cfg.params, {
            encode,
        });
    }

    return queryParams ? `${url}?${queryParams}` : url;
};

/**
 * This class is reponsible for holding instances of basic restful API operations like GET,POST,DELETE and PUT.
 *
 */
export default class RestClient {

  /**
   * A static get function to make GET calls to API.
   * @endPoint - API endpoint URL.
   * @params - Request params or Query params to be passed to API.
   */
    static get(config) {
        const apiUrl = getURLWithParams();

        let response = {};
        if (apiUrl) {
            response = RequestApi.invoke(
                apiUrl,
                'GET',
                null,
                this.headers,
                config,
                this.middleware,
            );
        }
        return response;
    }
}
