import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom';

export const Contact = () => {
    const navigate = useNavigate();

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k7livlk', 'template_zc2tb0b', form.current, 'ZHOXgvJFv8cbbEnJG')
            .then((result) => {
                console.log(result.text);
                navigate('/thanks')
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className='flex flex-col grow bg-secondary-dark -mx-12 px-12 py-6 md:flex-row'>
            <div className='md:w-1/2 md:pr-4'>
                <h5>Have an interesting project? </h5>
                <h5>I would love to hear about it.</h5>
                <h1 className='mt-4 mb-2'>Let's Connect! ✉️</h1>
                <p>If you ever want a quick chat - you can find me on social media or you can just send me a message here!</p>
                <div className='flex items-center justify-around my-4'>
                    <h2><a href='https://www.linkedin.com/in/alanus-kajara-7a5bb032'><FaLinkedin /></a></h2>
                    <h2><a href='https://twitter.com/AlanKajara'><FaTwitter /></a></h2>
                    <h2><a href='https://github.com/alanusk'><FaGithub /></a></h2>
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
                    <input className='bg-primary-default rounded-lg p-2 w-36 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:bg-primary-dark duration-300' type='submit' value='SEND MESSAGE' />
                </form>
            </div>
        </div>
    )
}
