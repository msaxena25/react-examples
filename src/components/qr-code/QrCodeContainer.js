import { Row, Col, Container } from "reactstrap";
import QrCodeComponent from "./QrCodeComponent";
import QrCodeStylingComponent from "./QrCodeStylingComponent";

const QrCodeContainer = () => {
  return (
    <Container>
      <Row>
        <Col>
          <div>
            <a href="https://www.npmjs.com/package/qrcode.react">
              qrcode.react
            </a>
          </div>
          <QrCodeComponent></QrCodeComponent>
        </Col>
        <Col>
          <div>
            <a href="https://www.npmjs.com/package/qr-code-styling">
              qr-code-styling
            </a>
          </div>
          <div>
            <QrCodeStylingComponent
              data="https://jsmount.com"
              bgColor="black"
              fgColor="white"
              eyeColor="green"
              titleColor="white"
              title="QrCodeStyling JS Mount"
              centerImageSrc="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
            ></QrCodeStylingComponent>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default QrCodeContainer;
