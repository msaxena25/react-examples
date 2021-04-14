import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Container,
} from "reactstrap";
import Tabs from "../Tabs";

const TabsModelComponent = (props) => {
  const [id, setId] = useState("");

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const open = (id) => {
    setId(id);

    setModal(!modal);
  };

  return (
    <Container>
      <Button color="danger" onClick={() => open("")}>
        Open Model
      </Button>
      <Button color="danger" onClick={() => open(123)}>
        Open Model with Props 123
      </Button>
      <Modal isOpen={modal} toggle={toggle} style={{ width: "90%" }}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <Tabs id={id}></Tabs>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    </Container>
  );
};

export default TabsModelComponent;
