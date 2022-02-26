import React from 'react';

const Contact = ({ input, handleInputChange, handleFormSubmit }) => {
  return (
    <div className='flex flex-col justify-start ml-40 mr-36 my-24'>
      <h1 className='text-6xl font-[500] text-black pt-4'>Contact</h1>
      <div className='hidden'>
        <p>Message sent successfully</p>
      </div>
      <div className='flex flex-col mt-28'>
        <div>
          <div>
            <h2 className='text-4xl font-[400] text-black'>Name</h2>
          </div>
          <div>
            <input 
              onChange={handleInputChange}
              value={input}
              name="search"
              type="text"
              className="form-control"
              placeholder="Name"
              id="search"
            />
          </div>
          <div>
            
          </div>
        </div>
        <div>
          <div>
            <h2 className='text-4xl font-[400] text-black'>Email address</h2>
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </div>
        <div>
          <div>
            <h2 className='text-4xl font-[400] text-black'>Message</h2>
          </div>
          <div>
            
          </div>
          <div>
            
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;