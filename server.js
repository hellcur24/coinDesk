const express = require("express");
const axios = require("axios");
const app = express();

app.get('/bitcoinRates', (req,res)=>{
    let url='https://api.coindesk.com/v1/bpi/currentprice/eur.json';

    axios.get(url)
    .then(function(response){
        let rate = '';
        let code= '';
        let disclaimer='';
        rate=response.data.bpi.EUR.rate;
        code=response.data.bpi.EUR.code;
        disclaimer=response.data.disclaimer;
        //console.log(response.data.bpi.EUR.rate);
        res.write(`<p>${rate} ${code}</p>`);
        res.write(`<p>${disclaimer}</p>`);
        res.send();
    })
    .catch(function(error){
        console.log(error);
    });


});

app.listen(5000,()=>{
    console.log('Server is running on port 5000.');
});