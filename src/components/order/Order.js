import { useEffect, useState } from 'react';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Table, Alert } from 'reactstrap';
import './Order.css';

const apiPath = '/order-now/site-data/ordernow-site-details-by-orgId?orgId=13022';

const quantityConfig = {
  minValue: 500,
  maxValue: 10000,
};

const Order = (props) => {
  // 12:00AM-4:00AM, 4:01AM-8:00AM, 8:01AM-Noon, 12:01PM-4:00PM, 4:01PM-8:00PM, 8:01PM-11:49PM
  const deliveryTimeOptions = ['12:00AM-4:00AM', '4:01AM-8:00AM', '8:01AM-11:59PM', '12:01PM-4:00PM', '4:01PM-8:00PM', '8:01PM-11:49PM'];
  const rowData = [
    { product: 'REG', quantity: '', valid: true },
    { product: 'SUP', quantity: '', valid: true },
    { product: 'CDSL', quantity: '' },
    { product: 'PREMIUM', quantity: '' },
    { product: 'MID', quantity: '' },
  ];

  const [productData, setProductData] = useState(rowData);
  const [quantityError, setQuantityError] = useState({});
  const [quantityErrorMessage, setQuantityErrorMessage] = useState('');
  const [validComment, setValidComment] = useState(false);
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [totalSumError, setTotalSumError] = useState(false);

  const colors = {
    REG: '#262626',
    SUP: '#367BB5',
    CDSL: '#E02020',
    PREMIUM: '#F7B500',
    MID: '#107F62',
  };

  useEffect(() => {
    axios.get(apiPath).then((res) => {
      console.log('res :', res);
    });
  }, []);

  const onSubmit = () => {
    const quantityArr = productData.map((item) => item.quantity);
    const quantitySum = quantityArr.reduce((accumulator, currentValue) => accumulator + currentValue);
    if (quantitySum > quantityConfig.maxValue) {
      setTotalSumError(true);
    } else {
      setTotalSumError(false);
      props.history.push('/ordersuccess');
    }
  };
  const onQuantityChange = (e, item) => {
    setTotalSumError(false);
    let value = e.target.value;
    if (value !== '') {
      value = Number(e.target.value);
      if (Number.isNaN(value)) {
        return;
      }
    }
    let invalid = false;

    if (value !== '') {
      if (value < quantityConfig.minValue) {
        invalid = true;
        setQuantityErrorMessage(`Min ${quantityConfig.minValue} is required.`);
      } else if (value > quantityConfig.maxValue) {
        invalid = true;
        setQuantityErrorMessage(`Max ${quantityConfig.maxValue} is allowed.`);
      }
    }
    if (invalid) {
      setQuantityError({ ...quantityError, [item.product]: true });
    } else {
      setQuantityError({ ...quantityError, [item.product]: false });
    }

    const data = [...productData];
    const selected = data.find((product) => product.product === item.product);
    selected.quantity = value;
    console.log('item and selected item :', item, selected);
    setProductData(data);
    console.log(quantityError);
  };

  const submitBtnDisabled = () => {
    console.log(quantityError);
    const minOneProduct = productData.find(item => item.quantity);
    const validity = Object.values(quantityError);
    if (!minOneProduct || validity.length < 1 || validity.includes(true)) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <>
      <div className='order-container'>
        <Row>
          <Col style={{ marginLeft: '2rem' }}>
            <div>
              <span className='txt-bold'>Site ID: </span>
              <span>81572-01</span>
            </div>
            <div>12331 Lake June Rd,</div>
            <div>Balch Springs, TX 75180</div>
            <div>(972) 828-8730</div>
            <div>totebag3331@gmail.com</div>
          </Col>

          <Col>
            <div>
              <span className='txt-bold'>Carrier: </span>
              <span>KAG Logistics</span>
            </div>
            <Row style={{ marginTop: '10px' }}>
              <Col>
                <span className='txt-bold'>Delivery Date:</span>
              </Col>
              <Col>
                <span>
                  <Input type='date' name='deliveryDate' id='deliveryDate' />
                </span>
              </Col>
            </Row>
            <Row style={{ marginTop: '10px' }}>
              <Col>
                <span className='txt-bold'>Delivery Time:</span>
              </Col>
              <Col>
                <Input className='del-time-field' type='select' name='select'>
                  {deliveryTimeOptions.map((item, index) => {
                    return <option key={index}>{item}</option>;
                  })}
                </Input>
              </Col>
            </Row>
          </Col>

          <Col style={{ marginLeft: '3rem' }}>
            <div>
              <span className='txt-bold'>Dealer: </span>
              <span>Robert Ellingson</span>
            </div>
            <div>(972) 828-8730</div>
            <div>rovet.ellingsonjr@7-11.com</div>
          </Col>
        </Row>

        {/* Table structure */}

        <Row className='tbl-row'>
          <Col>
            {totalSumError && (
               <Alert color='danger'>The total quantity of gallons should be 10,000 or less.</Alert>
            )}
            <Table className='order-table'>
              <thead>
                <tr className='tbl-head'>
                  <th style={{ width: '1px' }}></th>
                  <th>Product / Description</th>
                  <th className='th-quant'>Quantity</th>
                </tr>
              </thead>
              <tbody>
                {productData.map((item, index) => {
                  return (
                    <tr key={index}>
                      <td style={{ background: colors[item.product] }}>
                        <span></span>
                      </td>
                      <td>{item.product}</td>
                      <td>
                        <Input
                          className={item.quantity != '' ? (quantityError[item.product] ? 'invalid' : 'valid') : ''}
                          type='text'
                          name={item.product}
                          value={item.quantity}
                          placeholder='min 500 gallons'
                          onChange={($event) => onQuantityChange($event, item)}
                        ></Input>
                        {/* {quantityError[item.product] ? <span className='invalid-text'>{quantityErrorMessage}</span> : ''} */}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
        <Row>
          <Col>
            <Input type='textarea' rows='4' name='text' maxLength="120" id='comment' placeholder='Comments' />
          </Col>
          <Col sm={3}>
            <div className='action-btn-div'>
              <Button
                disabled={submitBtnDisabled()}
                onClick={onSubmit}
                className={submitBtnDisabled() ? 'btn submit-btn-disable' : 'btn submit-btn'}
              >
                Submit
              </Button>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
};

export default Order;
