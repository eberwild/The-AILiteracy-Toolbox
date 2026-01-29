import MainHeader from '../../components/MainHeader';
import '../../styles/pages/ContactPage.css';
import { NavLink } from 'react-router-dom';

function ContactPage() {

    function handleClick(event) {
        const button = event.target;
        const expanded = button.getAttribute('aria-expanded') === 'true';
        button.setAttribute('aria-expanded', !expanded);
        const answer = button.nextElementSibling;
        if (!expanded) {
            answer.classList.add('open');
        } else {
            answer.classList.remove('open');
      }
    }

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

            

            <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                Who can benefit from these AI literacy tools?
                </button>
                <div className="faq-answer">
                <p>Students, educators, professionals, and anyone interested in learning about AI can benefit from these interactive tools.</p>
                </div>
            </div>

            <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                How do I submit my own AI tool or game?
                </button>
                <div className="faq-answer">
                <p>
                    You can submit new tools or games through the <NavLink to='/add-tool'> AddTool </NavLink>
                    page by providing the required information such as title, contact email, type, GitHub link, and description.
                </p>
                </div>
            </div>

            <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                Are the tools suitable for beginners in AI?
                </button>
                <div className="faq-answer">
                <p>Yes, many tools are designed to be beginner-friendly, helping users build foundational knowledge and skills in AI.</p>
                </div>
            </div>

            <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                What should I do if a tool is not working correctly?
                </button>
                <div className="faq-answer">
                <p>
                    If you experience issues, try refreshing the page, clearing your browser cache, or using a different browser.
                    If problems persist, please contact us via the form below with a detailed description.
                </p>
                </div>
            </div>

            <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                Can I use these tools for classroom teaching or workshops?
                </button>
                <div className="faq-answer">
                <p>Absolutely! Our tools are designed to support education and can be used in classrooms, workshops, and self-study settings.</p>
                </div>
            </div>

            <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                How often do you add new tools or update existing ones?
                </button>
                <div className="faq-answer">
                <p>We regularly review submissions and update the toolbox to include new and improved tools to keep the learning experience fresh and relevant.</p>
                </div>
            </div>

            <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                Is there a way to request a specific AI literacy topic or tool?
                </button>
                <div className="faq-answer">
                <p>
                    Yes, you can contact us through the Contact Form
                    and suggest topics or tools you'd like to see added to the toolbox.
                </p>
                </div>
            </div>

            <div className="faq-item">
                <button className="faq-question" aria-expanded="false">
                Can I contribute translations or improvements to existing tools?
                </button>
                <div className="faq-answer">
                <p>
                    We welcome contributions! Please get in touch with us via the Contact Form on this page
                    to discuss how you can help improve or translate the tools.
                </p>
                </div>
            </div>
            </section>

        </div>
    )
}

export default ContactPage;