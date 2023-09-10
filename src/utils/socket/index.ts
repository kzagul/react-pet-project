import React, { useState, useEffect } from 'react';

const apiKey = "284389c65f83f4fdc2daf25e296a45d93cd27be47302ae9c070ed4780d3d169f"

function handleSocket(ws: WebSocket) {
    onOpenSocket(ws)
    onMessageSocket(ws)
    onErrorSocket(ws)
    onCloseSocket(ws)
}

function onOpenSocket(ws: WebSocket) {
    ws.onopen = function onStreamOpen() {
        const subRequest = {
            "action": "SubAdd",
            "subs": ["0~Coinbase~BTC~USD"]
        };
        ws.send(JSON.stringify(subRequest));
    } 
}

function onMessageSocket(ws: WebSocket) {
    // ws.onmessage = function(e){
    //     console.log("Message: ", e);
    // }
    ws.onmessage = function onStreamMessage(event) {
        let message = event.data;
        console.log("Received from Cryptocompare: " + message);
    }
}

function onErrorSocket(ws: WebSocket) {
    ws.onerror = function(e){
        console.log("Error: ", e);
    }
}

function onCloseSocket(ws: WebSocket) {
    ws.onclose = function(e){
        console.log("Close: ", e);
    }
}

function useWebSocket() {
    const [messages, setMessages] = useState([]);

    useEffect(() => {
        const ws = new WebSocket("wss://streamer.cryptocompare.com/v2?api_key=" + apiKey);
        handleSocket(ws)
    }, []);
}

export {
    handleSocket,
    onOpenSocket,
    onMessageSocket,
    onErrorSocket,
    onCloseSocket,
    apiKey,
    useWebSocket
}