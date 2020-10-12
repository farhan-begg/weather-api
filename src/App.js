import React from 'react';
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import Weather from './components/Weather'
import rootReducer from './reducers'
import './App.css';
import WeatherDisplay from './components/WeatherDisplay'



const store = createStore(rootReducer, applyMiddleware(thunk))


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <header className="App-header">
                    <WeatherDisplay />
                    <Weather />
                </header>
            </div>
        </Provider>
    )
}

export default App;