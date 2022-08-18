export const CustomInput = ({ label, place, type, ...rest }) => {
  return (
    <div>
      <label htmlFor='id-input'>{label}</label>
      <div>
        <input {...rest} id='id-input' type={type} placeholder={place} />
      </div>
    </div>
  );
};
