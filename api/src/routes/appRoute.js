function appRoute(app) {
    const fetch = require("node-fetch");

    const routeName = 'gitapi';     
    const reposUrl = 'https://api.github.com/orgs/takenet/repos';
    const orgsUrl = 'https://api.github.com/orgs/takenet';
    const sort = 'created_at';
    const register = '100';
   
    let reposVector = [];
    let page = 1;
    
    app.route(`/${routeName}/`)
        .get(async (req, res) => {
            const orgsResponse = await fetch(`${orgsUrl}`);
            const org = await orgsResponse.json();
            const numberOfRepositories = org.public_repos;

            for (let i = 0; i < numberOfRepositories; i+=100) {
                const repoResponse = await fetch(`${reposUrl}?q=&sort=${sort}&per_page=${register}&page=${page.toString()}`);
                const repos = await repoResponse.json();
                reposVector = reposVector.concat(repos);

                page ++;
            };
            
            const reposFilter = reposVector
                .filter(element => element.language === 'C#')
                .reverse()
                .slice(0, 5);

            res.send(reposFilter);
        })

    };

module.exports = appRoute;