import {createUserWithEmailAndPassword, signInWithPopup, updateProfile} from 'firebase/auth';
import Swal from 'sweetalert2';
import { auth, facebookAuthProvider, googleAuthProvider } from '../firebase/firebase-config';
import { types } from '../types/types';

export const startCreateNewUser=(email,password,name)=>{
    return (dispatch)=>{
        createUserWithEmailAndPassword(auth,email,password)
        .then(async({user})=>{
            await updateProfile(user,{displayName:name})
            Swal.fire({
                icon:'success',
                title:'Registrado!!!',
                showConfirmButton:false,
                showCloseButton:true
            })
        }).catch((e)=>{
                console.log(e);
            Swal.fire({
                icon:'error',
                iconColor:'#e11f1f',
                text:'Email existente'
            });

        });
    }
}


export const startGoogleLogin=()=>{
    return (dispatch)=>{
        signInWithPopup(auth,googleAuthProvider)
        .then(({user})=>{
            console.log(user);
                dispatch(login(user.uid,user.displayName))
        }).catch((err)=>{
            console.log(err);
        })
    } 
}

export const startFacebookLogin=()=>{
    return (dispatch)=>{
        signInWithPopup(auth,facebookAuthProvider)
        .then(({user})=>{
                dispatch(login(user.uid,user.displayName))
        }).catch((err)=>{
            console.log(err);
        })
    } 
}

export const login=(uid,displayName)=>{
    return{
       type:types.login,
       payload:{
           uid,
           displayName
       } 
    }
}