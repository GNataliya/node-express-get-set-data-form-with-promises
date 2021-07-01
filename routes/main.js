const express = require('express');
const router = express.Router();
const axios = require('axios');
const multer = require('multer');
const upload = multer();
const sendPlanet = require('./arrFunctions.js');

router.get('/', (req, res) => {
    res.render('main');
});


router.post('/form', upload.none(), async (req, res) => {

    const { clientData } = req.body;
    const arrUserInfo = clientData.split(',');
    
    const getArray = sendPlanet.getArrNum(arrUserInfo);
    const baseResult = await sendPlanet.dataBase(getArray);
    
         
    res.json( baseResult );
});










// router.post('/form', upload.none(), async (req, res) => {

//     const { clientData } = req.body;
//     const arrUserInfo = clientData.split(',');
    
//         let masNumb = [];
//         arrUserInfo.forEach((item) => {
//             let num = Number(item);
//             masNumb.push(num)
//         })
    
    
//     const dataBase = async () => {
        
//         const result = [];

//         const getPlanet = masNumb.map(async (id) => {
//             const url = `https://swapi.dev/api/planets/${id}`;
//             const { data } = await axios.get(url);
//             result.push(`${id}: ${data.name}`);
//         });
//         await Promise.all(getPlanet);
//         //console.log(result)
//         return result;
//     }
//     const baseResult = await dataBase();
//      //console.log(result);
    
//     console.log('result', baseResult);
    
    
//     res.json( baseResult );
// });


module.exports = router;