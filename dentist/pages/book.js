import React from 'react'

const Book = () => {
  return (
    <div><section className="text-gray-600 body-font relative">
      <span className=' mt-4 text-xl md:text-4xl font-bold flex flex-col mx-10 space-y-3 '>
        Timings :
        <span className='text-base md:text-2xl mt-4'>
          From Monday to Friday   :  
          <span className='mx-4  text-violet-500'>10 AM to 5 PM</span>
        </span>
        <span className=' text-base md:text-2xl '>
          Closed On   :  
          <span className='mx-4  text-violet-500'>Sat & Sun</span>
        </span>
        <span className=' text-base md:text-2xl '>
          Phone Number   :  
          <span className='mx-4  text-violet-500'>+917999747067</span>
        </span>
      </span>
    <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
      <div className="lg:w-2/3 md:w-1/2 bg-gray-300 rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">

        <iframe width="100%" height="100%" className="absolute inset-0 map " frameBorder="0" title="map" marginHeight="0" marginWidth="0" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d794.2256168734617!2d81.94816134021768!3d21.743504718157045!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a2861360bdcc79b%3A0x8b704044e51dde13!2sBhaskar%20Dental%20Care!5e0!3m2!1sen!2sin!4v1675001233692!5m2!1sen!2sin" ></iframe>
        {/* <style jsx>
        {`.map{filter: grayscale(1) contrast(1.2) opacity(0.4);}`}
        </style> */}
        <div className="bg-white cursor-pointer relative flex flex-wrap py-6 rounded shadow-lg md:opacity-50 md:hover:opacity-100 invisible
         ">
          <div className="lg:w-1/2 px-6 text-black">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">ADDRESS</h2>
            <p className="mt-1 ">Dr. Bhaskar Dental Clinic, Sadar Bazaar, Bhatapara, Chhattisgarh 493118</p>
          </div>
          <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs">EMAIL</h2>
            <a className="text-indigo-500 leading-relaxed">example@email.com</a>
            <h2 className="title-font font-semibold text-gray-900 tracking-widest text-xs mt-4">PHONE</h2>
            <p className="leading-relaxed">+917999747067</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 md:w-1/2 bg-white flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
        <h2 className="text-gray-900 text-lg mb-1 font-medium title-font">Contact </h2>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
          <input type="text" id="name" name="name" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
          <input type="email" id="email" name="email" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-gray-600">Message</label>
          <textarea id="message" name="message" className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
        </div>
        <button className="text-white  bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded-full text-lg">Button</button>
        <p className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
      </div>
    </div>
  </section></div>
  )
}

export default Book