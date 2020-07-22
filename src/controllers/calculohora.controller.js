const moment = require('moment'); 
const _ = require('lodash');
//
const calculoHoraController = {};
//POST 
calculoHoraController.postcalculoHora = async (req, res) => {
    try{
    //
    var input = JSON.parse(JSON.stringify(req.body));
    var inHora = _.get(input, 'dato1',moment(new Date()).format("HH:mm:ss")); 
    var offset = _.get(input, 'dato2', 0);
    var today = moment().format('LL'); 
    var date = new Date( new Date(Date.parse(today + ' ' + inHora)).getTime() + offset * 3600 * 1000).toUTCString().replace( / GMT$/, "" );
    // 
    var response = { time: moment(new Date(date)).format("HH:mm:ss"),
                     timezone: "utc" };
    //
    return res.status(200).json({response});
    } catch ( e ){
        console.log(e);
        return res.status(500).json({
            message: 'Error en calculoHora',
            error: e
        })
    }
 };
//
 module.exports = calculoHoraController;