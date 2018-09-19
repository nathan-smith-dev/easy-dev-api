const passport = require('passport');

module.exports = (app) => {
    app.get('/auth/google', passport.authenticate('google', {
        scope: ['profile', 'email'],
    }));

    app.get('/auth/google/callback', passport.authenticate('google'));

    app.get('/o/oauth2/v2/auth', (req, res) => { // fix for reverse proxy issues
        res.redirect(`https://accounts.google.com${req.originalUrl}`);
    });

    app.get('/api/current_user', (req, res) => {
        res.send(req.user);
    });

    app.get('/api/logout', (req, res) => {
        req.logout();
        res.send(req.user);
    });
};
