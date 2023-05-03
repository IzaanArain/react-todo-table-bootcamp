import { Children, useState } from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import userList from "./components/People";
import Form from "./components/Form";
import { v4 as uuidv4 } from "uuid";
import EditTable from "./components/EditTable";



const user = {
  fname: "john",
  lname: "wick",
  age: "89",
};

const inc = (arr) => {
  let num1 = 0;
  for (let i = 0; i < arr.length; i++) {
    num1 = Math.floor(Math.random() * 100);
  }
  return num1;
};

// console.log(inc(userList))
function App() {
  const [userData, setUser] = useState(user);
  const [ulist, setList] = useState(userList);
  const [newUser, setNewUser] = useState({
    id: 0,
    fname: "",
    lname: "",
    age: "",
  });

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchTermChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const clickNow = () => {
    setUser({ ...userData, fname: "helloWorld", lname: "jones", age: "41" });
  };

  const HandleChange = (e) => {
    const { name, value } = e.target;
    let newFormData={...newUser}
    newFormData[name]=value
    // setNewUser({ ...newUser, [name]: value });
    setNewUser(newFormData)
  };

  const deleteFunc = (id) => {
    setList((prevUsers) => prevUsers.filter((user) => user.id !== id));
  };

  const ClickHandler = (e) => {
    e.preventDefault();
    const newUserWithId = { ...newUser, id: inc(userList) };
    setList([...ulist, newUserWithId]);
    setNewUser({ id: null, fname: "", age: "", lname: "" });
  };
  return (
    <>
      <Navbar name="ali" age={88} data={userData} click={clickNow} />
      <Form
        data={newUser}
        onchange={HandleChange}
        click={ClickHandler}
        sTerm={searchTerm}
        doSearch={handleSearchTermChange}
      />
      <Main 
      list={ulist} 
      delete1={deleteFunc} 
      search={searchTerm} />
    </>
  );
}

export default App;
