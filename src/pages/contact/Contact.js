import React, { useRef } from 'react';
import emailjs from 'emailjs-com';

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
        <div>
            <div>

                <h2>Let's Connect! 💌</h2>
                <p>
                    If you ever want to grab a coffee/bubble tea <span>(virtually)</span> or just want
                    a
                    quick
                    chat - you can find me on social media or you can send me a message here!
                </p>
                <ul>
                    <li>
                        <a href='https://www.linkedin.com/in/sharon-yi/'><i aria-hidden='true'></i></a>
                    </li>
                    <li>
                        <a href='https://twitter.com/sharon_yi'><i aria-hidden='true'></i></a>
                    </li>
                    <li>
                        <a href='https://github.com/sharon-yi'><i aria-hidden='true'></i></a>
                    </li>
                </ul>
            </div>
            {/* <div classname='flex'>
                <form action='thankyou/thanks' method='POST' name='contact'>
                    <input type='hidden' name='form-name' value='contact' />

                    <input type='text' name='name' id='name' placeholder='name' autocomplete='off' required='' />

                    <input type='email' name='email' id='email' placeholder='email' required='' />

                    <textarea name='message' id='message' placeholder='message' required=''></textarea>
                    <div classname=''>
                        <button classname='' type='submit'>send message</button>
                    </div>
                </form>
            </div> */}
            <div>
                <form ref={form} onSubmit={sendEmail}>
                    <label>Name</label>
                    <input className='bg-black-dark' type='text' name='name' />
                    <label>Email</label>
                    <input className='bg-black-darker' type='email' name='email' />
                    <label>Message</label>
                    <textarea className='bg-black-[#181818]' name='message' />
                    <input type='submit' value='Send' />
                </form>
            </div>
        </div>
                        )
}
