const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username:{
        type: String,
        require : true,
        minlength:6,
        maxlength: 50,
        unique : true
    },
    email:{
        type: String,
        require : true,
        minlength:6,
        maxlength: 50,
        unique : true
    },
    password:{
        type: String,
        require : true,
        minlength:6
    },
    admin:{
        type:Boolean,
        default: false
    }   
},
{
    timeseries: true
});

module.exports = mongoose.model("User",userSchema)