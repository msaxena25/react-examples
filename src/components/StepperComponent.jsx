import React, { Component } from "react";
import ReactDOM from "react-dom";
import Stepper from "react-stepper-horizontal";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import {
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
  Card,
  Button,
  CardTitle,
  CardText,
  Row,
  Col,
  Container,
} from "reactstrap";
import classnames from "classnames";
import FormikFormComponent from "./FormikForm";
import EmailOptions from "./EmailOptions";
import AsyncAutoComplete from "./AsyncAutoComplete";
import AutoComplete from "./AutoComplete";

class StepperComponent extends Component {
  constructor() {
    super();
    this.state = {
      steps: [
        {
          title: "Step One",
          onClick: (e) => {
            e.preventDefault();
            this.toggle(0);
          },
        },
        {
          title: "Step Two",
          onClick: (e) => {
            e.preventDefault();
            console.log("onClick", 2);
            this.toggle(1);
          },
        },
        {
          title: "Step Three",
          onClick: (e) => {
            e.preventDefault();
            this.toggle(2);
          },
        },
      ],
      currentStep: 2,
    };

    this.onClickNext = this.onClickNext.bind(this);
  }

  //   componentDidMount() {
  //     for (let i = 0; i < 4; i++) {
  //       console.log(i);
  //       setTimeout(() => {
  //         const { steps, currentStep } = this.state;
  //         this.setState({
  //           currentStep: currentStep + 1,
  //         });
  //       }, 100);
  //     }
  //   }

  toggle(tab) {
    const { steps, currentStep } = this.state;
    this.setState({
      currentStep: tab,
    });
  }

  handleCallback = (childData) => {
    console.log(childData);
    this.toggle(1);
    // setProspectId(childData);
  };

  onClickNext() {
    const { steps, currentStep } = this.state;
    this.setState({
      currentStep: currentStep + 1,
    });
  }

  render() {
    const { steps, currentStep } = this.state;

    return (
      <div>
        <Stepper steps={steps} activeStep={currentStep} />
        <Container>
        <hr/>
        </Container>
        <TabContent activeTab={currentStep.toString()}>
          <TabPane tabId="0">
            <Row>
              <Col sm="12">
                <Container>
                  <FormikFormComponent
                    parentCallback={this.handleCallback}
                  ></FormikFormComponent>
                </Container>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="1">
            <Row>
              <Col sm="6">
                <AutoComplete></AutoComplete>
              <Button
                    color="secondary"
                    size="sm"
                    onClick={() => this.toggle(2)}
                  >
                    Next
                  </Button>
                  <Button color="link" size="sm" onClick={() => this.toggle(0)}>
                    Prev
                  </Button>
              </Col>
            </Row>
          </TabPane>
          <TabPane tabId="2">
            <Row>
              <Col sm="12">
                <EmailOptions></EmailOptions>
                <div onClick={this.onClickNext}>Next</div>
              </Col>
            </Row>
          </TabPane>
        </TabContent>
      </div>
    );
  }
}

export default StepperComponent;
