
const Button = ({children,...otherProps}) => {
    const{buttonType}= {...otherProps}
    let btnStyle={
     login:'login',
     substance:'substance'
    }

    return (
      <button
        {...otherProps}
        className={`btn ${btnStyle[buttonType]}`}
      >
        {children}
      </button>
    );
};

export default Button;