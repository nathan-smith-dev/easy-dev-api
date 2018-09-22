const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require('./db');

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
    const user = await db.getUser(id);
    done(null, user);
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_AUTH_ID,
        clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
        callbackURL: '/auth/google/callback',
        proxy: true,
    },
    async (accessToken, refreshToken, profile, done) => {
        const user = await db.getUser(profile.id);
        if (user) {
            await db.loginUser(user.id);
            done(null, user);
        } else {
            const { id, emails, name: { givenName, familyName } } = profile;
            const newUser = await db.createUser(id, emails[0].value, givenName, familyName);
            done(null, newUser);
        }
    }),
);
