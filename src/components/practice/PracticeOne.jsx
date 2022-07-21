import { React, useState } from 'react';
import { Container, Form, FormGroup, Input, Label, Row, Button, Card, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

const styles = {
  marginTop: {
    marginTop: 10,
  },
  name: {
    fontSize: 20,
  },
};

export default function PracticeOneComponent() {
  const [name, setName] = useState('First Name');
  const [lName, setLname] = useState('Last Name');
  const [isEdit, setIsEdit] = useState(true);
  const onNameChange = (event) => {
    setName(event.target.value);
  };
  const onLnameChange = (event) => {
    setLname(event.target.value);
  };
  const onToggle = () => {
    setIsEdit(!isEdit);
  };
  return (
    <Container>
      <Button color='primary' onClick={onToggle}>
        {' '}
        {!isEdit ? 'Edit' : 'View'}
      </Button>{' '}
      {isEdit ? (
        <Form>
          <FormGroup>
            <Row>
              <Label for='name'>First Name</Label>
              <Input type='text' name='fName' id='name' required placeholder='Enter First name' onChange={onNameChange} value={name} />
            </Row>

            <Row style={styles.marginTop}>
              <Label for='lName'>Last Name</Label>
              <Input type='text' name='lName' required placeholder='Enter Last name' onChange={onLnameChange} value={lName} />
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
