import React, {useState, useEffect} from 'react'
import {formWeatherFields} from '../../helpers/constants.js'
import { v1 as uuidv4 } from 'uuid'

import Button from '../Button/Button.jsx'
import InputForm from '../InputForm/InputForm.jsx'

function EditForm({title, obj, update}) {
    const [formState, setformState] = useState({})
    
    useEffect(() => {
        setformState({
            city: obj.name,
            temperature: obj.weather.temperature.actual,
            wind_speed: obj.weather.wind.speed,
            deg: obj.weather.wind.deg,
            clouds_all: obj.weather.clouds.all,
            visibility: obj.weather.clouds.visibility,
            humidity: obj.weather.clouds.humidity,
        })
    }, [])

    const changehandler = (event) => {
        setformState(prev => ({...prev, [event.target.name] : event.target.value}))
    }

    const sumbitForm = (event) => {
        event.preventDefault()

        const changeCard = {
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
        update(changeCard, obj.id)
    }

    return (
        <form onSubmit={sumbitForm}>
            <h1>{title}</h1>
            {formWeatherFields.map(el => <InputForm key={el.key} elemnt={el} handler={changehandler} formValue={formState}></InputForm>)}
            <Button text="Create"/>
        </form>
    )
}

export default EditForm