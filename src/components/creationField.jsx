import { useState } from 'react';
import './global.css'




function Creationfield({ onCreate }){

    const [data, setData] = useState('')
    const handleChange = (e)=>{
        setData(e.target.value)
    }
    const handleSubmit= ()=>{
        if(data){
            onCreate(data)
        }
    }

    return <div className='menu'>
        <input onChange={handleChange} id='query' placeholder='Task Title'/>
        <button onClick={handleSubmit}>Add</button>
    </div>
}

export default Creationfield;