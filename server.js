require('dotenv').config();
const express=require('express'),fs=require('fs'),path=require('path'),nodemailer=require('nodemailer');
const app=express(),pub=path.join(__dirname,'public');
app.use(express.json());app.use(express.static(pub));
app.get('/',(q,r)=>r.sendFile(path.join(pub,'index.html')));
['services','about','gallery','booking','contact'].forEach(p=>app.get('/'+p,(q,r)=>r.sendFile(path.join(pub,p+'.html'))));
app.get('/health',(q,r)=>r.send('OK'));
app.post('/api/booking',async(req,res)=>{
  const b=req.body||{};
  if(!b.name||!b.phone||!b.email)return res.status(400).json({success:false});
  const text=Object.entries(b).map(([k,v])=>k+': '+v).join('\n');
  const{EMAIL_USER:u,EMAIL_PASS:p,EMAIL_TO:t}=process.env;
  try{
    if(u&&p)await nodemailer.createTransport({service:'gmail',auth:{user:u,pass:p}}).sendMail({from:u,to:t||u,subject:'New booking: '+b.name,text});
    else{const f=path.join(__dirname,'bookings.json');let a=[];try{a=JSON.parse(fs.readFileSync(f))}catch{}a.push({...b,at:new Date()});fs.writeFileSync(f,JSON.stringify(a,null,2))}
    res.json({success:true});
  }catch(e){console.error(e);res.status(500).json({success:false})}
});
app.listen(process.env.PORT||3000,()=>console.log('Northvale running'));
