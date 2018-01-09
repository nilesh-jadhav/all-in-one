import React from 'react';
import Header from './Header';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = { message: 'Header Message'}
    }
    componentDidMount() {

    }
    componentWillUnmount() {

    }
    render() {
        const { message } = this.state;
        return(
            <div>
                <Header message={message}></Header>
                <div>
                    {this.props.headerMessage}...
                </div>
            </div>
        );
    }
};

export default App;