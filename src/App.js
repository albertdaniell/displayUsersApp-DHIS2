import React, {Component} from 'react';

class App extends Component {

    componentDidMount() {
        const fetchOptions = {
            headers: {
                Authorization: `Basic ${btoa('admin:district')}`
            }
        };
        fetch('https://test.hiskenya.org/kenya/api/users', fetchOptions)
        //Parse the result as json format
            .then(res => res.json())
            .then((result) => {

                this.setState({isLoading: false, mydata: result.users})

                console.log(this.state.mydata)
            }, (error) => {
                console.log(error)
            });

    }

    state = {
        isLoading: true,
        loadingText: 'Loading...',
        mydata: []

    }

    render() {
        // Set the 'Authorization' header to authenticate with the DHIS instance

        let loading = this.state.isLoading
            ? this.state.loadingText
            : 'Users Results found!!!'
        return (
            <div className="container">
                <h1 className='text-center'>React Js DHIS2 Api</h1>
                <hr/>

                <div>

                    <p className="text-center">
                        <span className="badge badge-primary">{loading}</span>
                    </p>
                    {this
                        .state
                        .mydata
                        .map(data => (
                            <li key='data.id'>
                                {data.displayName}

                            </li>
                        ))
}
                </div>
            </div>
        );
    }
}

export default App;
