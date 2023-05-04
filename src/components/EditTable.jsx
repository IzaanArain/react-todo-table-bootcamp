import React from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";

function MyVerticallyCenteredModal(props) {
  return (
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
        <Form>
          <h1 style={{ fontFamily: "fantasy,cursive" }}>ID : {props.item.id}</h1>
          <hr />
          <Form.Group className="mb-3" controlId="formFname">
            <Form.Label>
              <h3 style={{ fontFamily: "cursive", fontWeight: "bolder" }}>
                First Name :{props.item.fname}
              </h3>
            </Form.Label>
            <Form.Control
              type="text"
              name="fname"
              value={props.item.fname}
              placeholder="Enter first name"
              onChange={props.onchange}
            />
            {/* <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text> */}
          </Form.Group>
      
          <Form.Group className="mb-3" controlId="formLname">
            <Form.Label>
              <h3 style={{ fontFamily: "cursive", fontWeight: "bolder" }}>
                Last Name : {props.item.lname}
              </h3>
            </Form.Label>
            <Form.Control
              type="text"
              // name="lname"
              // value={props.item.lname}
              placeholder="Enter last name"/>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formAge">
            <Form.Label>
              <h3 style={{ fontFamily: "cursive", fontWeight: "bolder" }}>
                Age :{props.item.age}
              </h3>
            </Form.Label>
            <Form.Control 
            type="text" 
            // name="age"
            // value={props.item.age} 
            placeholder="enter Age" />
          </Form.Group>
          {/* <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group> */}
          <Button 
          variant="primary" 
          type="submit">
            Submit
          </Button>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

function EditTable({ item ,onchange}) {
  const [modalShow, setModalShow] = React.useState(false);

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

      {/* {console.log(tablelist)} */}

      <MyVerticallyCenteredModal
        item={item}
        onchange={onchange}
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}

export default EditTable;
