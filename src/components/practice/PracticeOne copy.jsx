import { React, useState } from 'react';
import { Container, Form, FormGroup, Input, Label, Row, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';
import withToggle from './withToggle';

const styles = {
  marginTop: {
    marginTop: 10,
  },
  name: {
    fontSize: 20,
  },
};

// USE OF HOC
 const PracticeOneComponent = (props) => {
  const [name, setName] = useState('First Name');
  const [lName, setLName] = useState('Last Name');
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onLNameChange = (event) => {
    setLName(event.target.value);
  };
  return (
    <Container>
      {props.isEdit ? (
        <Form>
          <FormGroup>
            <Row>
              <Label for='name'>First Name</Label>
              <Input type='text' name='fName' id='name' required placeholder='Enter First name' onChange={onNameChange} value={name} />
            </Row>

            <Row style={styles.marginTop}>
              <Label for='lName'>Last Name</Label>
              <Input type='text' name='lName' required placeholder='Enter Last name' onChange={onLNameChange} value={lName} />
            </Row>
          </FormGroup>
        </Form>
      ) : (
        <div>
          <Card>
            <CardBody>
              <CardTitle>Your details</CardTitle>
              <CardSubtitle>
                First Name: <p style={styles.name}>{name}</p>
                Last Name: <p style={styles.name}>{lName}</p>
              </CardSubtitle>
            </CardBody>
          </Card>
        </div>
      )}
    </Container>
  );
}
export default withToggle(PracticeOneComponent);