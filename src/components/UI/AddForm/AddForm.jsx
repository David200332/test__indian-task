import React, {useState} from 'react'
import {formWeatherFields} from '../../helpers/constants.js'
import Button from '../Button/Button.jsx'
import InputForm from '../InputForm/InputForm.jsx'
import { v1 as uuidv4 } from 'uuid';

function AddForm({title, createFunction}) {

    const [formState, setformState] = useState({})
    const changehandler = (event) => {
        setformState(prev => ({...prev, [event.target.name] : event.target.value}))
    }

    const sumbitForm = (event) => {
        event.preventDefault()
        const newCity = {
            id: uuidv4(),
            name: formState.city,
            weather: {
                temperature: {
                    actual: formState.temperature
                },
                wind: {
                    speed: formState.wind_speed,
                    deg: formState.deg,
                },
                clouds: {
                    all: formState.clouds_all,
                    visibility: formState.visibility,
                    humidity: formState.humidity
                }
            }
        }
        setformState({})
        createFunction(newCity);
    }

    return (
        <form onSubmit={sumbitForm}>
            <h1>{title}</h1>
            {formWeatherFields.map(el => <InputForm key={el.key} elemnt={el} handler={changehandler} formValue={formState}></InputForm>)}
            <Button text="Create"/>
        </form>
    )
}

export default AddForm