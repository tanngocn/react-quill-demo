// eslint-disable-next-line react/prop-types
export default function CustomToolbar() {
  return (
    <div id='custom-toolbar'>
      <select className='ql-header'>
        <option value='1'></option>
        <option value='2'></option>
        <option selected></option>
      </select>
      <button className='ql-bold'></button>
      <button className='ql-italic'></button>
      <button className='ql-strike'></button>
      <button className='ql-underline'></button>
      <select className='ql-color'>
        <option value='red'></option>
        <option value='green'></option>
        <option value='blue'></option>
        <option value='orange'></option>
        <option value='violet'></option>
        <option value='#d0d1d2'></option>
        <option selected></option>
      </select>
      <button className='ql-iframe'>
        <span> Iframe</span>
      </button>
    </div>
  );
}
