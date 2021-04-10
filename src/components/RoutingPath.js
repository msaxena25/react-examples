import { Route, Switch } from "react-router-dom";
import AddProspectForm from "./AddProspectForm";
import AsyncAutoComplete from "./AsyncAutoComplete";
import AutoComplete from "./AutoComplete";
import EmailOptions from "./EmailOptions";
import FormikFormComponent from "./FormikForm";
import ReactAgGrid from "./grid-examples/ReactAgGrid";
import ReactDataComponentGrid from "./grid-examples/ReactDataComponentGrid";
import ReactStrapSimpleTable from "./grid-examples/ReactStrapSimpleTable";
import LazyloadComponent from "./LazyloadComponent";
import QrCodeContainer from "./qr-code/QrCodeContainer";
import RouteGuard from "./routing-test/RouteGuard";
import RouterComponentA from "./routing-test/RouterComponentA";
import RouterComponentB from "./routing-test/RouterComponentB";
import Basic from "./SampleForm";
import StepperComponent from "./StepperComponent";
import TestErrorBoundaryComponent from "./TestErrorBoundaryComponent";

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
      <Route path="/lazyload" component={LazyloadComponent} />
      <Route path="/routerA/:id/:name" component={RouterComponentA} />
      {/* This is Simple Route: <Route path="/routerB" component={RouterComponentB} /> */}
      {/* In Below route we have wrapped this with RouteGuard component and pass authenticate 
      we can get this authenticate by a function here */}
      <RouteGuard
        path="/routerB"
        component={RouterComponentB}
        authenticate={true}
      ></RouteGuard>

      <Route path="/reactstraptable" component={ReactStrapSimpleTable} />
      <Route path="/reactaggrid" component={ReactAgGrid} />
      <Route
        path="/reactdatacomponentgrid"
        component={ReactDataComponentGrid}
      />
      <Route path="/errorboundarytest" component={TestErrorBoundaryComponent} />
      <Route path="/qr" component={QrCodeContainer} />
    </Switch>
  );
};

export default RoutingPath;
