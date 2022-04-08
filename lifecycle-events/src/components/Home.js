import React from "react";

class Home extends React.PureComponent {
    constructor(props) {
        super();
        this.state = {
            name: props.initialName,
            age: props.initialAge,
            status: 0,
            homeLink: props.initialLinkName
        };
        setTimeout(() => {
            this.setState({
                status: 1
            });
        }, 3000);
        console.group("Constructor")
        console.groupEnd()
    }

    componentWillMount() {
        console.group("Component will mount");
        console.groupEnd()
    }

    componentDidMount() {
        console.group("Component did mount!");
        console.groupEnd()
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps) {
            console.group("Component will receive props");
            console.log(nextProps);
            console.groupEnd()
            this.setState({
                name: nextProps.initialName,
                age: nextProps.initialAge
            })
        }
    }

    shouldComponentUpdate(nextProps, nextState) {
        console.group("Should Component update");
        console.log("nextProps: ", nextProps)
        console.log("nextState: ", nextState);
        console.groupEnd()
        return true;

        // if (this.props.initialName !== nextProps.initialName || this.state.status !== nextState.status||
        //     this.state.homeLink!==nextState.homeLink) {
        //     console.log("nextProps: ", nextProps)
        //     console.log("nextState: ", nextState);
        //     console.groupEnd()
        //     return true;
        // }
        // else {
        //     console.log('Not render HomeComponent')
        //     console.groupEnd()
        //     return false
        // }
    }

    componentWillUpdate(nextProps, nextState) {
        console.group("Component will update");
        console.log("Before name: ", this.props.initialName)
        console.log("nextProps: ", nextProps)
        console.log("nextState: ", nextState);
        console.groupEnd()
    }

    componentDidUpdate(prevProps, prevState) {
        console.group("Component did update");
        console.log("Curent name: ", this.props.initialName)
        console.log("prevProps: ", prevProps)
        console.log("prevState: ", prevState);
        console.groupEnd()
    }

    componentWillUnmount() {
        console.group("Component will unmount");
        console.groupEnd()
    }

    onIncrementAge = () => {
        this.setState({
            age: this.state.age + 3
        })
    }
    onGreet = () => {
        this.props.greet()
    }
    onChangeLink = () => {
        this.props.changeLink(this.state.homeLink)
    }
    render() {
        console.group("Component rendered")
        console.groupEnd()
        const { homeLink, name, age, status } = this.state
        return (
            <div style={{ background: 'yellow' }}>
                <p> Component: {homeLink}</p>
                <p>This is {name}, {parseInt(age)} ages</p>
                <p>Status: {status}</p>
                <button
                    className='btn btn-primary'
                    onClick={this.onIncrementAge}>
                    Increment age
                </button>
                <br /> <br />
                <input type="text" value={this.state.homeLink}
                    onChange={(e) => this.setState({ homeLink: e.target.value })} />
                <br />
                <button onClick={this.onCyhangeLink} className="btn btn-primary">Change Header Link</button>
                <hr />
            </div>
        );
    }
}

export default (Home)