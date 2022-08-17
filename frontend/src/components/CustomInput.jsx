export const CustomInput = ({label, ...rest}) => {
  return (
    <div>
      <label htmlFor='id-input'>Nome:</label>
      <div>
        <input {...rest} id='id-input' type='text' placeholder={label} />
      </div>
    </div>
  );
};
