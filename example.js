/**
 * Created by amoeba on 9/30/15.
 */

'use strict';

var OKCoin = require('./index');

var ok = new OKCoin('com');

ok.subscribe({
    ok_btcusd_ticker: function (data, err) {
        console.log('--DATA--: %s', JSON.stringify(data));
    },
    ok_usd_realtrades: function (data, err) {
        //console.log('')
    },
    ok_spotusd_trade: function (data, err) {
        //
    }
});

ok.ws.on('open', function () {
    ok.ticker();
});

//ok.ws.on('message', function (data) {
//    console.log('--data-- %s', JSON.stringify(data));
//});
