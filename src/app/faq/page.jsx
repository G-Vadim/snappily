"use client";
import { useState } from 'react';

import { BaseContainer } from '../components/BaseContainer';
import { PageTitle } from '../components/PageTitle';
import { TogetherSection } from '../components/TogetherSection';
import { faq } from '../data';

const Answer = ({ id, title, children }) => (
  <article className="flex flex-col gap-2" id={id}>
    <h3 className="text-md text-coral font-bold">{title}</h3>
    <div className="flex flex-col gap-5 text-xs leading-[22px] font-light">
      {children}
    </div>
  </article>
)

const FAQ = () => {
  const [activeQuestion, setActiveQuestion] = useState(faq.questions[0].id);

  const handleClickQuestion = (id) => {
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setActiveQuestion(id);
  };

  return (
    <>
      <BaseContainer>
        <PageTitle {...faq.header}/>
        <section className="mt-[75px] pt-20 flex gap-5 border-t border-t-1 border-t-[rgba(41, 38, 44, 0.1)]">
          <div className="flex flex-col gap-2 sticky top-10 min-w-[483px] h-fit">
            {faq.questions.map(({ id, text }) => (
              <h4
                key={id}
                className={`text-xs font-light leading-[22px] hover:cursor-pointer${activeQuestion === id ? ' text-coral': '' }`}
                onClick={() => handleClickQuestion(id)}
              >
                {text}
              </h4>
            ))}
          </div>
          <div className="flex flex-col gap-20">
            {faq.questions.map(({ id, text, answer }, i) => (
              <Answer key={i} id={id} title={text}>{answer}</Answer>
            ))}
          </div>
        </section>
      </BaseContainer>
      <TogetherSection/>
    </>
  );
};

export default FAQ;
