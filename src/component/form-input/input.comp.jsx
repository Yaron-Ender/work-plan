import React from 'react';

const FormInput = ({...otherProps}) => {
    const{label} = otherProps
    return (
        <div>
         <label>{label}</label>
          <input {...otherProps}
          />  
        </div>
    );
};

export default FormInput;