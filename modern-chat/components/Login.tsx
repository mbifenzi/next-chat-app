import React from 'react'

const Login = () => {
  return (
    <div className='w-screen h-screen bg-[#303841] flex justify-center items-center'>
      <div className='w-2/5 h-1/4 bg-slate-600 flex flex-col justify-around items-center rounded-3xl'>
        <div >
          <h1 className='text-4xl text-white text-center'>Welcome to T-Ponx</h1>
        </div>
        <div className='w-1/2 h-1/5 bg-[#6159CB] flex justify-center items-center rounded-3xl cursor-pointer' >
            <h1 className='text-xl text-white text-center'>Login with 42</h1>
        </div>
      </div>
    </div>

  )
}

export default Login