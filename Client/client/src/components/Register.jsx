import React from 'react'

const Register = () => {
  return (
    
    <div>
        
            <h1 className="text-center py-8 text-2xl">Register</h1>
        
        
        <form action="/register" method="post" className="flex flex-col justify-center items-center">
          <label htmlFor="">Firstname</label>
          <input type="text" placeholder="Enter Firstname" className="border rounded w-2/4 h-12 p-4 outline-none"/>
          <label htmlFor="">Lastname</label>
          <input type="text" placeholder="Enter Lastname" className="border rounded w-2/4 h-12 p-4 outline-none"/>
          <label htmlFor="">Email address</label>
          <input type="text" placeholder="Enter valid Email address" className="border rounded w-2/4 h-12 p-4 outline-none"/>
          <label htmlFor="">Password</label>
          <input type="password" placeholder="Create password" className="border rounded w-2/4 h-12 p-4 outline-none"/>
          
          <button></button>
        </form>
      
    </div>
    
  )
}

export default Register