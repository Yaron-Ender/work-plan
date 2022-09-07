
const Monograph = ({Monograph}) => {
  
    return (
      <div className="substance-form-container">
        <form className="substance-form">
          <div className="monograph-title">
            <h3>{Monograph}</h3>
          </div>
          <label>
            <span></span>
            <input type="text" />
          </label>
        </form>
      </div>
    );
};

export default Monograph;