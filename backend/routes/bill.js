const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const Bill  = mongoose.model("Bill")


router.post('/Billing',(req,res)=>{
    const{BillID,
            Dos,
            Invoice,
            VendorID,
            ProductID1,
            ProductID2,
            ProductID3,
            p1,
            p2,
            p3,
            q1,
            q2,
            q3,
            t1,
            t2,
            t3,
            t,
            sgst,
            total}=req.body
  
    //req.user.password = undefined
    const bill= new Bill({
        BillID,
            Dos,
            Invoice,
            VendorID,
            ProductID1,
            ProductID2,
            ProductID3,
            p1,
            p2,
            p3,
            q1,
            q2,
            q3,
            t1,
            t2,
            t3,
            t,
            sgst,
            total    })
    bill.save().then(result=>{
        res.json({bill:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})


module.exports = router


/*const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const Bill  = mongoose.model("Bill")


router.post('/Billing',(req,res)=>{
    const{BillID,
            Dos,
            Invoice,
            VendorID,
            ProductID1,
            ProductID2,
            ProductID3,
            p1,
            p2,
            p3,
            q1,
            q2,
            q3,
            t1,
            t2,
            t3,
            t,
            sgst,
            total}=req.body
  
    //req.user.password = undefined
    const bill= new Bill({
        BillID,
            Dos,
            Invoice,
            VendorID,
            ProductID1,
            ProductID2,
            ProductID3,
            p1,
            p2,
            p3,
            q1,
            q2,
            q3,
            t1,
            t2,
            t3,
            t,
            sgst,
            total    })
    bill.save().then(result=>{
        res.json({bill:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})


module.exports = router*/

/*const express = require('express')
const router = express.Router()
const mongoose = require('mongoose') 
//const requireLogin = require('../middleware/requireLogin')
const Bill  = mongoose.model("Bill")

router.post('/Billing',(req,res)=>{
    const{S_id,
        P_id,
        V_id,
        Price,
        length,
        DOS,
        Invoice}=req.body
    if(!S_id || !P_id || !V_id || !Price || !length || !DOS || !Invoice){
       return res.json({error:"please fillup all data"})
    }
    //req.user.password = undefined
    const bill= new Bill({
        S_id,
        P_id,
        V_id,
        Price,
        length,
        DOS,
        Invoice
       
    })
    bill.save().then(result=>{
        res.json({bill:result})     
    })
    .catch(err=>{
        console.log(err)
    })

})


module.exports = router*/