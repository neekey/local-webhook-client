const io = require('socket.io-client');
const request = require('request');

module.exports = function(source, target) {
    const socket = io(source);
    socket.on('received', function(msg){
        console.log('received msg from source:', msg);
        request({
            method: msg.method,
            uri: target,
            // headers: msg.headers,
            qs: msg.query,
            body: msg.body,
            json: true,
        }, (error, req, result) => {
            if (error) {
                console.log('error', error);
            } else {
                console.log('success', result);
            }
        });
    });
};
