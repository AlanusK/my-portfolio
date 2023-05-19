import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
    const [loading, setLoading] = useState(false);

    const navigate = useNavigate();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm('service_k7livlk', 'template_zc2tb0b', form.current, 'ZHOXgvJFv8cbbEnJG')
            .then((result) => {
                console.log(result.text);
                setTimeout(() => {
                    navigate('/thanks');
                    setLoading(false)
                }, 2000);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className='w-full flex flex-col grow bg-secondary-dark -mx-12 px-12 py-6 md:flex-row'>
            <div className='md:w-1/2 md:pr-4'>
                <h5>Have an interesting project? </h5>
                <h5>I would love to hear about it.</h5>
                <h1 className='mt-4 mb-2'>Let's Connect! ✉️</h1>
                <p>If you ever want a quick chat - you can find me on social media or you can just send me a message here!</p>
                <div className='flex items-center justify-around my-4'>
                    <h2>
                        <a href='https://www.linkedin.com/in/alanus-kajara-peng-t-7a5bb032/'>
                            <FaLinkedin className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300'  />
                        </a>
                    </h2>
                    <h2>
                        <a href='https://twitter.com/AlanKajara'>
                            <FaTwitter className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
                        </a>
                    </h2>
                    <h2>
                        <a href='https://github.com/alanusk'>
                            <FaGithub className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300' />
                        </a>
                    </h2>
                </div>
            </div>

            <div className='my-2 md:w-1/2'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                    {/* <label>Name</label> */}
                    <input className='bg-[#1c1c1c] mb-4 px-4 py-3 focus:outline-none focus:border' type='text' name='name' id='name' placeholder='Name' required />
                    {/* <label>Email</label> */}
                    <input className='bg-[#1c1c1c] mb-4 px-4 py-3 focus:outline-none focus:border' type='email' name='email' id='email' placeholder='Email' required />
                    {/* <label>Message</label> */}
                    <textarea className='bg-[#1c1c1c] mb-4 px-4 py-3 focus:outline-none focus:border h-40' name='message' id='message' placeholder='Message' required />
                    {/* <input className='bg-primary-default rounded-lg p-2 w-40 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-dark duration-300' type='submit' value='SEND MESSAGE' /> */}
                    <div className='flex items-center'>
                        <button
                            type='submit'
                            className='relative inline-flex items-center px-4 py-2 leading-6 text-white transition delay-150 ease-in-out hover:-translate-y-1 hover:scale-110 bg-primary-default rounded-md shadow hover:bg-primary-dark duration-300'
                            disabled=''
                        >
                            <svg visibility={loading ? 'visibility' : 'hidden'} className='w-5 h-5 text-white animate-spin absolute left-1/2 -ml-2.5' xmlns='http://www.w3.org/2000/svg' fill='none'
                                viewBox='0 0 24 24'>
                                <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
                                <path className='opacity-75' fill='currentColor'
                                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'>
                                </path>
                            </svg>
                            <span className={!loading ? 'visible' : 'invisible'}>SEND MESSAGE</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}
