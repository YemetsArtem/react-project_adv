import React, { Component } from "react"
import store, { history } from './redux'
import Root from './components/Root'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import "./config"
import './mocks'

class App extends Component {
    render() {
        return (
            <Provider store = {store}>
                <DndProvider backend={HTML5Backend}>
                    <ConnectedRouter history={history}>
                        <Root/>
                    </ConnectedRouter>
                </DndProvider>
            </Provider>
        )
    }
}

export default App;
