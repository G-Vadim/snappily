'use client';
import { useState, useMemo } from 'react';
import Select from 'react-select';
import { Flex, Text, Center, Box, Input, Textarea, Checkbox, useBoolean } from '@chakra-ui/react';
import { motion, AnimatePresence } from 'framer-motion';

import { Button } from '@/app/components/Button';

const url = 'https://onboarding-api-prd.azurewebsites.net/enquiries';

const typeOptions = [
  { value: 'contactUs', label: 'Contact Us' },
  { value: 'demo', label: 'Demo' },
];

const colourStyles = {
  control: (styles) => ({
    ...styles,
    border: '1px solid #29262C',
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '500',
    ':hover': {
      border: '1px solid #29262C',
    },
  }),
  option: (styles) => ({
    ...styles,
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '500',
  }),
};

const initialForm = {
  enquiryType: typeOptions[0],
  email: '',
  contactNumber: '',
  name: '',
  message: '',
  subscribeToNewsletter: false,
};

const defaultErrors = {
  email: '',
  submit: '',
};

export const BookDemoModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(defaultErrors);
  const [isFormFullHeight, setFormFullHeight] = useBoolean(true);

  const handleChangeForm = (key, value) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleChangeTextInputs = (key) => (event) => {
    const { value } = event.target;
    handleChangeForm(key, value);
  };

  const handleChangeCheckbox = (event) => {
    const { checked } = event.target;
    handleChangeForm('subscribeToNewsletter', checked);
  };

  const handleChangeSelect = (opt) => {
    handleChangeForm('enquiryType', opt);
    setFormFullHeight.off();
  };

  const isFullForm = useMemo(() => formData.enquiryType.value === typeOptions[0].value, [formData.enquiryType.value]);

  const handleSubmit = async () => {
    setErrors(defaultErrors);
    let emailError = false;

    if (!formData.email) {
      setErrors((prevState) => ({
        ...prevState,
        email: 'This field is required!',
      }));
      emailError = true;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors((prevState) => ({
        ...prevState,
        email: 'The format is wrong!',
      }));
      emailError = true;
    }

    if (!emailError) {
      try {
        let data = {
          source: 'https://www.snappily.co.uk',
          email: formData.email,
        };

        if (isFullForm) {
          data = {
            ...formData,
            source: 'https://www.snappily.co.uk',
            enquiryType: formData.enquiryType.value,
          };
        }

        await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        setFormData(initialForm);
        setShowModal(false);
        setErrors(defaultErrors);
      } catch (e) {
        setErrors((prevState) => ({
          ...prevState,
          submit: "Sorry we couldn't send your enquiry, please try again later!",
        }));
      }
    }
  };

  return (
    <>
      <Button
        color="coral"
        bgColor="white"
        onClick={() => {
          setShowModal(true);
          setErrors(defaultErrors);
        }}
      >
        Book a demo
      </Button>
      {showModal && (
        <Center
          position="fixed"
          top={0}
          left={0}
          w="100vw"
          h="100%"
          zIndex={1}
          bgColor="rgba(0, 0, 0, 0.3)"
          onClick={() => {
            setShowModal(false);
          }}
        >
          <Box
            w="500px"
            rounded="base"
            bgColor="white"
            p="30px"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <motion.div
              initial={{ height: '545px' }}
              animate={{ height: isFullForm ? '545px' : '200px' }}
              onAnimationComplete={() => isFullForm && setFormFullHeight.on()}
            >
              <Flex mb="15px" flexDir="column" gap="8px">
                <label htmlFor="type">
                  <Text as="span" fontSize="xs" lineHeight="xs" fontWeight="medium">
                    Type
                  </Text>
                </label>
                <Select
                  options={typeOptions}
                  value={formData.enquiryType}
                  onChange={handleChangeSelect}
                  styles={colourStyles}
                />
              </Flex>
              <Flex mb="15px" flexDir="column" gap="8px">
                <label htmlFor="email">
                  <Text as="span" fontSize="xs" lineHeight="xs" fontWeight="medium">
                    Email{' '}
                  </Text>
                  <Text as="span" fontSize="xs" lineHeight="xs" fontWeight="medium" color="coral">
                    *
                  </Text>
                  {errors.email && (
                    <Text as="span" fontSize="xs" lineHeight="xs" fontWeight="light" color="coral">
                      {' '}
                      {errors.email}
                    </Text>
                  )}
                </label>
                <Input
                  id="email"
                  type="text"
                  fontSize="xs"
                  lineHeight="xs"
                  fontWeight="medium"
                  p="8px"
                  borderWidth="1px"
                  borderColor={errors.email ? 'coral' : 'charcoal'}
                  rounded="xs"
                  value={formData.email}
                  onChange={handleChangeTextInputs('email')}
                  placeholder="Enter your email"
                />
              </Flex>
              <AnimatePresence>
                {isFullForm && isFormFullHeight && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: isFullForm ? 1 : 0 }}>
                    <Flex mb="15px" flexDir="column" gap="8px">
                      <label htmlFor="contactNumber">
                        <Text as="span" fontSize="xs" lineHeight="xs" fontWeight="medium">
                          Phone number
                        </Text>
                      </label>
                      <Input
                        id="contactNumber"
                        type="text"
                        fontSize="xs"
                        lineHeight="xs"
                        fontWeight="medium"
                        p="8px"
                        borderWidth="1px"
                        borderColor="charcoal"
                        rounded="xs"
                        value={formData.contactNumber}
                        onChange={handleChangeTextInputs('contactNumber')}
                        placeholder="Enter your phone number"
                      />
                    </Flex>
                    <Flex mb="15px" flexDir="column" gap="8px">
                      <label htmlFor="name">
                        <Text as="span" fontSize="xs" lineHeight="xs" fontWeight="medium">
                          Name
                        </Text>
                      </label>
                      <Input
                        id="name"
                        type="text"
                        fontSize="xs"
                        lineHeight="xs"
                        fontWeight="medium"
                        p="8px"
                        borderWidth="1px"
                        borderColor="charcoal"
                        rounded="xs"
                        value={formData.name}
                        onChange={handleChangeTextInputs('name')}
                        placeholder="Enter your name"
                      />
                    </Flex>
                    <Flex mb="20px" flexDir="column" gap="8px">
                      <label htmlFor="message">
                        <Text as="span" fontSize="xs" lineHeight="xs" fontWeight="medium">
                          Message
                        </Text>
                      </label>
                      <Textarea
                        id="message"
                        rows={4}
                        fontSize="xs"
                        lineHeight="xs"
                        fontWeight="medium"
                        p="8px"
                        borderWidth="1px"
                        borderColor="charcoal"
                        rounded="xs"
                        value={formData.message}
                        onChange={handleChangeTextInputs('message')}
                        placeholder="Enter your message"
                        _hover={{
                          borderColor: 'charcoal',
                        }}
                      />
                    </Flex>
                    <Flex mb="15px" flexDir="column" gap="8px">
                      <Checkbox
                        size="lg"
                        spacing="15px"
                        alignItems="center"
                        value={formData.subscribeToNewsletter}
                        onChange={handleChangeCheckbox}
                      >
                        <Text fontSize="xs" fontWeight="medium">
                          Subscribe to Newsletter
                        </Text>
                      </Checkbox>
                    </Flex>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
            <Flex justifyContent="space-around">
              <Button onClick={() => setShowModal(false)}>Close</Button>
              <Button
                borderWidth="1px"
                _hover={{
                  borderColor: 'charcoal',
                }}
                onClick={handleSubmit}
              >
                Send
              </Button>
            </Flex>
            {errors.submit && (
              <Text mt="10px" fontSize="xs" lineHeight="xs" color="coral" fontWeight="medium" textAlign="center">
                {errors.submit}
              </Text>
            )}
          </Box>
        </Center>
      )}
    </>
  );
};
