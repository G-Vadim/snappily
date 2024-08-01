'use client';
import { useState } from 'react';
import { Flex, Text, Accordion, AccordionItem, AccordionButton, AccordionPanel, Center } from '@chakra-ui/react';

import { BaseContainer } from '@/app/components/BaseContainer';
import { PageTitle } from '@/app/components/PageTitle';
import { TogetherSection } from '@/app/components/TogetherSection';
import { faq } from '@/app/data';
import { useMobile } from '@/app/utils/useMobile';
import { CircleAddIcon, CircleRemoveIcon } from '@/app/components/icons';

const Answer = ({ id, title, children }) => (
  <Flex as="article" flexDir="column" gap="8px" id={id}>
    <Text as="h3" fontSize="md" lineHeight="md" color="coral" fontWeight="bold">
      {title}
    </Text>
    <Flex flexDir="column" gap="20px" fontSize="xs" lineHeight="22px" fontWeight="light">
      {children}
    </Flex>
  </Flex>
);

const FAQ = () => {
  const isMobile = useMobile();
  const [activeQuestion, setActiveQuestion] = useState(faq.questions[0].id);

  const handleClickQuestion = (id) => {
    const target = document.getElementById(id);
    target.scrollIntoView({ behavior: 'smooth', block: 'center' });
    setActiveQuestion(id);
  };

  if (isMobile) {
    return (
      <>
        <BaseContainer p="16px" mb="24px">
          <PageTitle {...faq.header} />
          <Accordion allowToggle mt="40px">
            {faq.questions.map(({ id, text, answer }) => (
              <AccordionItem key={id}>
                {({ isExpanded }) => (
                  <>
                    <AccordionButton justifyContent="space-between" p="16px 0" gap="4px">
                      <Text as="h3" fontSize="md" lineHeight="md" fontWeight="bold" color="coral" textAlign="left">
                        {text}
                      </Text>
                      <Center minW="21px">{isExpanded ? <CircleRemoveIcon /> : <CircleAddIcon />}</Center>
                    </AccordionButton>
                    <AccordionPanel p="0 0 16px">{answer}</AccordionPanel>
                  </>
                )}
              </AccordionItem>
            ))}
          </Accordion>
        </BaseContainer>
        <TogetherSection />
      </>
    );
  }

  return (
    <>
      <BaseContainer>
        <PageTitle {...faq.header} />
        <Flex as="section" mt="75px" pt="80px" gap="20px" borderTop="1px" borderColor="rgba(41, 38, 44, 0.1)">
          <Flex flexDir="column" gap="8px" position="sticky" top="40px" minW="483px" h="fit-content">
            {faq.questions.map(({ id, text }) => (
              <Text
                as="h4"
                key={id}
                fontSize="xs"
                lineHeight="22px"
                fontWeight="light"
                _hover={{
                  cursor: 'pointer',
                }}
                color={activeQuestion === id ? 'coral' : ''}
                onClick={() => handleClickQuestion(id)}
              >
                {text}
              </Text>
            ))}
          </Flex>
          <Flex flexDir="column" gap="80px">
            {faq.questions.map(({ id, text, answer }, i) => (
              <Answer key={i} id={id} title={text}>
                {answer}
              </Answer>
            ))}
          </Flex>
        </Flex>
      </BaseContainer>
      <TogetherSection />
    </>
  );
};

export default FAQ;
