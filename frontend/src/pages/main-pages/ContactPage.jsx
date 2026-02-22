import MainHeader from '../../components/MainHeader';
import axios from 'axios';
import '../../styles/pages/ContactPage.css';
import faqData from '../../data/faqData';
import FAQItem from '../../components/FAQItem';
import { useState } from 'react';

function ContactPage() {

    // state object for email contact
    const [contact , setContact ] = useState({
        email: "" ,
        message: ""
    })

    async function sendContactMail(input) {
        try{
            const response = axios.post('http://localhost:5000/api/email/contact' , {
                email: input.email ,
                message: input.message
            });
            console.log(response);
        } catch(err) {
            console.log('Error in sending contact mail!' , err.message)
        }
    }

    return(

        <div className='contact-page'>
            <MainHeader/>

            <div className='aboutUs-section'>
                <h2>About Us</h2>
                <div className='contact-spacer'></div>
                <p className='about-info'>
                    The project originally started as a student group initiative at the University of Duisburg-Essen, 
                    aimed at providing practical, real-world learning experiences in artificial intelligence.
                    <br/>
                    <br/>
                    The project was continued and finalized as part of my Bachelor thesis. During this phase, 
                    I added new functionalities and refined the existing tools, 
                    turning the toolbox into a complete, fully functional educational resource.
                    <br/>
                    <br/>
                    The project was supervised by <a className='prof-link' href="https://iachounta.com/website/">Prof. Dr. Irene‑Angelica Chounta</a>
                    , Professor of Computational Methods in Modeling and Analysis of Learning Processes at the University of Duisburg‑Essen. 
                    Her research focuses on computational learning analytics, 
                    AI in education, and educational technologies, providing valuable guidance on educational and technical aspects of the project.
                </p>

            </div>

            <div className="contact-intro-section">
                <h2>Contact Us</h2>
                <div className="contact-spacer"></div>
                <p className="contact-intro">
                    Got questions, suggestions, or ideas for collaboration?<br />
                    Fill out the form below and we’ll get back to you as soon as possible.
                    <br/>
                    <br/>
                    Not sure if you need to contact us? Maybe your question has already been answered below. 
                    Check out our FAQ section — we’ve gathered some of the most common queries to help you out quickly!
                </p>
            </div>

            <section className="faq-section">
            <h2 className='faq-header'>Frequently Asked Questions (FAQ)</h2>
            <div className='contact-spacer'></div>

            {faqData.map (faq => (

                <FAQItem 
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    />
            ))}

            </section>

            <h2>Contact us here via Email</h2>
            <div className='contact-spacer'></div>

            <form className='contact-form'>

                <label htmlFor="email">Email*</label>
                <input className='contact-email' required 
                    id='email'
                    value={contact.email}
                    onChange={(event) => {
                        setContact({...contact , email: event.target.value})
                    }}/>

                <label htmlFor="message">Message*</label>
                <textarea className='contact-text-area' 
                          id='message'
                          rows="5" 
                          required
                          value={contact.message}
                            onChange={(event) => {
                                setContact({... contact , message: event.target.value})
                        }}>      
                </textarea>

                <button type="button" 
                        className="submit-button" 
                        id="submit-button"
                        onClick={ async () => {
                            await sendContactMail(contact);
                            console.log('Contact mail sent.');
                        }}
                >
                    Send Message
                </button>

            </form>
            

        </div>
    )
}

export default ContactPage;