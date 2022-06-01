import axios from 'axios';
import { useState, useEffect } from 'react';

const useFetch = ( url ) => {
    const [state,  setState] = useState({
        data: [],
        loading: true,
    })

    useEffect(() => {
        axios.get( url )
            .then(({data}) => setState({
                
                data: data,
                loading: false
            }))
    }, [ url]);

    return state;
}

export default useFetch;