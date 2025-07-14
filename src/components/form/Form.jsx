import React, { useEffect } from "react"
import './Form.css';
import { useTelegram } from "../hooks/useTelegram";

const { tg } = useTelegram();


useEffect(() => {
    tg.MainButton.setParams({text: "Отправить данные"});
    });


useEffect(() => {
    if (!country || !city) {
        tg.MainButton.hide();
    } else {
        tg.MainButton.show();
    }
}, [country, city]);

const Form = () => {
    const [country, setCountry] = React.useState('');
    const [city, setCity] = React.useState('');
    const [type, setType] = React.useState('physical');

const onChangeCountry = (e) => {
    setCountry(e.target.value);
}    

const onChangeCity = (e) => {
    setCity(e.target.value);
}

const onChangeType = (e) => {
    setType(e.target.value);
}

    return (
        <div className="form">
            <h3>Введите ваши данные</h3>
            <input classname={'input'} type= "text" placeholder={country} onChange={onChangeCountry}/>
            <input classname={'input'} type= "text" placeholder={city} onChange={onChangeCity}/>
            <select className={'select'} value={type} onChange={onChangeType}>
                <option value={'physical'}>Физ. лицо</option>
                <option value={'legal'}>Юр. лицо</option>
                
            </select>

        </div>
    );
}

export default Form;