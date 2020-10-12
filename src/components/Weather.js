import React, { useState, useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { loadWeather } from '../../src/actions'

function Weather(props) {
    const [zip, setZip] = useState('')

    const dispatch = useDispatch()
    return (
        <div className="App">
            <form
                onSubmit={e => {
                    e.preventDefault()
                    dispatch(loadWeather(zip))
                }}
            >
                <input
                    name="zip"
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                    type="text"
                    pattern="(\d{5}([\-]\d{4})?)"
                    placeholder="enter zip"
                />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default Weather;
