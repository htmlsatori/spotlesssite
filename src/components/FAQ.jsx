import { useState } from "react";
import { motion } from "framer-motion";

const FAQData = [
  {
    question: "What if something is damaged?",
    answer:
      "While we take every precaution to ensure the safety of your belongings, accidents can happen. In the rare event of any damage, we are fully insured, and our team will work with you to resolve the issue promptly. ",
  },
  {
    question: "Do I need to supply cleaning supplies or equipment?",
    answer:
      "We bring our own professional-grade cleaning supplies and equipment. You don't have to worry about a thing. However, if you have specific products you'd like us to use or any special instructions, feel free to communicate that with us in advance.",
  },
  {
    question: "What cleaning products do you use?",
    answer:
      "We use human and pet-safe non-toxic cleaning products. If you have specific preferences or concerns, please let us know, and we'll be happy to accommodate.",
  },
  {
    question: "What about safety and privacy?",
    answer:
      "We are a family owned company, so trust and good relationships between us, our employees, and our clients are of paramount importance.  Because of this priority we vet our employees extensively and include confidentiality clauses in our contracts with them. If you provide us with a house key, we keep it in an individually lockable cubby in our key safe with a unique code per client. ",
  },
  {
    question: "Whats the process like working with you?",
    answer:
      "Either over a call, video chat, or email, we will assess your space and provide you with a quote. If you accept our quote, we require a form of access to your space, be it a code for a door, lockbox, or a copy of your house key. If you provide us with a house key, we keep it in an individually lockable cubby in our key safe with a unique code per client. Finally, we provide you a user login for our site where you can set away-from-home times and pay outstanding invoices. You of course have the option to not use our online system and communicate and pay via phone or mail as well.",
  },
];

export const FAQ = () => (
  <section className="relative pt-16 pb-16 bg-blueGray-50 overflow-hidden">
    <div className="absolute -top-10" id="FAQ" />
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: 0.2 }}>
      <div className="relative z-10 container px-2 sm:px-8 lg:px-4 mx-auto w-11/12 sm:w-full">
        <div className="md:max-w-4xl mx-auto">
          <h2 className="mb-16 custom-block-big-title text-center">
            Frequently Asked Questions
          </h2>
          <div className="mb-11 flex flex-wrap -m-1">
            {FAQData.map((item, index) => (
              <div className="w-full p-1">
                <FAQBox
                  title={item.question}
                  content={item.answer}
                  key={`${item.question}-${item.answer}`}
                  defaultOpen={index === 0}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  </section>
);

const FAQBox = ({ defaultOpen, title, content }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div
      className="pt-2 sm:pt-6 pb-2 px-3 sm:px-8  rounded-3xl bg-[#febf6dbe] custom-border-gray-darker mb-4 relative cursor-pointer "
      onClick={() => setIsOpen(!isOpen)}>
      <div className="flex flex-col p-2  justify-center items-start">
        <h3 className=" custom-content-title pt-3 sm:pt-0 pr-8 sm:pr-0 ">
          {title}
        </h3>
        <p
          className={`text-black pt-4 transition-all duration-300 overflow-hidden ${
            isOpen ? "max-h-96" : "max-h-0"
          }`}>
          {content}
        </p>
      </div>
      <div className="absolute top-6 right-4 sm:top-8 sm:right-8">
        <svg
          width="28px"
          height="30px"
          viewBox="0 0 20 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={`transition-all duration-500  ${
            isOpen ? "rotate-[180deg]" : "rotate-[270deg]"
          }`}>
          <path
            d="M4.16732 12.5L10.0007 6.66667L15.834 12.5"
            stroke="#FBFCF8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"></path>
        </svg>
      </div>
    </div>
  );
};
