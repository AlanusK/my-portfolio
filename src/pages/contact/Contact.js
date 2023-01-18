import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import { FaLinkedin, FaTwitter, FaGithub } from 'react-icons/fa'

export const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_k7livlk', 'template_zc2tb0b', form.current, 'ZHOXgvJFv8cbbEnJG')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });

        e.target.reset();
    };

    return (
        <div className='flex flex-col bg-secondary-dark -mx-12 px-12 py-6'>
            <div className=''>
                <h5>Have an interesting project? I would love to hear about it.</h5>
                <h1 className='mt-4 mb-2'>Let's Connect! ✉️</h1>
                <p>If you ever want a quick chat - you can find me on social media or you can just send me a message here!</p>
            </div>

            <div className='flex items-center justify-around my-2'>
                <h2><a href='https://www.linkedin.com/in/alanus-kajara-7a5bb032'><FaLinkedin /></a></h2>
                <h2><a href='https://twitter.com/AlanKajara'><FaTwitter /></a></h2>
                <h2><a href='https://github.com/alanusk'><FaGithub /></a></h2>
            </div>

            <div className='my-2'>
                <form ref={form} onSubmit={sendEmail} className='flex flex-col'>
                    {/* <label>Name</label> */}
                    <input className='bg-[#1c1c1c] mb-4 px-4 py-3 focus:outline-none focus:border' type='text' name='name' id='name' placeholder='Name' required />
                    {/* <label>Email</label> */}
                    <input className='bg-[#1c1c1c] mb-4 px-4 py-3 focus:outline-none focus:border' type='email' name='email' id='email' placeholder='Email' required />
                    {/* <label>Message</label> */}
                    <textarea className='bg-[#1c1c1c] mb-4 px-4 py-3 focus:outline-none focus:border' name='message' id='message' placeholder='Message' required />
                    <input className='bg-primary-default rounded-lg p-2 w-36' type='submit' value='SEND MESSAGE' />
                </form>
            </div>
        </div>
    )
}
