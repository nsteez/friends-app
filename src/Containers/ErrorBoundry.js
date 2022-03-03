import React, {Component} from 'react'

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {hasError:false}
    }

    componentDidCatch(error, info) {
        this.setStae({hasError:true})

    }
    render() {
        if (this.state.hasError){
            return <h1>Oops there was an Error</h1>
        }
        return this.props.children

    }
}


export default ErrorBoundry;
