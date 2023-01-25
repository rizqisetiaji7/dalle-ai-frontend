import React from 'react'

const FormField = ({labelName, type, name, placeholder, value, handleChange, isSurpriseMe, handleSurpriseMe, ...props}) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-2">
        <label htmlFor={name} className="block text-sm font-medium text-gray-900 dark:text-gray-100">{ labelName }</label>
        { isSurpriseMe && (
          <button type="button" onClick={handleSurpriseMe} className="font-semibold text-xs bg-emerald-500 hover:bg-emerald-600 py-1 px-2 rounded-[5px] text-white">Click to generate prompt</button>
        ) }
      </div>
      <input type={type} id={name} {...props} name={name} placeholder={placeholder} value={value} onChange={handleChange} required className="bg-gray-50 dark:bg-[#0d0c14] border border-gray-300 dark:border-[#201f2c] text-gray-900 dark:text-[#c4c6c9] text-sm rounded-lg focus:ring-[#6469ff] dark:focus:ring-[#6469ff] focus:border-[#6469ff] dark:focus:border-[#6469ff] outline-none block w-full p-3" />
    </div>
  )
}

export default FormField