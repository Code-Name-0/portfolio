import { useRef } from 'react'
import './contact_style.scss'
import emailjs from '@emailjs/browser'

export const Contact = () => {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        console.log(form.current.firstName.value);
        // emailjs.send("service_rm46jmj","template_ic10cmn", form.current ,"U6jJ7o7hjDaDG4r4y")

        emailjs.sendForm("service_rm46jmj","template_ic10cmn", form.current ,"U6jJ7o7hjDaDG4r4y").then(res => console.log(res))
    }
    return ( 
        <div id='Contact' className="contact">
            <div className="title">
                <label htmlFor="contactTitle">Get in Touch</label>
                <h2>Contact me</h2>
            </div>

            <form ref={form} onSubmit={sendEmail} className="contactInputs">

                <div className="input">
                <label htmlFor="firstName">First Name</label>
                    <input name='firstName' id='firstName' type="text" required />
                </div>
                <div className="input">
                <label htmlFor="lastName">Last Name</label>
                    <input name='lastName' id='lastName' type="text" required />
                </div>
                <div className="input">
                    
                <label htmlFor="senderEmail">Email</label>
                    <input name='senderEmail' id='senderEmail' type="text" required />
                    
                </div>

                <div className="input">
                <label htmlFor="phone">Phone Number</label>
                    <input name='phone' id='phone' type="tel" />
                </div>
                    
                    
                    
                <div className="textArea">
                    <label htmlFor="message">Message</label>
                    <textarea name="message" id="message"  required></textarea>
                </div>    
                    

                    <div className="input message">
                      
                            <input type="submit" />
                       
                    </div>

            </form>
        </div>
     );
}
 
