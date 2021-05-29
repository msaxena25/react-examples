import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Table } from 'reactstrap';
import './Order.css';

const Order = () => {
  // 12:00AM-4:00AM, 4:01AM-8:00AM, 8:01AM-Noon, 12:01PM-4:00PM, 4:01PM-8:00PM, 8:01PM-11:49PM
  const deliveryTimeOptions = [
    '12:00AM-4:00AM',
    '4:01AM-8:00AM',
    '8:01AM-Noon',
    '12:01PM-4:00PM',
    '4:01PM-8:00PM',
    '8:01PM-11:49PM',
  ];
  return (
    <>
      <div className='order-container'>
        <Row>
          <Col>
            <p></p>
            <div className='txt-bold'>
              <span>SITE ID: </span>
              <span>81572-01</span>
            </div>
            <p>
              <span>12331 Lake June Rd, Balch Springs, TX 75180</span>
            </p>
          </Col>
          <Col>
            <div className='txt-bold'>Robert Ellingson</div>
            <div className='txt-gray'>(972) 828-8730</div>
            <div className='txt-gray'>rovet.ellingsonjr@7-11.com</div>
          </Col>
        </Row>
        <Row style={{ marginTop: '10px' }}>
          <Col>
            <div>#97228878657</div>
            <div>peter12345@gmail.com</div>
          </Col>
          <Col>
            <div style={{ marginTop: '15px' }} className='txt-bold'>
              <span>Carrier: </span>
              <span>KAG Logistics</span>
            </div>
          </Col>
        </Row>
        <Row style={{ marginTop: '20px' }}>
          <Col>
            <div className='del-date'>
              <span>Delivery Date:</span>
              <span style={{ marginLeft: '20px' }}>
                {' '}
                <Input className='date-input' type='date' name='deliveryDate' id='deliveryDate' />
              </span>
            </div>
          </Col>
          <Col>
            <Row>
              <Col sm='4'>
                {' '}
                <span className='txt-bold'>Delivery Time:</span>
              </Col>
              <Col sm='6'>
                <Input style={{ fontWeight: 'bold' }} type='select' name='select' id='del-time'>
                  {deliveryTimeOptions.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
                </Input>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className='tbl-row'>
          <Col>
            <Table bordered>
              <thead>
                <tr className='tbl-head'>
                  <th>Category</th>
                  <th>Item Description</th>
                  <th>Supplier</th>
                  <th>Quantity</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>REG</td>
                  <td></td>
                  <td></td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>SUP</td>
                  <td></td>
                  <td></td>
                  <td>500</td>
                </tr>
                <tr>
                  <td>CDSL</td>
                  <td></td>
                  <td></td>
                  <td>1000</td>
                </tr>
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input type='textarea' name='text' id='comment' placeholder='Comments' />
          </Col>
        </Row>
        <div className='action-btn-div'>
          <Button className='btn close-btn'>Close</Button>

          <Button className='btn submit-btn'>Submit</Button>
        </div>
      </div>
    </>
  );
};

export default Order;
