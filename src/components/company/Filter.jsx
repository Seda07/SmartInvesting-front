import React from 'react';

const Filter = ({ id, label, type, options, placeholder }) => (
  <div className="flex-1">
    <label htmlFor={id} className="block text-gray-700">{label}:</label>
    {type === 'select' ? (
      <select 
        id={id} 
        aria-label={label} 
        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
      >
        {options.map((option, index) => (
          <option key={index} value={option}>{option}</option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        id={id}
        aria-label={label}
        className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
        placeholder={placeholder}
      />
    )}
  </div>
);

export default Filter;
