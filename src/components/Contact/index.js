/* eslint-disable no-use-before-define */
/* eslint-disable no-undef */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";


function ContactForm() {
    const {name, email, message} = formState;
    const [formState, setFormState] = useState({name:'', email:'', message:''});

    function handleChange(e) {
        setFormState({...formState, [e.target.name]: e.target.value})
    }
    console.log(formState);

    function handleSubmit(e) {
        e.preventDefault();
        console.log(formState)
    }

    return (
        <section>
            <h1>Contact me</h1>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" defaultValue={formState.name} onChange={handleChange} name="name"/>
                </div>
                <div>
                    <label htmlFor="email">Email address:</label>
                    <input type="email" defaultValue={formState.email} onChange={handleChange} name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea name="message" defaultValue={formState.message} onChange={handleChange} rows="5"  />
                </div>
            </form>
            <button type="submit">Submit</button>
        </section>
    )
}

export default ContactForm;