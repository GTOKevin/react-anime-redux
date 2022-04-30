import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { startEmailAndPassword, startFacebookLogin, startGoogleLogin } from '../../action/auth'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import Swal from 'sweetalert2';

const initialForm={
  email:'',
  contraseña:''
}

const validateForm=(form)=>{
  let errors={};

  if(!form.email.trim()){
    errors.email="El campo email es requerido";
  }else if(!validator.isEmail(form.email)){
    errors.email="El email ingresado no es valido";
  }

  if(!validator.isAlphanumeric(form.contraseña)){
    errors.contraseña="No puede ingresar caracteres especiales";
  }else if(form.contraseña.trim().length <5){
    errors.contraseña="Debe tener minimo 6 caracteres";
  }



  return errors;
}

export const LoginScreen = () => {


  const [form,errors,handleChange,handleBurn]=useForm(initialForm,validateForm)
  const {email,nombre,contraseña}=form;

  const dispatch=useDispatch();

    const loginGoogle=()=>{
      dispatch(startGoogleLogin());
    }

    const loginFacebook=()=>{
 
      dispatch(startFacebookLogin());
    }

    const loginEmailPassword=(e)=>{
      e.preventDefault();

      if(Object.keys(errors).length === 0){
        dispatch(startEmailAndPassword(email,contraseña));
      }else{
        Swal.fire("Ooops..!","usuario y/o contraseña incorrecta","error");
      }
    }

  return (
    <div className='px-10 py-10 rounded bg-slate-50 w-5/5 sm:w-3/5 md:w-2/4 xl:w-1/4'>
        <h3 className='text-3xl text-center font-bold uppercase text-blue-600'>Login</h3> 
        <form className='my-5' onSubmit={loginEmailPassword}>
          <input 
          type='email'
          autoComplete='off'
          className='w-full rounded ring my-2.5 pl-2 py-1 outline-none text-gray-800 transition delay-200 ease-in focus:ring-indigo-600 focus:text-black'
          placeholder='Usuario'
          name='email'
          value={form.email}
          onBlur={handleBurn}
          onChange={handleChange} />
           <input 
           type='password'
          autoComplete='off'
          className='w-full rounded ring my-2.5 pl-2 py-1 outline-none text-gray-800 transition delay-200 ease-in focus:ring-indigo-600 focus:text-black'
          placeholder='Ingrese su contraseña'
          name='contraseña'
          value={form.contraseña}
          onBlur={handleBurn}
          onChange={handleChange} />
          <button type='submit' 
          className='w-full bg-indigo-600 py-1 rounded text-white font-medium my-2.5 transition delay-200 ease-in hover:bg-indigo-700'>
            Ingresar
          </button>
          <h6 className='text-center font-medium mb-2.5'>O</h6>
         <div>
            <div className='bg-green-500 my-2  py-1 rounded text-white cursor-pointer' 
            onClick={loginGoogle}>
              <p><i className="fa-brands fa-google px-2"></i><span className='pr-2 font-bold'>Ingresar con Google</span></p> 
            </div>
            <div className='bg-blue-500 my-2 py-1 rounded text-white cursor-pointer'
            onClick={loginFacebook}>
              <p><i className="fa-brands fa-facebook-f px-2"></i><span className='pr-2 font-bold'>Ingresar con Facebook</span></p> 
            </div>
         </div>

         <div className='text-right text-blue-700 font-bold my-2'>
            <Link to="/auth/registrar"> REGISTRARME </Link> 
         </div>
         
        </form>
    </div>
  )
}
