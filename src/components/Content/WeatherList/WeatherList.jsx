import React, {useState, useEffect} from 'react'
import AddForm from '../../UI/AddForm/AddForm.jsx';
import MyModalWindow from '../../UI/myModalWindow/myModalWindow.jsx';
import WeatherItem from '../WeatherItem/WeatherItem.jsx'
import style from './WeatherList.module.css'

export default function WeatherList({weatherData}) {

    const [weatherArray, setWeatherArray] = useState(weatherData); 
    const [isModal, setIsModal] = useState(false)

    const addCity = (newObj) => {
        setWeatherArray(prev => ([...prev, newObj]))
        setIsModal(false)
    }

    const removeCity = (item) => {
        setWeatherArray(weatherArray.filter(p => p.id !== item.id))
    }

    const updateCard = (modifiedCard, id) => {
        setWeatherArray(prevState => [...prevState.map(card => card.id === id ? modifiedCard : card)])
    }


    const filterWeather = weatherArray

    return (
        <div className={style.weather_list}>
            {filterWeather.map( el => {
                return <WeatherItem key={el.id} weatherElement={el} removeCity={removeCity} updateCard={updateCard}/>
            })}
            <MyModalWindow visible={isModal} setVisible={setIsModal}>
                <AddForm title='Add City' createFunction={addCity}></AddForm>
            </MyModalWindow>
            <button onClick={() => setIsModal(true)}>Add button</button>
        </div>
    )
}
