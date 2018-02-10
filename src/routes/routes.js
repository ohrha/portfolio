const mongoose = require('mongoose');
const express  = require('express');
const webpush = require('web-push');
const router = express.Router();
const Notification = require('../models/notification');
const vapidKeys = {
    publicKey: "BGgWbdrI76rpqXQXmgTGWsnYHCj0lXGfkpNp8up0TeVZBXuecerKE55gqKayH8soWE7aioU1MheuEZXFsp-hkIs",
    privateKey:"E8gzdDWmSHEXLrgyqs2oJGovtJbLMHydFnubfVcElT4"


}
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);
const pushSubscriptions = [];


router.post('/webpush', (req,res)=>{
    
    console.log(req.body.subscription);
    pushSubscriptions.push(req.body.subscription)
    let response = {

        message: "hello"

    }
   /* webpush.sendNotification(req.body.subscription,"Hello");*/
    /*Notification.find({name:"Test"}, (err, notification)=>{

        if(err)throw err;
        if(!notification){
                res.json({success: false, message:"No Messages"})

        }else{
            console.log(notification[0].message)
            
            webpush.sendNotification(req.subscription,notification[0].message)
        }

    })
    */
    //res.json({status:200,text:"Web Push Subscribed",})
    res.send({
        text:"Web push subscribed",
        status:200
    })

})
router.post('/notification', (req,res)=>{

    notification = new Notification();
    notification.name = req.body.name, 
    notification.message=req.body.message
    console.log(notification)
    notification.save((err,notification)=>{

        if(err){
            res.json({success: false, message:"Save failed"})
        }else{
            res.json({success: true, message: "Notification added!",  notification:notification})
        }

    })

})
router.post('/serviceworkeractive',(req,res)=>{

         let notificationData ={};
        notificationData.notification ={
            title: "Ohrha",
            icon:"../assets/icon512.png",
            badge:"../assets/icon192.png",
            body:"Service Worker Successfully Installed, And Registered.",
            requireInteraction:true,
            vibrate:[300,100,400],

        }
        sendNotification(req.body.subscription,JSON.stringify(notificationData));

})
router.get('/notification',(req, res )=>{


    Notification.find({name:"Test"}, (err, notification)=>{

        if(err)throw err;
        if(!notification){
                res.json({success: false, message:"No Messages"})

        }else{
            console.log(notification)
            res.json({success:true, mesage:"Messages Found!", notification:notification})
        
             let notificationData ={};
        notificationData.notification ={
            title: "Ohrha",
            icon:"../assets/icon512.png",
            badge:"../assets/icon192.png",
            body:notification[0].message,
            requireInteraction:true,
            vibrate:[300,100,400],

        }
       // pushSubscription
        sendNotification(pushSubscriptions[0],JSON.stringify(notificationData));
}

    })

  

})
function sendNotification (pushSubscription, payload) {
  
    webpush.sendNotification(pushSubscription, payload)
      .then(function (response) {
          if(error)throw err;
          if(response){
              console.log("pushsent")
          }
     
      })
      
  }

module.exports = router;