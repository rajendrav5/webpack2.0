import RestClient from './RestClient';

class ArticlesApi {
    /**
     * Function to fetch all root level departments.
     */
    static getArticles(params) {
        const config = {
            url: "developer.nytimes.com/article_search_v2.json",
        };

        return RestClient.get(config)
            .then(response => response)
            .catch((error) => {
                console.log('AccountApi: reset password request failed: ', error);
            });
    }
}

export default ArticlesApi;
