function appRoute(app) {
    const fetch = require("node-fetch");

    //mudar o nome dps
    const routeName = 'gitapi';
    const sort = 'created_at';
    const url = 'https://api.github.com/users/takenet/repos';
  
    // const client_id = '854c432109469f4d6fcc'
    // const client_secret = '630e777de5fe7e5b84d4c9635e1fe75ba91f94e2'
    
    app.route(`/${routeName}/`)
        .get(async (req, res) => {
            console.log('bateu uma onda forte');
            const repoResponse = await fetch(`${url}?q=&sort=${sort}`);

            const repos = await repoResponse.json();

            const reposFilter = repos
                .filter(element => element.language === 'C#')
                .reverse()
                .slice(0, 5);

            console.log(
                reposFilter.forEach(element => 
                {
                    console.log(element.owner.avatar_url); 
                })
            )

            res.send(reposFilter);
        })

    };

module.exports = appRoute;