
const Button = ({children,...otherProps}) => {
    const{buttontype}= {...otherProps}
    let btnStyle={
     login:'login',
     substance:'substance'
    }

    return (
      <button
        {...otherProps}
        className={`btn ${btnStyle[buttontype]}`}
      >
        {children}
      </button>
    );
};

export default Button;