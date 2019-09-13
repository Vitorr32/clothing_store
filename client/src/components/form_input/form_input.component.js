import React from 'react';

import './form_input.styles.scss';

const FormInput = ({ handleChange, label, ...props }) => (
  <div className='group'>
    <input className='form_input' onChange={handleChange} {...props} />
    {label ? (
      <label
        className={`${props.value.length ? 'shrink' : ''} form_input_label `}
      >
        {label}
      </label>
    ) : null}
  </div>
);

export default FormInput;
