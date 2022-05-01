import validator from 'validator';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { startCreateNewUser } from '../../action/auth';
import { useForm } from '../../hooks/useForm';
;

const initialForm={
  email:'',
  nombre:'',
  contraseña:'',
  contraseña2:''
}

const validateForm=(form)=>{
  let errors={};

  if(!form.email.trim()){
    errors.email="El campo email es requerido";
  }else if(!validator.isEmail(form.email)){
    errors.email="El email ingresado no es valido";
  }

  if(!form.nombre.trim()){
    errors.nombre="El campo nombre es requerido";
  }
  if(form.contraseña.trim().length <5){
    errors.contraseña="Debe tener minimo 6 caracteres";
  }
  else if(!validator.isAlphanumeric(form.contraseña)){
    errors.contraseña="No puede ingresar caracteres especiales";
  }

  if(form.contraseña !== form.contraseña2){
    errors.contraseña2="Contraseñas no puede ser diferentes";
  }

  return errors;
}


export const RegistrarScreen = () => {




  const dispatch=useDispatch();

  const [form,errors,handleChange,handleBurn]=useForm(initialForm,validateForm)
  const {email,nombre,contraseña}=form;

  const handleSubmit=(e)=>{
    e.preventDefault();
    if(Object.keys(errors).length === 0){
      dispatch(startCreateNewUser(email,contraseña,nombre));
    }

  }




  return (
    <div className='grid grid-cols-6 w-5/5 sm:w-3/5 md:w-2/4 absolute animate__animated animate__fadeIn'>

          
          <div className='col-span-6 lg:col-span-3  px-10 py-10 text-white rounded-l-md' 
        style={{background: "rgb(99,88,222)",
        background: "linear-gradient(90deg, rgba(99,88,222,1) 54%, rgba(97,97,219,1) 63%)"}}>
          <h5 className='text-2xl font-bold text-center'>Formulario de Registro!</h5>
          <p className='py-4 text-center font-light'>Ingrese todo los campos y registrese para poder buscar los gift de su agrado</p>
          <div className='my-5 text-xs text-center'>
            <Link to="/auth/login" className='border px-10 font-medium py-2 rounded-full transition-colors ease-in delay-150 hover:bg-indigo-700 hover:border-indigo-700'>INGRESAR</Link> 
         </div>
        </div>

          <form className='col-span-6 lg:col-span-3 px-10 py-10 bg-slate-50 rounded-r-md' onSubmit={handleSubmit}>

          {
            errors.email
            &&<label className='text-red-600'>{errors.email}</label>
           
          }
          <input 
           type='email'
          autoComplete='off'
          className={
            'w-full rounded-sm bg-gray-200 mb-2.5 pl-2 py-1 outline-none text-gray-800 transition delay-200 ease-in focus:outline-gray-700 focus:text-black '+
            (errors.email
            &&
            'bg-red-500')
              }
          placeholder='Email'
          name='email'
          value={form.email}
          onBlur={handleBurn}
          onChange={handleChange} />
         
         {
            errors.nombre
            &&<div className='text-red-600'>{errors.nombre}</div>
          }
          <input 
          type='text'
          autoComplete='off'
          className={'w-full rounded-sm bg-gray-200 mb-2.5 pl-2 py-1 outline-none text-gray-800 transition delay-200 ease-in focus:outline-gray-700 focus:text-black '
          + (errors.nombre
            && 'bg-red-500')
        }
          placeholder='Nombre'
          name='nombre'
          value={form.nombre}
          onBlur={handleBurn}
          onChange={handleChange} />

        
        {
            errors.contraseña
            &&<div className='text-red-600'>{errors.contraseña}</div>
          }
           <input 
           type='password'
          autoComplete='off'
          className={'w-full rounded-sm bg-gray-200 mb-2.5 pl-2 py-1 outline-none text-gray-800 transition delay-200 ease-in focus:outline-gray-700 focus:text-black '
         +(errors.contraseña && 'bg-red-500')}
          placeholder='Contraseña'
          name='contraseña'
          value={form.contraseña}
          onBlur={handleBurn}
          onChange={handleChange} />
        


        {
            errors.contraseña2
            &&<div className='text-red-600'>{errors.contraseña2}</div>
           
          }

          <input 
           type='password'
          autoComplete='off'
          className={'w-full rounded-sm bg-gray-200 mb-2.5 pl-2 py-1 outline-none text-gray-800 transition delay-200 ease-in focus:outline-gray-700 focus:text-black '
        + (errors.contraseña2
          && 'bg-red-500')}
          placeholder='Repetir Contraseña' 
          name='contraseña2'
          value={form.contraseña2}
          onBlur={handleBurn}
          onChange={handleChange} />
       
        <div className='w-full text-center my-4 text-xs'>
          <button type='submit' 
          className='py-2 px-14 rounded-full text-white font-medium' style={{background: "rgb(99,88,222)",
          background: "linear-gradient(90deg, rgba(99,88,222,1) 54%, rgba(97,97,219,1) 63%)"}}>
            REGISTRARSE
          </button>
          </div>
         
        </form>
    </div>
  )
}
