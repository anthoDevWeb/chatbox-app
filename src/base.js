import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'


const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDEOj495jj8OYB4FkG7HNpuvtOFVe2Lgw0",
    authDomain: "chatbox-app-64e68.firebaseapp.com",
    databaseURL: "https://chatbox-app-64e68.firebaseio.com"
})

const base = Rebase.createClass(firebase.database())

export { firebaseApp }

export default base