const passport = require('passport')


module.exports = app => {
    //identifier 'google' is a internal identifier of google, so we don't need to specify it elsewhere
    app.get(
        '/auth/google', 
        passport.authenticate('google', {
        scope: ['profile', 'email']
        })
    );
  
    app.get(
        '/auth/google/callback', 
        passport.authenticate('google')//passport will see the code inside the URL
    );//with the name google, use the strategy above 'GoogleStrategy'

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });
};
  