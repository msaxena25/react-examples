import { ErrorMessage, Formik } from "formik";
import React, { useState } from "react";
import FontAwesome from "react-fontawesome";
import {
  Button,
  Col,
  Form,
  FormGroup,
  Input,
  InputGroup,
  InputGroupAddon,
  Label,
  ListGroup,
  ListGroupItem,
  Row,
} from "reactstrap";

const EmailOptions = (props) => {
  const values = {
    inputEmail: "",
    emailNotification: false,
    deliveryMethod: 1,
  };
  // const [inputEmail, setInputEmail] = useState("");
  const [emailList, setEmailList] = useState([]);

  const styles = {
    deleteIcon: {
      marginLeft: 10,
    },
    iconSection: {
      float: "right",
    },
    fontWeight600: {
      fontWeight: 600,
    },
  };

  const onEdit = (email, index) => {
    console.log("edit", email);
  };
  const onDelete = (index) => {
    const emails = [...emailList];
    emails.splice(index, 1);
    setEmailList(emails);
  };
  const onAdd = (inputEmail) => {
    if (inputEmail) {
      setEmailList([...emailList, inputEmail]);
    }
  };

  const validate = (values) => {
    const errors = {};
    if (!values.inputEmail) {
      errors.inputEmail = "Required";
    } else if (
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.inputEmail)
    ) {
      errors.inputEmail = "Invalid email address";
    }
    return errors;
  };
  const handleSubmit = (values, { setSubmitting }) => {
    const valuesarr = Object.values(values);
    console.log(valuesarr);
  };

  const emailListGroupItems = emailList.map((email, index) => {
    return (
      <ListGroupItem key={index}>
        {email}
        <div style={styles.iconSection}>
          <FontAwesome name="pencil" onClick={() => onEdit(email, index)} />
          <FontAwesome
            style={styles.deleteIcon}
            name="trash"
            onClick={() => onDelete(index)}
          />
        </div>
      </ListGroupItem>
    );
  });

  return (
    <Formik initialValues={values} onSubmit={handleSubmit} validate={validate}>
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <Form onSubmit={handleSubmit}>
          <Label style={styles.fontWeight600}>Email Options</Label>
          <FormGroup>
            <Row>
              <Col>
                <Label>CC Email List</Label>
                <InputGroup>
                  <Input
                    type="email"
                    name="inputEmail"
                    id="inputEmail"
                    value={values.inputEmail}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <InputGroupAddon addonType="append">
                    <Button
                      color="secondary"
                      onClick={() => onAdd(values.inputEmail)}
                    >
                      Add
                    </Button>
                  </InputGroupAddon>
                </InputGroup>
                <ErrorMessage name="inputEmail" />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Label style={styles.fontWeight600}>Emails</Label>
            {emailListGroupItems.length ? (
              <ListGroup>{emailListGroupItems}</ListGroup>
            ) : (
              <ListGroupItem>No Email Selected</ListGroupItem>
            )}
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4" xs="auto">
                <Label style={styles.fontWeight600}>Email Notification</Label>
              </Col>
              <Col sm="3" xs="auto">
                <Input
                  type="checkbox"
                  name="emailNotification"
                  value={values.emailNotification}
                  onChange={handleChange}
                  onBlur={handleBlur}
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Row>
              <Col sm="4">
                <Label style={styles.fontWeight600} for="delivery">
                  Delivery Method
                </Label>
              </Col>
              <Col>
                <Input
                  type="select"
                  name="deliveryMethod"
                  value={values.deliveryMethod}
                  onChange={handleChange}
                  onBlur={handleBlur}
                >
                  <option value="1">Email Body</option>
                  <option value="2">Email Attachment</option>
                </Input>
              </Col>
            </Row>
          </FormGroup>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};
export default EmailOptions;
