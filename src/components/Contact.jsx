import React from 'react'

const Contact = () => {
  return (
    <div className='bg-mySignatureColor p-4 text-white pt-14' name="contact">
        <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-screen'>
            <div className='pb-8'>
                <p className='text-3xl font-signature inline border-b-2 text-yellow-500 border-gray-500'>Contact</p>
                <p className='py-7'> Submit the form to get in touch with me...!!</p>
            </div>
            <div className='flex justify-center items-center'> 
                <form action="https://getform.io/f/raeqqnja" method="POST" className='flex flex-col w-full md:w-1/2'>

                    <input type="text" name='name' placeholder='Enter your name...' className='p-2 bg-transparent text-white border-2 rounded-md focus:outline-none'/>

                    <input type="email" name='name' placeholder='Enter your email...' className='p-2 bg-transparent text-white border-2 my-4 rounded-md focus:outline-none'/>

                    <textarea placeholder='Enter your message...' name="message" rows='6' className='p-2 bg-transparent rounded-md border-2 text-white focus:outline-none'></textarea>

                    <button className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 flex items-center rounded-md hover:scale-105 mx-auto '>Let's Talk</button>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact