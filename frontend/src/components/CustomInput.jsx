export const CustomInput = ({ label, place, type, ...rest }) => {
  return (
    <div>
      <label>{label}</label>
      <div>
        <input {...rest} type={type} placeholder={place} />
      </div>
    </div>
  );
};
