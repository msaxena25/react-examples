import React, { Component } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Col, Container, Form, FormGroup, Input, Label, Row } from "reactstrap";

class AddProspectForm extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Container>
        <Form>
          <FormGroup>
            <Label for="name">Name</Label>
            <Row>
              <Col>
                <Input
                  type="text"
                  name="fName"
                  id="name"
                  required
                  placeholder="First name"
                />
              </Col>
              <Col>
                <Input
                  type="text"
                  name="lName"
                  required
                  placeholder="Last name"
                />
              </Col>
            </Row>
          </FormGroup>
          <FormGroup>
            <Label>Business Name</Label>
            <Input
              type="text"
              name="businessName"
              required
              placeholder="Business Name"
            />
          </FormGroup>
          <FormGroup>
            <Label>Site Name</Label>
            <Input
              type="text"
              name="siteName"
              required
              placeholder="Site Name"
            />
          </FormGroup>
          <FormGroup>
            <Label>Email</Label>
            <Input type="email" name="email" placeholder="Email" required />
          </FormGroup>
          <FormGroup>
            <Label>Address</Label>
            <Input
              type="text"
              name="address"
              required
              placeholder="Street address"
            />
            <Label>Street address</Label>
            <Input type="text" name="address2" placeholder="Address 2" />
            <Label>Address Line 2</Label>
            <Row>
              <Col>
                <Input type="text" name="city" placeholder="City" required />
                <Label>City</Label>
              </Col>
              <Col>
                <Input type="text" name="state" placeholder="state" required />
                <Label>State / Province / Region</Label>
              </Col>
            </Row>
            <Row>
              <Col>
                <Input
                  type="text"
                  name="postalCode"
                  required
                  placeholder="Postal Code"
                />
                <Label>Postal / Zipcode</Label>
              </Col>
              <Col>
                <Input
                  type="text"
                  name="country"
                  placeholder="Country"
                  required
                />
                <Label>Country</Label>
              </Col>
            </Row>
          </FormGroup>

          <FormGroup>
            <Label>Phone</Label>
            <PhoneInput
              country={"us"}
              disableDropdown
              value={this.state.phone}
              onChange={(phone) => this.setState({ phone })}
            />
          </FormGroup>
        </Form>
      </Container>
    );
  }
}

export default AddProspectForm;
