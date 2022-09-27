import React from 'react';


class SetStateInClassComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = { count: 0, fruites: ['apple', 'banana'] }
        this.onClick3 = this.onClick3.bind(this);
    }
    // Here 'this' is undefined
    onClick1() {
        console.log('onClick={this.onClick1}', this)
    }

    // Here 'this' is Class component because we binded function like () => this.onClick2()
    onClick2() {
        console.log('onClick={() => this.onClick2()}', this)
    }

    // Here we have binded 'this' inside constructor.
    // This is most preferred way to bind scope
    onClick3() {
        console.log('this.onClick3 = this.onClick3.bind(this);', this)
    }

    // setState(...): takes an object of state variables to update or a function which returns an object of state variables.

    // output - 2 not 3 because setState here not returning updated state.
    onClick4() {
        this.setState({ count: this.state.count + 1 })
        this.setState({ count: this.state.count + 2 })

        // this.setState(this.state.count + 3); --- This is incorrect
    }

    // output - 5 - Here setState takes callback so it retuning updated state.
    onClick5() {
        this.setState((state) => ({ count: state.count + 2 }))
        this.setState((state) => ({ count: state.count + 5 }))

        /* This is also Valid -
        this.setState((state) => {
            return { count: state.count + 2 }
         }) */

        /*   Invalid -  Expected an assignment or function call and instead saw an expression
         this.setState((state) => { count: state.count + 2 }) */
    }

    onClick6() {
        // this.setState({ fruites: this.state.fruites.push('Grapes') }) - This is incorrect

        // These below two state updates will not work, becasue it is object based, so only second setState will run.
        this.setState({ fruites: [...this.state.fruites, 'Grapes'] })
        this.setState({ fruites: [...this.state.fruites, 'Kiwi'] })


        this.setState((state) => ({fruites: [...state.fruites, 'Orange'] }))

        const items = this.state.fruites;
        items.push('Papaya')
        this.setState({ fruites: items })
    }

    render() {
        return (
            <>
                Count - {this.state.count}
                <p>
                    <button onClick={() => this.onClick4()}>setState with passing object</button>
                </p>
                <p>
                    <button onClick={() => this.onClick5()}>setState with passing function</button>
                </p>
                <div>
                    Fruites - {this.state.fruites && this.state.fruites.join('  ')}
                    <div>
                        <button onClick={() => this.onClick6()}>setState with spread opeartor</button>
                    </div>
                </div>
                <p>
                    <button onClick={this.onClick1}>Check this</button>
                </p>
                <p>
                    <button onClick={() => this.onClick2()}>Check this</button>
                </p>
                <p>
                    <button onClick={this.onClick3}>Check this</button>
                </p>
                <p>
                    This is Class component
                </p>
            </>
        )
    }
}
export default SetStateInClassComponent;






/**  THIS IS BASIC STRUCTURE OF CLASS COMPONENT

 class SetStateInClassComponent extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <>
                This is Class component
            </>
        )
    }
}
export default SetStateInClassComponent;
 */