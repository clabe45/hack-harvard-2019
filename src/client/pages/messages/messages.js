import React from 'react'

class message extends React.Component {
    constructor(user, body) {
        this.user = user;
        this.body = body;
    }
    postMessage() {
        //TODO create a new XMLHttpRequest
        var xhr = new XMLHttpRequest();
        xhr.open('POST', '../../../api/chat')
    }
    getMessage() {
        
    }
}