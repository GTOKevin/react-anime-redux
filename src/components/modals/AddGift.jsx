
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux';
import { useForm } from '../../hooks/useForm';
import { addNewGift } from '../../action/gift';

const Initial={
  name:''
}

export const AddGift=({state,data})=> {
  const dispatch=useDispatch();
  const [form,error,handleChange]=useForm(Initial)
  const {modal, setModal} = state;

  const {uid}=useSelector(state=>state.auth);

  console.log(error);

  const handleSubmitModal=(e)=>{
    e.preventDefault();
    const post={
      userId:uid,
      id:data.id,
      name:form.name,
      url:data.image
    }
    dispatch(addNewGift(post));
    setModal(false);
  }


  return (
    <Transition.Root show={modal} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setModal}>
        <div className="flex min-h-screen text-center md:block md:px-2 lg:px-4" style={{ fontSize: 0 }}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity md:block" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden md:inline-block md:align-middle md:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
            enterTo="opacity-100 translate-y-0 md:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 md:scale-100"
            leaveTo="opacity-0 translate-y-4 md:translate-y-0 md:scale-95"
          >
            <div className="flex text-base text-left transform transition w-full md:inline-block md:max-w-2xl md:px-4 md:my-8 md:align-middle lg:max-w-4xl">
              <div className="w-full relative flex items-center bg-white px-4 pt-14 pb-8 overflow-hidden shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
                <button
                  type="button"
                  className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 sm:top-8 sm:right-6 md:top-6 md:right-6 lg:top-8 lg:right-8"
                  onClick={() => setModal(false)}
                >
                  <span className="sr-only">Close</span>
                  {/* <XIcon className="h-6 w-6" aria-hidden="true" /> */}
                </button>

                <form onSubmit={handleSubmitModal} className="w-full grid grid-cols-1 gap-y-8 gap-x-6 items-start sm:grid-cols-12 lg:gap-x-8">
                  <div className="aspect-w-2 aspect-h-3 rounded-lg bg-gray-100 overflow-hidden sm:col-span-4 lg:col-span-5">
                    <img src={data.image} alt={data.image} className="bg-cover w-full h-64" />
                  </div>
                  <div className="sm:col-span-8 lg:col-span-7">
                    <div className='w-full h-64 flex-row'>
                      <div className='h-2/6'><h5 className='font-semibold text-xl'>{data.title}</h5></div>
                      <div className='h-3/6 flex items-end'>
                        <input className='outline-none ring rounded w-full pl-2'
                        placeholder='Asignar nombre'
                        name='name'
                        value={form.value}
                        onChange={handleChange} />  

                      </div>
                      <div className='h-1/6 flex items-end'>
                        
                      <button className='w-full bg-blue-600 rounded text-white py-0.5'>Agregar</button>
                      </div>
                    </div>

                   

                  </div>
                </form>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
