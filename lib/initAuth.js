// ./initAuth.js
import { init } from 'next-firebase-auth'

const initAuth = () => {
  init({
    authPageURL: '/login',
    appPageURL: '/',
    loginAPIEndpoint: '/api/login', // required
    logoutAPIEndpoint: '/api/logout', // required
    onLoginRequestError: (err) => {
      console.error(err)
    },
    onLogoutRequestError: (err) => {
      console.error(err)
    },
    // firebaseAuthEmulatorHost: 'localhost:3001',
    firebaseAdminInitConfig: {
      credential: {
        projectId: 'dungeon-logger',
        clientEmail: 'firebase-adminsdk-1d65l@dungeon-logger.iam.gserviceaccount.com',
        // The private key must not be accessible on the client side.
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      },
      databaseURL: 'https://dungeon-logger.firebaseio.com',
    },
    // Use application default credentials (takes precedence over fireaseAdminInitConfig if set)
    // useFirebaseAdminDefaultCredential: true,
    firebaseClientInitConfig: {
      apiKey: "AIzaSyDVckbVQUnH5dFEne6KT4UjZvq4V78T_lk",
      authDomain: "dungeon-logger.firebaseapp.com",
      projectId: "dungeon-logger",
      storageBucket: "dungeon-logger.appspot.com",
      messagingSenderId: "110191463418",
      appId: "1:110191463418:web:00b73d977ae316ea777243"
    },
    cookies: {
      name: 'DungeonLogger', // required
      // Keys are required unless you set `signed` to `false`.
      // The keys cannot be accessible on the client side.
      keys: [
        process.env.COOKIE_SECRET_CURRENT,
        process.env.COOKIE_SECRET_PREVIOUS,
      ],
      httpOnly: true,
      maxAge: 12 * 60 * 60 * 24 * 1000, // twelve days
      overwrite: true,
      path: '/',
      sameSite: 'strict',
      secure: true, // set this to false in local (non-HTTPS) development
      signed: true,
    },
    onVerifyTokenError: (err) => {
      console.error(err)
    },
    onTokenRefreshError: (err) => {
      console.error(err)
    },
  })
}

export default initAuth