import { useHistory } from 'react-router-dom';
import { Button } from "reactstrap";

const RouterComponentB = () => {

    
  /**
   * Router Navigation is done using useHistory hook
   * See RouterComponentA for other way to route using props.history
   */  
    const history = useHistory();
    const onClick = () => {
        history.push("/routerA");
      };
    return ( 
        <>
        <h1>This is Router Component B</h1>
        <Button onClick={onClick}>Route to A</Button>
      </>
   
     );
}
 
export default RouterComponentB;