import React from 'react'
import { useNavigate } from 'react-router'


const Notfound = () => {
  const nav= useNavigate();
  return (
    <div>
      <div className='h-[370px]'>
<dotlottie-player src="https://lottie.host/a68bf31d-f9bf-41c7-987f-9a9fd8ec848f/wW3OYySdTE.json" background="transparent" speed="1"  loop autoplay></dotlottie-player>
</div>
<div className='text-center'></div>
<h1>Opps, something went wrong</h1>
<p>Page not Found</p>
<button onClick={()=> nav(+1)}>Go to Back Page</button>
    </div>
  )
}

export default Notfound
