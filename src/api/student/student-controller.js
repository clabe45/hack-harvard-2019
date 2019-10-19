const functions = require('firebase-functions');

export const hellostudents = functions.https.onRequest((req,res)=>{
    res.send('Hello world');
})