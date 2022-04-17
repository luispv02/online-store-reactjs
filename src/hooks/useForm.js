import React, { useState } from 'react'

const useForm = (state = {}) => {
  
    const [inputvalue, setInputValue] = useState(state);

    const handleChange = (e) => {
        setInputValue({
            ...inputvalue,
            [e.target.name]: e.target.value
        })
    }

    return [inputvalue, handleChange]

}

export default useForm