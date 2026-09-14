const express=require('express');
const path=require('path');
const app=express();
const PORT=process.env.PORT||3000;
app.use(express.json());
app.use(express.static(path.join(__dirname,'public')));
app.get('/api/health',(req,res)=>res.json({ok:true,service:'Rohtec Store'}));
app.post('/api/order',(req,res)=>{
  const {customer,items,total}=req.body||{};
  if(!customer||!items?.length) return res.status(400).json({error:'Customer and items are required'});
  const orderId='RHT-'+Date.now().toString(36).toUpperCase();
  res.json({ok:true,orderId,total,message:'Order received. Connect Paystack or your preferred gateway for live payment confirmation.'});
});
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'public','index.html')));
app.listen(PORT,()=>console.log(`Rohtec Store running on http://localhost:${PORT}`));
