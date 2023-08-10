var ghpages = require('gh-pages');

ghpages.publish(
    'public', // path to public directory
    {
        branch: 'gh-pages',
        repo: 'https://github.com/RightRat42/rightrat-stash.git', // Update to point to your repository  
        user: {
            name: 'Ivan Smirnov', // update to use your name
            email: 'rightrat42@gmail.com' // Update to use your email
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)