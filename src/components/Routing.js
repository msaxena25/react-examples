import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Col, Row } from "reactstrap";
import RoutingPath from "./RoutingPath";
import Header from "./template/Header";
import SideNavigation from "./template/SideNavigation";

const Routing = () => {
  const styles = {
    contentDiv: {
      display: "flex",
    },
    contentMargin: {
      marginLeft: "10px",
      width: "100%",
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
          <RoutingPath></RoutingPath>
        </div>
      </div>
    </Router>
  );
};

export default Routing;
