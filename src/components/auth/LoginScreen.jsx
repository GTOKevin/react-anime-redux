import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom';
import { startEmailAndPassword, startFacebookLogin, startGoogleLogin } from '../../action/auth'
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import Swal from 'sweetalert2';
import FacebookTwoToneIcon from '@mui/icons-material/FacebookTwoTone';
import GoogleIcon from '@mui/icons-material/Google';
import GitHubIcon from '@mui/icons-material/GitHub';
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
  const {email,contraseña}=form;

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
    <div className='rounded grid grid-cols-6  w-5/5 sm:w-3/5 md:w-2/4 absolute animate__animated animate__fadeIn'>
       
        <form className='col-span-6 lg:col-span-3 px-10 py-10 bg-slate-50 rounded-l-md' onSubmit={loginEmailPassword}>
        <h3 className='text-3xl text-center font-bold'>Ingresar</h3> 
        <div className='text-center my-4'>
          <span className='mx-2 cursor-pointer' onClick={loginFacebook}>
          <FacebookTwoToneIcon className='text-blue-600' />
          </span>
          <span className='mx-2 cursor-pointer' onClick={loginGoogle}>
          <GoogleIcon  className='text-green-600'/>
          </span>
          <span className='mx-2 cursor-pointer'>
          <GitHubIcon />
          </span>
      
       
       
        </div> 
    
          <input 
          type='email'
          autoComplete='off'
          className='w-full rounded-sm bg-gray-200 mb-2.5 pl-2 py-1 outline-none text-gray-800 transition delay-200 ease-in focus:outline-gray-700 focus:text-black'
          placeholder='Usuario'
          name='email'  
          value={form.email}
          onBlur={handleBurn}
          onChange={handleChange} />
           <input 
           type='password'
          autoComplete='off'
          className='w-full rounded-sm bg-gray-200 my-2.5 pl-2 py-1 outline-none text-gray-800 transition delay-200 ease-in focus:outline-gray-700 focus:text-black'
          placeholder='Ingrese su contraseña'
          name='contraseña'
          value={form.contraseña}
          onBlur={handleBurn}
          onChange={handleChange} />
          <div className='w-full text-center my-4 text-xs'>
          <button type='submit' 
          className='py-2 px-14 rounded-full text-white font-medium' style={{background: "rgb(99,88,222)",
          background: "linear-gradient(90deg, rgba(99,88,222,1) 54%, rgba(97,97,219,1) 63%)"}}>
            INGRESAR
          </button>
          </div>
      

        
         
        </form>
        <div className='col-span-6 lg:col-span-3  px-10 py-10 text-white rounded-r-md' 
        style={{background: "rgb(99,88,222)",
        background: "linear-gradient(90deg, rgba(99,88,222,1) 54%, rgba(97,97,219,1) 63%)"}}>
          <h5 className='text-2xl font-bold text-center'>Hola, Amigo!</h5>
          <p className='py-4 text-center font-light'>Ingresa tus datos personales y disfruta de la variedad de GIFTS</p>
          <div className='my-5 text-xs text-center'>
            <Link to="/auth/registrar" className='border px-10 font-medium py-2 rounded-full transition-colors ease-in delay-150 hover:bg-indigo-700 hover:border-indigo-700'>REGISTRARME</Link> 
         </div>
        </div>
    </div>
  )
}
