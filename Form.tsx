function Form() {
    return (
      <div className=' sm:block' >
      <div className=" flex flex-col justify-center" >
        <form className='max-w-[400px] w-full mx-auto bg-blue-100 p-8 px-8 rounded-lg'>
        <h2 className='text-4xl dark:text-white font-bold text-center'>SIGN IN </h2>
        <div className='flex flex-col text-gray-400 py-2'>
        <label>User name</label>
        <input className='rounded-lg bg-white mt-2 p-2 focus:border-blur-500 focus:bg-white ' type ="text" id="username"/>
        </div>
        <div className='flex flex-col text-gray-400 py-2'>
        <label>Email</label>
        <input className='rounded-lg bg-white mt-2 p-2 focus:border-blur-500 focus:bg-white' type ="email"/>
        
        </div>
  
        <div className='flex flex-col text-gray-400 py-2'>
        <label>Password</label>
        <input className='rounded-lg bg-white mt-2 p-2 focus:border-blur-500 focus:bg-white' type ="*****"/>
        
        </div>
  
        <div className='flex flex-col text-gray-400 py-2'>
        <label>Address</label>
        <input className='rounded-lg bg-white mt-2 p-2 focus:border-blur-500 focus:bg-white' type ="text"/>
        <div></div>
        </div>
  
  
        <div className='flex flex-col text-gray-400 py-2'>
        <label>Phone no.</label>
        <input className='rounded-lg bg-white mt-2 p-2 focus:border-blur-500 focus:bg-white' type ="text"/>
        
        </div>
      
  
  
  
  
      
        <button    className='w-full my-5 py-2 bg-teal-500 shadow-lg shadow-teal-500/50 '>Sign In</button>
  
  
  
        
  
        </form>
      </div>
      </div>
    );
  }
  
  export default Form;