import { Switch, Route } from "react-router-dom";
import AddProspectForm from "./AddProspectForm";
import Basic from "./SampleForm";
import StepperComponent from "./StepperComponent";
import EmailOptions from "./EmailOptions";
import AsyncAutoComplete from "./AsyncAutoComplete";
import AutoComplete from "./AutoComplete";
import FormikFormComponent from "./FormikForm";

const RoutingPath = () => {
  return (
    <Switch>
      <Route exact path="/" component={StepperComponent} />
      <Route path="/typeahead" component={AutoComplete}></Route>
      <Route path="/email" component={EmailOptions}></Route>
      <Route path="/asynctypeahead" component={AsyncAutoComplete}></Route>
      <Route path="/formikform" component={FormikFormComponent} />
      <Route path="/form" component={AddProspectForm} />
      <Route path="/basic" component={Basic} />
    </Switch>
  );
};

export default RoutingPath;
