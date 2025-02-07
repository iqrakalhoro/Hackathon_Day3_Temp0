"use client";

import { useState } from "react";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";

// Define the FAQ Type
interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  { question: "How do I track my order?", answer: "You can track your order from your account dashboard." },
  { question: "What is your return policy?", answer: "You can return products within 30 days for a full refund." },
  { question: "Do you offer international shipping?", answer: "Yes, we ship to multiple countries worldwide." },
  { question: "How can I contact customer support?", answer: "You can reach us via email at support@example.com." },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto my-10">
      <h2 className="text-2xl font-semibold text-center mb-6">Frequently Asked Questions</h2>

      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="border-b pb-2">
            <button
              className="flex justify-between items-center w-full text-left p-3 bg-gray-100 rounded-md hover:bg-gray-200"
              onClick={() => toggleFAQ(index)}
            >
              <span className="text-lg font-medium">{faq.question}</span>
              {openIndex === index ? <FiChevronUp /> : <FiChevronDown />}
            </button>
            {openIndex === index && (
              <p className="p-3 bg-white text-gray-700 border-l-4 border-[#B88E2F]">{faq.answer}</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
