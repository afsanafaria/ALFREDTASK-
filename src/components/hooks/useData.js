import React, { useEffect, useState } from 'react';

const useData = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=c9473ed99591d86b8e43e9d96603029f&units=metric`)
            .then(res => res.json())
            .then(data => setData(data))
    }, [])
    return [
        data
    ]
};

export default useData;