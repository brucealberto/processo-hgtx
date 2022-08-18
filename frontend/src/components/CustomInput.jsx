export const CustomInput = ({ label, place, type, value, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input type={type} placeholder={place} value={value} onChange={onChange}/>
      </div>
    </div>
  );
};
