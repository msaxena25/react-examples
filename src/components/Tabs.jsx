import React, { useState } from "react";
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
} from "reactstrap";
import classnames from "classnames";
import EmailOptions from "./EmailOptions";
import AsyncAutoComplete from "./AsyncAutoComplete";
import FontAwesome from "react-fontawesome";
import FormikFormComponent from "./FormikForm";

const Tabs = (props) => {
  const [activeTab, setActiveTab] = useState("1");
  const [prospectId, setProspectId] = useState("");

  const toggle = (tab) => {
    if (activeTab !== tab) setActiveTab(tab);
  };

  const handleCallback = (childData) =>{
    console.log(childData);
    setProspectId(childData);
}


  return (
    <div>
      <Nav tabs>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "1" })}
            onClick={() => {
              toggle("1");
            }}
          >
            Tab1
          </NavLink>
        </NavItem>
        <NavItem disabled>
          <NavLink
            className={classnames({ active: activeTab === "2" })}
            onClick={() => {
              toggle("2");
            }}
          >
            Terminals
          </NavLink>
        </NavItem>
        <NavItem>
          <NavLink
            className={classnames({ active: activeTab === "3" })}
            onClick={() => {
              toggle("3");
            }}
          >
            Emails
          </NavLink>
        </NavItem>
      </Nav>
      <TabContent activeTab={activeTab}>
        <TabPane tabId="1">
          <Row>
            <Col sm="12">
              <h4>Tab 1 Contents</h4>
              <FormikFormComponent parentCallback = {handleCallback}></FormikFormComponent>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="2">
          <Row>
            <Col sm="6">
              <Card body>
                <CardTitle>Auto Search, Search Git hub Users</CardTitle>

                <AsyncAutoComplete prospectId={prospectId}></AsyncAutoComplete>
              </Card>
            </Col>
          </Row>
        </TabPane>
        <TabPane tabId="3">
          <Row>
            <Col sm="6">
              <Card body>
                <EmailOptions prospectId={prospectId}></EmailOptions>
              </Card>
            </Col>
          </Row>
        </TabPane>
      </TabContent>
    </div>
  );
};

export default Tabs;
