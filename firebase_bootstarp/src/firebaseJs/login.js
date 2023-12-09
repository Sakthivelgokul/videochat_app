import { getAuth, signInWithPopup, GoogleAuthProvider, setPersistence, browserLocalPersistence } from "firebase/auth";

// eslint-disable-next-line no-unused-vars
import { app } from '../firebase';

export function userAuth() {
        const auth = getAuth();
        return auth
}

export async function signWithGoogle() {
        let auth = userAuth()
        const provider = new GoogleAuthProvider();
        let result = await setPersistence(auth, browserLocalPersistence).then(() => {
                return signInWithPopup(auth, provider)
        }).catch(e => console.log(e))
        
        if (result != undefined){ return "success"}

        else {return "error"}

}
export function getUserDetail() {
        let auth = userAuth();
        const user = auth.currentUser;
        let userDetail={
                displayName:user.displayName,
                email:user.email,
                photoURL:user.photoURL,
        }
        return userDetail

}




