const InputField = ({ type, value, label, placeholder, name, onChange }) => {
   return (
      <div className="w-full">
         <label htmlFor={name}>{label}</label>
         <input
            onChange={onChange}
            className="block bg-white rounded-md mt-2 w-full p-2 focus:outline-[#D2B48C]"
            type={type}
            value={value}
            placeholder={placeholder}
            name={name}
         />
      </div>
   );
};

export default InputField;
