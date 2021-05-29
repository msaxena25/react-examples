import { Button, Form, FormGroup, Label, Input, FormText, Row, Col, Table } from 'reactstrap';
import FontAwesome from 'react-fontawesome';

const OrderSuccess = (props) => {
  const onPlaceAnotherOrder = () => {
    props.history.push('/order');
  };
  const styles = {
    'order-success-container': {
      textAlign: 'center',
      padding: '6rem',
    },
    successIcon: {
      fontSize: '5rem',
      color: 'green',
    },
  };
  return (
    <>
      <div className='order-container' style={styles['order-success-container']}>
        <FontAwesome style={styles.successIcon} name='fas fa-check-circle' />
        <h4>Your Order Request has been successfully sent to Carrier.</h4>
        <p>You will receive a email once your order has been completed.</p>
        <p>Please call 1800 123 4567 if you have any questions.</p>
        <p>You can place another order now,or simply close this browser window. Thank you!</p>
        <div>
          <Button size='lg' className='txt-bold' outline color='secondary' onClick={onPlaceAnotherOrder}>
            PLACE ANOTHER ORDER
          </Button>
        </div>
      </div>
    </>
  );
};

export default OrderSuccess;
