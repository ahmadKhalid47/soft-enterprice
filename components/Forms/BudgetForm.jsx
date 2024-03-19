import { appendTerm, setCurrency, setDiscount, setService, setTerms } from '@app/store/budget';
import TextInput from '@components/TextInput';
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const BudgetForm = () => {
  const dispatch = useDispatch();
  const storedServices = useSelector(state => state.budget.service);
  const budget = useSelector(state => state.budget);
  console.log(storedServices)
  const [services, setServices] = useState(storedServices ? storedServices : [{}]); // An array of service objects
  const handleChange = (index, field, value) => {
    // Handle changes in form fields and update the state
    const updatedServices = [...services];
    updatedServices[index] = {
      ...updatedServices[index],
      [field]: value,
    };
    setServices(updatedServices);

    // Dispatch to Redux for storing the updated service object
    dispatch(setService(updatedServices));
  };

  const handleAddService = () => {
    // Add a new service object to the state
    setServices([...services, {}]);
  };
  const handleAddTerm = () => {
    dispatch(appendTerm('')); // You can pass an initial value for the new term if needed
  };


  return (
    <>
      {services.map((service, index) => (
        <div key={index} className="flex justify-evenly items-end gap-3">
          <TextInput
            label="Service Description"
            type="text"
            placeholder="Enter Service Description"
            value={service.description || ''}
            onChange={(e) => handleChange(index, 'description', e.target.value)}
          />
          <div className="w-[20%] flex flex-col">
            <label className="text-gray-900 3xl:text-2xl text-lg my-2">Package Type</label>
            <select
              value={service.packageType || ''}
              onChange={(e) => handleChange(index, 'packageType', e.target.value)}
            >
              <option value="">Select Package...</option>
              <option value="premium">Premium</option>
              <option value="standard">Standard</option>
            </select>
          </div>
          <TextInput
            label="Service Charges"
            type="text"
            placeholder="Enter Service Charges"
            value={service.charges || ''}
            onChange={(e) => handleChange(index, 'charges', e.target.value)}
          />
          {index === services.length - 1 && (
            <button
              className="flex justify-center items-center text-2xl p-3 rounded-full bg-white border w-[2.9rem] h-[2.9rem]"
              onClick={handleAddService}
            >
              <svg width="25" height="25" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                <path
                  fill="#000000"
                  d="M7.75 2a.75.75 0 0 1 .75.75V7h4.25a.75.75 0 0 1 0 1.5H8.5v4.25a.75.75 0 0 1-1.5 0V8.5H2.75a.75.75 0 0 1 0-1.5H7V2.75A.75.75 0 0 1 7.75 2Z"
                />
              </svg>
            </button>
          )}
        </div>
      ))}
      <div className="flex justify-center items-center gap-3 mb-2">

        <TextInput
          label="Currency"
          type='text'
          placeholder="Enter Currency"
          onChange={(e) => {
            dispatch(setCurrency(e.target.value))
          }}
        />
        <TextInput
          label="Discount"
          type='text'
          placeholder="Enter Discount"
          onChange={(e) => {
            dispatch(setDiscount(e.target.value))
          }}
        />
      </div>
      <div>
        <label className='text-gray-900 3xl:text-2xl text-lg '>Terms and Conditions</label>
        <div className='flex flex-col gap-3 mt-2'>
          {budget.terms.map((term, index) => (
            <TextInput
              key={index}
              noLabel
              type="text"
              placeholder="Enter Terms"
              value={term}
              onChange={(e) => {
                dispatch(setTerms({ index, term: e.target.value }));
              }}
            />
          ))}
          <button className="border bg-blue-400 rounded-xl p-3 py-3 text-white"  onClick={handleAddTerm}>Add Term</button>
        </div>
      </div>

    </>
  );
};

export default BudgetForm;
