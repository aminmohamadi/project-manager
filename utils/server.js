const express = require('express')
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/test');
}
const app = express().listen(80,()=>{
    console.log('http://localhost')
})
 module.exports = app
