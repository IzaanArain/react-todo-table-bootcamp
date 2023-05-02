import { Children } from "react";

const Navbar = ({ name, age, data, click }) => {
  // console.log(props)
  return (
    <>
      <div className="container p-4 bg-danger">
        <h1 style={{fontWeight:"Bolder"}}>Single Object value : {name}</h1>
        <h1 style={{fontWeight:"Bolder"}}>
           {data.fname} {data.lname} {data.age}
        </h1>
        <button className=" col-lg-2 btn btn-primary" onClick={click}>
          Click
        </button>
      </div>
    </>
  );
};

export default Navbar;
