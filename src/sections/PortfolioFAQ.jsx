import { useState } from "react";
import Card4 from "../components/Card4.jsx";

const faqs = [
  {
    question: "What types of embroidery projects do you handle?",
    answer:
      "I handle logo embroidery, cap designs, jackets, patches, apparel branding, and custom embroidery projects.",
  },
  {
    question: "Can you digitize my own artwork?",
    answer:
      "Yes. I can convert your artwork, logos, and designs into embroidery-ready production files.",
  },
  {
    question: "Do you provide files for different embroidery machines?",
    answer:
      "Yes. I provide commonly used embroidery machine formats, including DST, PES, JEF, EXP, VP3, XXX, and other required formats.",
  },
];

const PortfolioFAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-[#F5F4F0] py-20 md:py-28">
      <div className="mx-auto px-5 md:px-10">
        {/* Section Heading */}
        <div data-aos="fade-up" className="mb-12 md:mb-16">
          <h2
            data-aos="fade-up"
            className="max-w-2xl text-3xl font-semibold tracking-tight text-[#182E28] md:text-5xl"
          >
            Portfolio Questions
          </h2>

          <p
            data-aos="fade-up"
            className="mt-4 max-w-xl text-sm leading-7 text-gray-500 md:text-base"
          >
            Common questions about my embroidery projects.
          </p>
        </div>

        {/* FAQ Cards */}

        <div data-aos="fade-up" className="mx-auto flex flex-col gap-4">
          {faqs.map((faq, index) => (
            <Card4
              key={index}
              number={`0${index + 1}`}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioFAQ;
