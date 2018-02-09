const mongoose = require('mongoose');


const Notification = mongoose.Schema({

    name:String,
    message:String,

})

const NotificationModel = module.exports = mongoose.model('NotificationModel', Notification);