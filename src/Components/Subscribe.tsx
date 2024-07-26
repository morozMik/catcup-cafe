import React, { useState } from 'react'

function Subscribe() {

  const [email, setEmail] = useState(' ')

  const emailSubsciption = (e: any) => {
    setEmail('')
    e.preventDefault();
  }
  const emailChange = (v: string) => {
    setEmail(prev => v)
  }

  return (
    <div className='mt-56 bg-no-repeat bg-cover bg-[url(./public/Pngs/subsscribe.png)]'>
      <div className='py-20'>
      <h3 className='m-plus-bold text-white text-3xl tracking-widest'>
        Subscribe to get 50% discount price
      </h3>
      <div className='relative'>
        <form onSubmit={emailSubsciption}>
          <input type="email" placeholder='Email address' value={email} 
            onChange={e => setEmail(e.target.value)} 
            className="form-input w-2/5 h-9 text-sm border-none focus:border-none focus:outline-none rounded-lg mt-8"/>
          <button type="submit" value="Submit"
            className='absolute right-0 top-1/2 mr-56 mt-0.5 bg-green-light py-1 px-3 font-inter rounded-lg text-sm'>
              Order now
          </button>
        </form>
      </div>
      </div>
    </div>
  )
}

export default Subscribe