import { Formik } from "formik";
import React, { useState, useEffect } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Alert, Col, Form, FormGroup, Input, Label, Row } from "reactstrap";
import "./style.css";

const FormikFormComponent = (props) => {
  const [, setProspectId] = useState("");
  const [isRequired, setIsRequired] = useState(false);
  const [phone, setPhone] = useState("");

  let initialData = {
    firstName: "",
    lastName: "",
    emailAddress: "jane.doe@a.com",
    orgName: "ABC Company",
    orgParentName: "ABC Parent Company",
    phoneNumber: "",
    addressStreet: "123 ABC St",
    addressCity: "Dallas",
    addressState: "TX",
    addressZip: "75012",
    dbcName: "Jane Doe1",
    createdBy: "Jane",
    updatedBy: "Jane",
    salutation: "",
    middleName: "",
    suffix: "",
    marketManager: "MM1",
    businessType: "",
  };
  const [values] = useState(initialData);

  useEffect(() => {
   /*  const propsValues = {
      firstName: "Hello",
      lastName: "Hello 1",
      emailAddress: "hello@a.com",
      orgName: "Hello Company",
      orgParentName: "Hello Parent Company",
      phoneNumber: "00000000",
      addressStreet: "hello",
    };
    setValues(propsValues); */
  }, []);

  const validate = (values) => {
    const errors = {};
    return errors;
  };
  const handleSubmit = (values, { setSubmitting }) => {
    values.phoneNumber = phone;
    const tempValues = Object.assign({}, values);
    delete tempValues.suffix; // not mandatory field
    delete tempValues.salutation; // not mandatory field
    const valuesarr = Object.values(tempValues);
    if (valuesarr.includes("")) {
      setIsRequired(true);
    } else {
      setIsRequired(false);

      setProspectId(35345345345);
      props.parentCallback({ prospectId: 35345345345 }); // send Id to parent component
      // call post api
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }
  };

  const styles = {
    fontWeight300: {
      fontWeight: 300,
      fontSize: "13px",
      position: "absolute",
      top: "35px",
    },
  };
  const onPhoneNumberChange = (e) => {
    setPhone(e);
  };
  return (
    <div>
      <Formik
        enableReinitialize={true}
        initialValues={values}
        onSubmit={handleSubmit}
        validate={validate}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
        }) => (
          <Form onSubmit={handleSubmit}>
            {isRequired && (
              <Alert color="danger">Please fill all required field.</Alert>
            )}
            <FormGroup>
              <Label className="name" for="name">
                Name
              </Label>
              <Row>
                <Col sm="2" xs="auto">
                  <Input
                    type="select"
                    name="salutation"
                    value={values.salutation}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value=""></option>
                    <option value="Mr">Mr.</option>
                    <option value="Mrs">Mrs.</option>
                  </Input>
                </Col>
                <Col sm="2" xs="auto">
                  <Input
                    type="select"
                    name="suffix"
                    value={values.suffix}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  >
                    <option value=""></option>
                    <option value="Jr">Jr.</option>
                    <option value="Sr">Sr.</option>
                  </Input>
                </Col>
                <Col>
                  <Input
                    type="text"
                    name="firstName"
                    id="name"
                    placeholder="First name"
                    value={values.firstName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  {errors.firstName && touched.firstName}
                </Col>
                <Col>
                  <Input
                    type="text"
                    name="middleName"
                    value={values.middleName}
                    placeholder="MIddle name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Col>
                <Col>
                  <Input
                    type="text"
                    name="lastName"
                    value={values.lastName}
                    placeholder="Last name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>Business Name</Label>
                  <Input
                    type="text"
                    name="orgParentName"
                    value={values.orgParentName}
                    placeholder="Business Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>Site Name</Label>
                  <Input
                    type="text"
                    name="orgName"
                    placeholder="Site Name"
                    value={values.orgName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>Base Price Name</Label>
                  <Input
                    type="text"
                    name="dbcName"
                    placeholder="Price name"
                    value={values.dbcName}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>Manager</Label>
                  <Input
                    type="text"
                    name="marketManager"
                    placeholder="Market Manager"
                    value={values.marketManager}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>Business Type</Label>
                  <Input
                    type="text"
                    name="businessType"
                    placeholder="Business Type"
                    value={values.businessType}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Row>
                <Col sm="4">
                  <Label>Email</Label>
                  <Input
                    type="email"
                    name="emailAddress"
                    placeholder="Email"
                    value={values.emailAddress}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                </Col>
              </Row>
            </FormGroup>
            <FormGroup>
              <Label>Address</Label>
              <Row>
                <Col>
                  <Input
                    type="text"
                    name="addressStreet"
                    placeholder="Street address"
                    value={values.addressStreet}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Label style={styles.fontWeight300}>Street address</Label>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col>
                  <Input
                    type="text"
                    name="addressCity"
                    placeholder="City"
                    value={values.addressCity}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Label style={styles.fontWeight300}>City</Label>
                </Col>
                <Col>
                  <Input
                    type="text"
                    name="addressState"
                    placeholder="state"
                    value={values.addressState}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Label style={styles.fontWeight300}>
                    State / Province / Region
                  </Label>
                </Col>
              </Row>
              <Row className="mt-4">
                <Col sm="4">
                  <Input
                    type="text"
                    name="addressZip"
                    placeholder="Postal Code"
                    value={values.addressZip}
                    onChange={handleChange}
                    onBlur={handleBlur}
                  />
                  <Label style={styles.fontWeight300}>Postal / Zipcode</Label>
                </Col>
              </Row>
            </FormGroup>

            <FormGroup>
              <Label>Phone</Label>
              <PhoneInput
                inputProps={{
                  name: "phoneNumber",
                }}
                country={"us"}
                disableDropdown
                value={values.phoneNumber}
                onChange={onPhoneNumberChange}
              />
            </FormGroup>
            <button type="submit">Save & Continue</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};
export default FormikFormComponent;
