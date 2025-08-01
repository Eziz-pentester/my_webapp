import React, { use, useCallback, useEffect, useState } from "react";
import './Form.css';
import { useTelegram } from "../hooks/useTelegram";

const Form = () => {
    const { tg } = useTelegram();

    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [type, setType] = useState('physical');
    const onSendData = useCallback(() => {
        const data = {
            country: country,
            city: city,
            type: type,
        };
        console.log('Отправка данных:', data);    
        tg.sendData(JSON.stringify(data));
        tg.close();
        
    }, [country, city, type, tg]);

    useEffect(() => {
        tg.onEvent('mainButtonClicked', onSendData)
        return () => {
            tg.offEvent('mainButtonClicked', onSendData);
        }
            }, [onSendData, tg]);
            
        

    useEffect(() => {
        tg.MainButton.setParams({ text: "Отправить данные" });
    }, [tg]);

    useEffect(() => {
        if (!country || !city) {
            tg.MainButton.hide();
        } else {
            tg.MainButton.show();
        }
    }, [country, city, tg]);

    const onChangeCountry = (e) => {
        setCountry(e.target.value);
    };

    const onChangeCity = (e) => {
        setCity(e.target.value);
    };

    const onChangeType = (e) => {
        setType(e.target.value);
    };

    return (
        <div className="form">
            <h3>Введите ваши данные</h3>
            <input className="input" type="text" placeholder="Страна" value={country} onChange={onChangeCountry} />
            <input className="input" type="text" placeholder="Город" value={city} onChange={onChangeCity} />
            <select className="select" value={type} onChange={onChangeType}>
                <option value="physical">Физ. лицо</option>
                <option value="legal">Юр. лицо</option>
            </select>
        </div>
    );
};
useEffect(() => {
    tg.onEvent('mainButtonClicked', () => console.log('MainButton clicked'));
}, [tg]);

export default Form;
