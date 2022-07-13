import { useCollection } from "../../hooks/useCollection";


const Database = () => {
 const {data}=useCollection()
 console.log(data)
  return (
    <div>
      <h2>database</h2>
      <div className="form-container">
        <form>
          
        </form>
      </div>
    </div>
  );
};

export default Database;