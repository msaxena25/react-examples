import { Route, Switch } from 'react-router-dom';
import AddProspectForm from './AddProspectForm';
import AsyncAutoComplete from './AsyncAutoComplete';
import AutoComplete from './AutoComplete';
import EmailOptions from './EmailOptions';
import FormikFormComponent from './FormikForm';
import ReactAgGrid from './grid-examples/ReactAgGrid';
import ReactDataComponentGrid from './grid-examples/ReactDataComponentGrid';
import ReactStrapSimpleTable from './grid-examples/ReactStrapSimpleTable';
import LazyloadComponent from './LazyloadComponent';
import TabsModelComponent from './models/TabsModelComponent';
import StripeCheckoutComponent from './payment/StripeCheckoutComponent';
import QrCodeContainer from './qr-code/QrCodeContainer';
import RouteGuard from './routing-test/RouteGuard';
import RouterComponentA from './routing-test/RouterComponentA';
import RouterComponentB from './routing-test/RouterComponentB';
import Basic from './SampleForm';
import StepperComponent from './StepperComponent';
import TestErrorBoundaryComponent from './TestErrorBoundaryComponent';
import StripePaymentSuccess from './payment/StripePaymentSuccess';
import StripePaymentCancel from './payment/StripePaymentCancel';
import CenterList from './Cowin/CenterList';
import OtherUser from './redux-examples/UserList/OtherUser';
import User from './redux-examples/UserList/User';
import LoginContainer from './redux-examples/redux/Login/LoginContainer';
import SignUpContainer from './redux-examples/redux/Login/SignUpContainer';
import Order from './order/Order';
import OrderSuccess from './order/OrderSuccess';
import CompA from './UseContext-example/CompA';
import CompB from './UseContext-example/CompB';
import PracticeOneComponent from './practice/PracticeOne';
import UsersListWithSelector from './redux-examples/UserList/UserListWithUseSelector';
import Debounce from './debounce/Debounce';
import Throttle from './throttle/Throttle';
import UseReducerComponent from './useReducer/UseReducerComponent';
import UseImperativeHandleComponent from './useImperativeHandle/UseImperativeHandle';
import SetStateMultipleTimes from './practice/SetStateMultipleTimes';
import SetStateInClassComponent from './practice/SetStateInClassComponent';
import CheckReRendering from './practice/CheckReRendering';

// NOTE: You can put component in first route which U have to run...


const RoutingPath = () => {
    return (
        <Switch>
            <Route exact path='/' component={CheckReRendering} />
            {/* <Route exact path='/' component={SetStateMultipleTimes} /> */}
            <Route path='/typeahead' component={AutoComplete}></Route>
            <Route path='/practice' render={() => <PracticeOneComponent />}></Route>
            <Route path='/email' component={EmailOptions}></Route>
            <Route path='/asynctypeahead' component={AsyncAutoComplete}></Route>
            <Route path='/formikform' component={FormikFormComponent} />
            <Route path='/form' component={AddProspectForm} />
            <Route path='/basic' component={Basic} />
            <Route path='/lazyload' component={LazyloadComponent} />
            <Route path='/routerA/:id/:name' component={RouterComponentA} />

            {/* This is Simple Route: <Route path="/routerB" component={RouterComponentB} /> */}
            {/* In Below route we have wrapped this with RouteGuard component and pass authenticate 
      we can get this authenticate by a function here */}
            <RouteGuard path='/routerB' component={RouterComponentB} authenticate={true}></RouteGuard>

            <Route path='/reactstraptable' component={ReactStrapSimpleTable} />
            <Route path='/reactaggrid' component={ReactAgGrid} />
            <Route path='/reactdatacomponentgrid' component={ReactDataComponentGrid} />
            <Route path='/errorboundarytest' component={TestErrorBoundaryComponent} />
            <Route path='/qr' component={QrCodeContainer} />
            <Route path='/model' component={TabsModelComponent} />
            <Route path='/stripe' component={StripeCheckoutComponent} />
            <Route path='/stripepaymentsuccess' component={StripePaymentSuccess} />
            <Route path='/stripepaymentcancel' component={StripePaymentCancel} />
            <Route path='/userslist' component={UsersListWithSelector} />
            <Route path='/otheruserslist' component={OtherUser} />
            <Route path='/centreslist' component={CenterList} />
            <Route path='/login' component={LoginContainer} />

            <Route path='/order' component={Order} />
            <Route path='/ordersuccess' component={OrderSuccess} />
            <Route path='/compA' component={CompA} />
            <Route path='/compB' component={CompB} />
        </Switch>
    );
};

export default RoutingPath;
