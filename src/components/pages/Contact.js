import React, { useState } from 'react';

const Contact = () => {
  const [inputName, setInputName] = useState('');
  const [inputEmail, setInputEmail] = useState('');
  const [inputMessage, setInputMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [blurredName, setBlurredName] = useState(false);
  const [blurredEmail, setBlurredEmail] = useState(false);
  const [blurredMessage, setBlurredMessage] = useState(false);

  const handleInputChangeName = (e) => setInputName(e.target.value);
  const handleInputChangeEmail = (e) => setInputEmail(e.target.value);
  const handleInputChangeMessage = (e) => setInputMessage(e.target.value);

  const onBlurName = () => {
    setBlurredName(true);
  };
  const onBlurEmail = () => {
    setBlurredEmail(true);
  };
  const onBlurMessage = () => {
    setBlurredMessage(true);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const messageObject = {
      name: inputName,
      email: inputEmail,
      message: inputMessage,
    };

    setSubmitted(true);
    localStorage.setItem(messageObject)
  };

  return (
    <div className='flex flex-col justify-start ml-40 mr-36 my-24'>
      <h1 className='text-6xl font-[500] text-mainBlack pt-4'>Contact</h1>
      <form onSubmit={handleFormSubmit} className='flex flex-col mt-28'>
        <div>
          <div>
            <h2 className='text-4xl font-[400] text-mainBlack'>Name</h2>
          </div>
          <div className='my-4'>
            <input 
              onChange={handleInputChangeName}
              onBlur={onBlurName}
              value={inputName}
              name='name'
              type='text'
              className={blurredName === true && inputName === '' ? 'pr-3 py-3 placeholder-red placeholder-opacity-50 text-red relative bg-background rounded text-lg border-b-red border-2 shadow:none focus:outline-0 w-3/5 focus:border-b-red' : 'pr-3 py-3 placeholder-gray-400 text-mainBlack relative bg-background rounded text-lg border-b-[#c3c3c3] border-2 shadow:none focus:outline-0 w-3/5 focus:border-b-mainBlack ease-linear transition-all duration-300'}
              placeholder='Name'
              id='name'
              required
            />
          </div>
          <div className={blurredName === true && inputName === '' ? 'text-red' : 'text-background'}>
            <h3>Your name is a required field</h3>
          </div>
        </div>
        <div>
          <div className='mt-8'>
            <h2 className='text-4xl font-[400] text-mainBlack'>Email address</h2>
          </div>
          <div className='my-4'>
            <input 
              onChange={handleInputChangeEmail}
              onBlur={onBlurEmail}
              value={inputEmail}
              name='name'
              type='text'
              className={blurredEmail === true && inputEmail === '' ? 'pr-3 py-3 placeholder-red placeholder-opacity-50 text-red relative bg-background rounded text-lg border-b-red border-2 shadow:none focus:outline-0 w-3/5 focus:border-b-red' : 'pr-3 py-3 placeholder-gray-400 text-mainBlack relative bg-background rounded text-lg border-b-[#c3c3c3] border-2 shadow:none focus:outline-0 w-3/5 focus:border-b-mainBlack ease-linear transition-all duration-300'}
              placeholder='Email address'
              id='name'
              required
            />
          </div>
          <div className={blurredEmail === true && inputEmail === '' ? 'text-red' : 'text-background'}>
            <h3>Your email is a required field</h3>
          </div>
        </div>
        <div>
          <div className='mt-8'>
            <h2 className='text-4xl font-[400] text-mainBlack'>Message</h2>
          </div>
          <div className='my-4'>
            <input 
              onChange={handleInputChangeMessage}
              onBlur={onBlurMessage}
              value={inputMessage}
              name='name'
              type='text'
              className={blurredMessage === true && inputMessage === '' ? 'pr-3 py-3 placeholder-red placeholder-opacity-50 text-red relative bg-background rounded text-lg border-b-red border-2 shadow:none focus:outline-0 w-3/5 focus:border-b-red' : 'pr-3 py-3 placeholder-gray-400 text-mainBlack relative bg-background rounded text-lg border-b-[#c3c3c3] border-2 shadow:none focus:outline-0 w-3/5 focus:border-b-mainBlack ease-linear transition-all duration-300'}
              placeholder='Your message here'
              id='name'
              required
            />
          </div>
          <div className={blurredMessage === true && inputMessage === '' ? 'text-red' : 'text-background'}>
            <h3>Your message is a required field</h3>
          </div>
        </div>
        <div className='flex mt-14'>
          <button type='submit' className='block bg-mainBlack text-2xl text-mainWhite font-[400] rounded ease-linear transition-all duration-150 mx-1 my-1 px-6 py-2'>Submit</button>
          <div className={submitted === true ? 'text-[#00920F] text-xl ml-6 mt-3' : 'hidden'}>
            <p>Message sent successfully</p>
          </div>
        </div>
      </form>
    </div>
  );
}

export default Contact;