import React, { useState } from 'react'
import '../index.css'

const Movie = () => {

   const [input, setInput] = useState("")
   const [count, setCount] = useState(0)
   const [movie, setMovie] = useState([])

   const addclick =()=>{
    if (input.trim() !=="") {
      setMovie([...movie, input])
      setCount(count+1)
      setInput("")
    }
   }

   const deletehandel =(index)=>{
    setMovie(movie.filter((m,i)=> i !== index))
    setCount(count-1)
   }

  return (
    <>
    <div style={{background: "linear-gradient(#e66465, #9198e5)", height:"703px"}}>
      <br />
     <h1 className='text-center text-white fw-bold'>Movie Watchlist</h1>
    <div className='d-flex justify-content-center'>
    <div className=' bg-white mt-3 p-3 rounded' style={{height:"auto", width:"500px"}}>
        <input type="text"
         className='border p-2 shadow rounded'
         placeholder='Enter movie title..' 
         value={input}
         onChange={(e)=>setInput(e.target.value)}
         style={{width:"370px"}}/>

         <button className='btn btn-primary ms-4'  onClick={addclick}>Add</button>

         <p className='mt-4'>total movie : {count}</p>
        
         {
          movie.length === 0 ?(
            <p className='text-center'>Your watchlist is empty.</p>
          ) : (
            <ul className='p-0 m-0'>
              {movie.map((movie, index)=>(
                <li className='border p-2 mt-2 d-flex justify-content-between align-items-center' key={index}>{movie}
                 <button onClick={()=>deletehandel(index)}>❌</button>
                </li>
              ))}
            </ul>
          )
         }

          

        </div>
    </div>
    </div>
    </>
  )
}

export default Movie