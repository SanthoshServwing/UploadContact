import React,{useEffect,useState} from 'react'
import axios from 'axios'

const Connection = () => {

    const[msg,setMsg] = useState('')

    useEffect(()=>{
        axios.get('http://127.0.0.1:8000/funct/')
        .then(res =>{
            setMsg(res.data.msg)
        }).catch(error =>{
            console.error('error da',error)
        })

    },[])


  return (
    <div>
        <h1>{msg}</h1>
    </div>
  )
}

export default Connection