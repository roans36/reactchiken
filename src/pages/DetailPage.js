import React from 'react'
import { useLocation } from 'react-router'

const DetailPage = () => {

  const { state }= useLocation();

 const m = state.url.split('=');


  return (
    <div>
      <h1>{state.strCatagory}</h1>
      
      <iframe className='w-full aspect-video' src={`https://www.youtube.com/embed/${m[1]}`} title='chicken'></iframe>
      <img src={state.strCategoryThumb}  alt="" />
      <p>{state.strCategoryDescription}</p>
    </div>
  )
}

export default DetailPage

