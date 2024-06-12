import React,{useState} from 'react'
import axios from 'axios'

const ExForm = () => {
    const [formData,setFormData] = useState({
        name:'',
        email:'',
    })

    const handleChange = (e) =>{
        setFormData({
            ...formData,
            [e.target.name]:e.target.value
        })
    }
    const handleSubmit = async (e) =>{
        e.preventDefault()
        try{
            await axios.post('http://127.0.0.1:8000/api/form/',formData)
            alert('Data Saved successfully')
        } catch (error){
            alert('error Saving Data')
        }
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' name='name' value={formData.name} onChange={handleChange} />
            <input type='email' name='email' value={formData.email} onChange={handleChange} />

            <button type='submit'>Submit</button>

        </form>

    </div>
  )
}

export default ExForm