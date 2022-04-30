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
  if(!validator.isAlphanumeric(form.contraseña)){
    errors.contraseña="No puede ingresar caracteres especiales";
  }else if(form.contraseña.trim().length <5){
    errors.contraseña="Debe tener minimo 6 caracteres";
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
    <div className='px-10 py-10 rounded bg-slate-50 w-5/5 sm:w-3/5 md:w-2/4 xl:w-1/4'>

          <h3 className='text-center font-bold uppercase text-3xl text-blue-600'>Nuevo Usuario</h3>

          <form className='my-5' onSubmit={handleSubmit}>

          <div></div>
          <input 
           type='email'
          autoComplete='off'
          className={
            'w-full ring rounded my-2.5 pl-2 py-1 outline-none text-gray-800 transition delay-200 ease-in focus:ring-indigo-600 focus:text-black '+
            (errors.email
            &&
            'ring-red-600')
              }
          placeholder='Email'
          name='email'
          value={form.email}
          onBlur={handleBurn}
          onChange={handleChange} />
          {
            errors.email
            &&<div className='text-red-600'>{errors.email}</div>
           
          }
          <input 
          type='text'
          autoComplete='off'
          className={'w-full rounded ring my-2.5 pl-2 py-1 outline-none text-gray-800 transition delay-200 ease-in focus:ring-indigo-600 focus:text-black '
          + (errors.nombre
            && 'ring-red-600')
        }
          placeholder='Nombre'
          name='nombre'
          value={form.nombre}
          onBlur={handleBurn}
          onChange={handleChange} />

          {
            errors.nombre
            &&<div className='text-red-600'>{errors.nombre}</div>
          }

           <input 
           type='password'
          autoComplete='off'
          className={'w-full rounded ring my-2.5 pl-2 py-1 outline-none text-gray-800 transition delay-200 ease-in focus:ring-indigo-600 focus:text-black '
         +(errors.contraseña && 'ring-red-600')}
          placeholder='Contraseña'
          name='contraseña'
          value={form.contraseña}
          onBlur={handleBurn}
          onChange={handleChange} />
          {
            errors.contraseña
            &&<div className='text-red-600'>{errors.contraseña}</div>
          }




          <input 
           type='password'
          autoComplete='off'
          className={'w-full rounded ring my-2.5 pl-2 py-1 outline-none text-gray-800 transition delay-200 ease-in focus:ring-indigo-600 focus:text-black '
        + (errors.contraseña2
          && 'ring-red-600')}
          placeholder='Repetir Contraseña' 
          name='contraseña2'
          value={form.contraseña2}
          onBlur={handleBurn}
          onChange={handleChange} />
          {
            errors.contraseña2
            &&<div className='text-red-600'>{errors.contraseña2}</div>
           
          }
        



          <button className='w-full bg-indigo-600 py-1 rounded text-white font-medium my-2.5 transition delay-200 ease-in hover:bg-indigo-700'>
            Registrarse
          </button>
  
          <div className='text-right text-blue-700 font-bold my-2'>
            <Link to="/auth/login">Ingresar Login</Link>
          </div>
     
         
        </form>
    </div>
  )
}
