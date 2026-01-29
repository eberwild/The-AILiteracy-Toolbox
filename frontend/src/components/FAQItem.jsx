import { useState } from "react";
import '../styles/components/FAQItem.css';

function FAQItem({ question, answer }) {
  // State ersetzt aria-expanded + classList
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(prev => !prev);
  };

  return (
    <div className="faq-item">
      <button
        onClick={handleClick}
        aria-expanded={expanded}   // React setzt das Attribut
        className="faq-question"
      >
        {question}
      </button>

      <div className={`faq-answer ${expanded ? "-open" : ""}`}>
        {answer}
      </div>
    </div>
  );
}

export default FAQItem;
