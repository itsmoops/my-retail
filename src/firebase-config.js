/**
 * Add your own database configurations here - Go to your Firebase Project
 * First click on Storage and initialize it for your project
 * Copy the config info from Overview -> Add Firebase to your web app
 */
const firebaseConfig = {
    dev: {
        apiKey: 'AIzaSyCrOlrTkXQiaEQ1v3H_bzpEQkNhiMCgVQA',
        authDomain: 'myretail-case-study.firebaseapp.com',
        databaseURL: 'https://myretail-case-study.firebaseio.com',
        projectId: 'myretail-case-study',
        storageBucket: 'myretail-case-study.appspot.com',
        messagingSenderId: '328985369935'
    },

    prod: {
        apiKey: 'AIzaSyCrOlrTkXQiaEQ1v3H_bzpEQkNhiMCgVQA',
        authDomain: 'myretail-case-study.firebaseapp.com',
        databaseURL: 'https://myretail-case-study.firebaseio.com',
        projectId: 'myretail-case-study',
        storageBucket: 'myretail-case-study.appspot.com',
        messagingSenderId: '328985369935'
    }
}

export default firebaseConfig
