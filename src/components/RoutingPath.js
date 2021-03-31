import { Switch, Route } from "react-router-dom";
import AddProspectForm from "./AddProspectForm";
import Basic from "./SampleForm";
import StepperComponent from "./StepperComponent";
import EmailOptions from "./EmailOptions";
import AsyncAutoComplete from "./AsyncAutoComplete";
import AutoComplete from "./AutoComplete";
import FormikFormComponent from "./FormikForm";
import RouterComponentA from "./routing-test/RouterComponentA";
import RouterComponentB from "./routing-test/RouterComponentB";
import RouteGuard from "./routing-test/RouteGuard";

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
      <Route path="/routerA" component={RouterComponentA} />
      {/* This is Simple Route: <Route path="/routerB" component={RouterComponentB} /> */}
      {/* In Below route we have wrapped this with RouteGuard component and pass authenticate 
      we can get this authenticate by a function here */}
      <RouteGuard
        path="/routerB"
        component={RouterComponentB}
        authenticate={false}
      ></RouteGuard>
    </Switch>
  );
};

export default RoutingPath;
