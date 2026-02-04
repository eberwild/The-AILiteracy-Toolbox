import MainHeader from '../../components/MainHeader';
import '../../styles/pages/ContactPage.css';
import { NavLink } from 'react-router-dom';
import faqData from '../../data/faqData';
import FAQItem from '../../components/FAQItem';

function ContactPage() {

    return(

        <div className='contact-page'>
            <MainHeader/>

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
                <label for="name">Name</label>
                <input type="text"/>

                <label for="email">Email*</label>
                <input className='contact-email' required />

                <label for="message">Message*</label>
                <textarea className='contact-text-area' rows="5" required></textarea>

                <button type="button" className="submit-button" id="submit-button">Send Message</button>
            </form>
            

        </div>
    )
}

export default ContactPage;