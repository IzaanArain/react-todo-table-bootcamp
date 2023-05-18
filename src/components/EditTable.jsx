import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function MyVerticallyCenteredModal(props) {
  // console.log("modal : ",props.update_data)
  let {update_data}=props
  const id=props.item.id;
  const [fname,setFname]=useState(props.item.fname)
  const [lname,setLname]=useState(props.item.lname)
  const [age,setAge]=useState(props.item.age)

  const updatedInfo={id,fname,lname,age}

  const handleSubmit=(e)=>{
    e.preventDefault()
    update_data(id,updatedInfo)
  }
  return (
    <>
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          You can update your information
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {/* <h4>Centered Modal</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p> */}
        <Form onSubmit={handleSubmit}>
          <h1 style={{ fontFamily: "fantasy,cursive" }}>ID : {id}</h1>
          <hr />
          <Form.Group className="mb-3" controlId="formFname">
            <Form.Label>
              <h3 style={{ fontFamily: "cursive", fontWeight: "bolder" }}>
                First Name : {fname}
              </h3>
            </Form.Label>
            <Form.Control
              type="text"
              name="fname"
              value={fname}
              onChange={(e)=>setFname(e.target.value)}
              placeholder="Enter first name"
              className="shadow"
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
      
          <Form.Group className="mb-3" controlId="formLname">
            <Form.Label>
              <h3 style={{ fontFamily: "cursive", fontWeight: "bolder" }}>
                Last Name : {lname}
              </h3>
            </Form.Label>
            <Form.Control
              type="text"
              name="lname"
              value={lname}
              onChange={(e)=>setLname(e.target.value)}
              placeholder="Enter last name"
              className="shadow"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>
              <h3 style={{ fontFamily: "cursive", fontWeight: "bolder" }}>
                Age :{age}
              </h3>
            </Form.Label>
            <Form.Control 
            type="text" 
            name="age"
            value={age}
            onChange={(e)=>setAge(e.target.value)}
            placeholder="enter Age" 
            className="shadow"/>
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
         <Form.Group>
         <Button 
          variant="primary" 
          type="submit">
            Submit
          </Button>
         </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
    </>
  );
}

function EditTable({ item,onchange,new_data,update_data}) {
  const [modalShow, setModalShow] = React.useState(false);
  // console.log("EditTable-button : ",update_data)
  return (
    <>
      <button
        className="col-lg-5 
      col-sm-5 
      btn 
      btn-outline-warning"
        onClick={() => setModalShow(true)}
      >
        EDIT
      </button>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <MyVerticallyCenteredModal
        item={item}
        onChange={onchange}
        new_data={new_data}
        update_data={update_data}
        show={modalShow}
        onHide={() => setModalShow(false)}
        backdrop="static"
        keyboard={false}
      />
    </>
  );
}

export default EditTable;
