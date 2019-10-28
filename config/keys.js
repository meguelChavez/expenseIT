module.exports = {
    google: {
        clientID: process.env.Google_ClientID,
        clientSecret: process.env.Google_ClientSecret
    },
    MongoDB: {
        URI: process.env.MONGODB_URI
    },
    session: {
        cookieKey: process.env.cookieKey
    }
}