import React from 'react'
import Image from 'next/image'

const Leftbar = () => {
  return (
    <div className=" w-20 h-screen bg-[#36404A] flex flex-col justify-around">
    <div>
      <Image
        src="/public/assets/logo.png"
        alt="test"
        width={20}
        height={20}
      />
    </div>

    <div className="w-full h-full flex flex-col justify-center space-y-10 items-center">
      <h1>profil</h1>
      <h1>chat</h1>
      <h1>rooms</h1>
      <h1>settings</h1>
    </div>
    <div>
      <h1>avatar</h1>
    </div>
  </div>
  )
}

export default Leftbar