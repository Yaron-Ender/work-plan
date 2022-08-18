
const Button = ({children,...otherProps}) => {
    const{buttonType,handleClick}= {...otherProps}
    let btnStyle={
     login:'login',
     primary:'primary'
    }

    return (
      <button
        {...otherProps}
        className={`btn ${btnStyle[buttonType]}`}
        onClick={handleClick}
      >
        {" "}
        {children}
      </button>
    );
};

export default Button;