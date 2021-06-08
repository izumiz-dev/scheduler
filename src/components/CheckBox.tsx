export const CheckBox = ({ id, value, checked }: any) => (
  <div style={{ padding: '2px' }}>
    <input
      id={id}
      type="checkbox"
      name="inputNames"
      checked={checked}
      // onChange={onChange}
    />
    <label>{value}</label>
  </div>
);
