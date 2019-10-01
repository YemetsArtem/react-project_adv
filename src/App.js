import React, { Component } from "react"
import store, { history } from './redux'
import Root from './components/Root'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import "./config"

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <ConnectedRouter history={history}>
                    <Root />
                </ConnectedRouter>
            </Provider>
        )
    }
}

export default App;
