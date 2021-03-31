import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AsyncAutoComplete from "./AsyncAutoComplete";
import AutoComplete from "./AutoComplete";
import FormikFormComponent from "./FormikForm";
import Header from "./template/Header";
import SideNavigation from "./template/SideNavigation";
import { Row, Col } from "reactstrap";
import AddProspectForm from "./AddProspectForm";
import Basic from "./SampleForm";
import StepperComponent from "./StepperComponent";
import EmailOptions from "./EmailOptions";

const Routing = () => {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
    },
  };
  return (
    <Router>
      <Row>
        <Col>
          <Header></Header>
        </Col>
      </Row>

      <div style={styles.contentDiv}>
        <SideNavigation></SideNavigation>
        <div style={styles.contentMargin}>
          <Switch>
            <Route exact path="/" component={StepperComponent} />
            <Route path="/typeahead" component={AutoComplete}></Route>
            <Route path="/email" component={EmailOptions}></Route>
            <Route path="/asynctypeahead" component={AsyncAutoComplete}></Route>
            <Route path="/formikform" component={FormikFormComponent} />
            <Route path="/form" component={AddProspectForm} />
            <Route path="/basic" component={Basic} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default Routing;
