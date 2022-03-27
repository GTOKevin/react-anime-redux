import { useState } from "react"

export const useForm = (initialState,validateForm) => {

    const [form, setForm] = useState(initialState);
    const [errors, seterrors] = useState({});


    const handleChange=(e)=>{
        const name = e.target.name;
        const valor = e.target.value;
        setForm({
            ...form,
            [name]:valor
        });

    }

    const handleBur=(e)=>{
        handleChange(e);
        seterrors(validateForm(form));
    }

    const handleReset=()=>{
        setForm(initialState);
    }


    return [form,errors,handleChange,handleBur,handleReset];

}
