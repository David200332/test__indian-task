import React, {useState} from "react"
import style from './WeatherItem.module.css'
import MyModalWindow from '../../UI/myModalWindow/myModalWindow.jsx'
import EditForm from '../../UI/EditForm/EditForm.jsx'

export default function WeatherItem({weatherElement, removeCity, updateCard}) {


    const [isModalEdit, setIsModalEdit] = useState(false)

    return (
        <div className={style.card}> 
            <div className={style.card_name}>
                <p>{weatherElement.name}</p>
            </div>
            <div className={style.card_content}>
                <div className={style.card_clouds}>
                    <p>Clouds</p>
                    <p>All: {weatherElement.weather.clouds.all}</p>
                    <p>Humidity: {weatherElement.weather.clouds.humidity}</p>
                    <p>Visibility: {weatherElement.weather.clouds.visibility}</p>
                </div>
                <div className={style.card_clouds}>
                    <p>Temperature</p>
                    <p>Actual: {weatherElement.weather.temperature.actual}</p>
                </div>
                <div className={style.card_clouds}>
                    <p>Wind</p>
                    <p>Deg: {weatherElement.weather.wind.deg}</p>
                    <p>Speed: {weatherElement.weather.wind.speed}</p>
                </div>
            </div>
            
            <MyModalWindow visible={isModalEdit} setVisible={setIsModalEdit}>
                <EditForm title='Add City' obj={weatherElement} update={updateCard}></EditForm>
            </MyModalWindow>

            <button onClick={() => setIsModalEdit(true)}>Edit card</button>
            <button onClick={() => removeCity(weatherElement)}>Delete card</button>
        </div>
    )
}
