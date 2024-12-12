import { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "bootstrap/dist/css/bootstrap.min.css";
import UserDetails from "./UserDetails";

function UserModal() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async () => {
      let userData;
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users/"
        );
        userData = await response.json();
      } catch (error) {
        console.log(error);
        userData = [];
      }

      setUsers(userData);

      // Map
    })();
  }, []);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Full User Details
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>User Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {users.map((user, id) => (
            <UserDetails userData={user} key={id} />
          ))}
        </Modal.Body>
      </Modal>
    </>
  );
}
export default UserModal;
