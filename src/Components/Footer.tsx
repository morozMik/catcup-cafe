import React from 'react'

function Footer() {
  return (
    <div className='mt-32 bg-green-footer p-9'>
      <div className='flex w-7/12 gap-8 text-white font-poppins text-base text-left'>
        <div className='flex-1'>
          <div className='flex flex-col gap-3 basis-1/4'>
            <div>
              Our cats
            </div>
            <div>
              Events
            </div>
            <div>
              Menu
            </div>
            <div>
              Locations
            </div>
            <div>
              Favorites
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <div className='flex flex-col gap-3 basis-1/4'>
            <div>
            Company
            </div>
            <div>
            About Us
            </div>
            <div>
            Careers
            </div>
            <div>
            Blog
            </div>
            <div>
            Press
            </div>
            <div>
            Gift Cards
            </div>
          </div>
        </div>
        <div className='flex-1'>
          <div className='flex flex-col gap-3 basis-1/2'>
            <div>
            Work with us  
            </div>
            <div>
            Become a Supplier
            </div>
            <div>
            Become an Partner
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer