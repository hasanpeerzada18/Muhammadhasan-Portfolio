import { useState } from "react";
import Card4 from "../components/Card4.jsx";

const faqs = [
  {
    question: "What is embroidery digitizing?",
    answer:
      "Embroidery digitizing is the process of converting artwork or a logo into a machine-readable embroidery file. The design is planned using appropriate stitch types, sequencing, density, and other technical settings so it can be embroidered on a machine.",
  },

  {
    question: "Which embroidery file formats do you provide?",
    answer:
      "I provide commonly requested embroidery machine formats, including DST, PES, JEF, EXP, and VP3, based on your project requirements.",
  },
  {
    question: "Can you convert an image into an embroidery file?",
    answer:
      "Yes. I can convert suitable images, artwork, and design references into embroidery-ready files.",
  },
  {
    question: "How long does embroidery digitizing take?",
    answer:
      "Most standard designs are completed within 2 to 4 hours, depending on the complexity of the artwork.",
  },
  {
    question: "Which embroidery machines are supported?",
    answer:
      "My digitized designs are compatible with Tajima, Brother, Barudan, and other embroidery machines.",
  },

  {
    question: "Who can use your embroidery digitizing service?",
    answer:
      "I provide embroidery digitizing services to brands, businesses, embroidery professionals, apparel companies, promotional-product businesses, and individuals who need embroidery-ready files.",
  },
  {
    question: "Do you provide custom embroidery digitizing?",
    answer:
      "Yes. Custom embroidery digitizing is one of my core services. I professionally digitize designs according to each project's specific requirements.",
  },
  {
    question: "How much does embroidery digitizing cost?",
    p: "Pricing is based on design size",
    p1: "Simple Designs: $5–$10",
    p2: "Professional Designs: $10–$15",
    p3: "Complex Designs: $15–$25",
    answer:
      "The final cost depends on your design's complexity, size, and digitizing requirements.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      data-aos="fade-up"
      className="bg-[#F5F4F0] px-5 py-20 md:px-10 lg:px-20"
    >
      <div className="mx-auto">
        <div data-aos="fade-up" className="mb-10">
          <span
            data-aos="fade-up"
            className="text-sm uppercase tracking-[3px] text-black"
          >
            FAQs
          </span>

          <h2
            data-aos="fade-up"
            className="mt-3 text-3xl font-semibold text-[#182E28] md:text-5xl"
          >
            Frequently Asked Questions
          </h2>
        </div>

        <div data-aos="fade-up" className="grid gap-4">
          {faqs.map((faq, index) => (
            <Card4
              key={index}
              number={String(index + 1).padStart(2, "0")}
              question={faq.question}
              p={faq.p}
              p1={faq.p1}
              p2={faq.p2}
              p3={faq.p3}
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

export default FAQs;
