import axios from 'axios';  

export const FetchDataList = (URL) => {
    const options = {
        headers: { 
            'Content-Type': 'application/json;charset=UTF-8', 
            'Access-Control-Allow-Origin': "*", 
            'Access-Control-Allow-Methods': "GET,PUT,POST,DELETE,PATCH,OPTIONS",
            'Accept': "application/json" 
        }
    };

    return axios.get(URL, options)
    .then(res => {
        return res.data;
    }).catch(err => console.error());
};