'use client';
import { useState } from 'react';
import Select from 'react-select'

import { Button } from "@/app/components/Button";

const url = 'https://www.movegenius.com/api/v1/enquireForDemo';

const typeOptions = [
  { value: 'partner', label: 'I am a partner (estate agent or conveyancer)' },
  { value: 'home_mover', label: 'I am a home mover ' },
];

const colourStyles = {
  control: (styles) => ({
    ...styles,
    border: '1px solid #29262C',
    borderRadius: '8px',
    fontSize: '14px',
    lineHeight: '20px',
    fontWeight: '500'
  }),
  option: (styles) => (
    {
      ...styles,
      fontSize: '14px',
      lineHeight: '20px',
      fontWeight: '500'
    }
  ),
};

const initialForm = {
  name: '',
  email: '',
  type: typeOptions[0],
  message: ''
};

const defaultErrors = {
  name: '',
  email: '',
  submit: '',
};

export const BookDemoModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState(initialForm);
  const [errors, setErrors] = useState(defaultErrors);

  const handleChangeForm = (key, value) => {
    setFormData((prevState) => ({ ...prevState, [key]: value }));
  };

  const handleChangeTextInputs = (key) => (event) => {
    const { value } = event.target;
    handleChangeForm(key, value);
  };

  const handleChangeSelect = (opt) => {
    handleChangeForm('type', opt);
  };

  const handleSubmit = async () => {
    setErrors(defaultErrors);
    if (!formData.name) {
      setErrors((prevState) => ({ ...prevState, name: 'This field is required!' }))
    }

    if (!formData.email) {
      setErrors((prevState) => ({ ...prevState, email: 'This field is required!' }))
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setErrors((prevState) => ({ ...prevState, email: 'The format is wrong!' }))
    }

    if (!errors.email && !errors.name) {
      try {
        await fetch(url, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...formData, type: formData.type.value }),
        });
        setFormData(initialForm);
        setShowModal(false);
      } catch (e) {
        setErrors((prevState) => ({ ...prevState, submit: 'Sorry we couldn\'t send your enquiry, please try again later!' }))
      }
    }
  };

  return (
    <>
      <Button className="text-coral bg-white" onClick={() => setShowModal(true)}>Book a demo</Button>
      {showModal && (
        <div
          className="fixed top-0 left-0 w-screen h-full flex items-center justify-center"
          style={{
            zIndex: 1,
            background: 'rgba(0, 0, 0, 0.3)'
          }}
          onClick={() => setShowModal(false)}
        >
          <div className="w-[500px] rounded-[24px] bg-white p-[30px]" onClick={(e) => {
            e.stopPropagation()
          }}>
            <div className="mb-[15px] flex flex-col gap-2">
              <label
                htmlFor="name"
              >
                <span className="text-xs font-medium">Name </span>
                <span className="text-coral">*</span>
                {errors.name && <span className="text-coral text-xs font-light"> {errors.name}</span>}
              </label>
              <input
                id="name"
                type="text"
                className={`text-xs font-medium p-2 border rounded-[8px] ${errors.name ? 'border-coral' : 'border-charcoal'}`}
                value={formData.name}
                onChange={handleChangeTextInputs('name')}
                placeholder="Enter your name"
              />
            </div>
            <div className="mb-[15px] flex flex-col gap-2">
              <label
                htmlFor="email"
              >
                <span className="text-xs font-medium">Email </span>
                <span className="text-coral">*</span>
                {errors.email && <span className="text-coral text-xs font-light"> {errors.email}</span>}
              </label>
              <input
                id="email"
                type="text"
                className={`text-xs font-medium p-2 border rounded-[8px] ${errors.email ? 'border-coral' : 'border-charcoal'}`}
                value={formData.email}
                onChange={handleChangeTextInputs('email')}
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-[15px] flex flex-col gap-2">
              <label
                htmlFor="type"
              >
                <span className="text-xs font-medium">Type </span>
              </label>
              <Select
                options={typeOptions}
                value={formData.type}
                onChange={handleChangeSelect}
                styles={colourStyles}
              />
            </div>
            <div className="mb-[15px] flex flex-col gap-2">
              <label
                htmlFor="message"
              >
                <span className="text-xs font-medium">Message</span>
              </label>
              <textarea
                id="message"
                rows={4}
                className="text-xs font-medium p-2 border border-charcoal rounded-[8px]"
                value={formData.message}
                onChange={handleChangeTextInputs('message')}
                placeholder="Enter your message"
              />
            </div>
            <div className="flex justify-around">
              <Button onClick={() => setShowModal(false)}>Close</Button>
              <Button
                className="border hover:border-charcoal"
                onClick={handleSubmit}
              >
                Send
              </Button>
            </div>
            {errors.submit && <p className="mt-[10px] text-xs text-coral font-medium text-center">{errors.submit}</p>}
          </div>
        </div>
      )}
    </>
  );
};
