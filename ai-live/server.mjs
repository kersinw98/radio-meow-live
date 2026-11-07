import "dotenv/config";
import express from "express";
import { WebSocketServer, WebSocket } from "ws";
import path from "node:path";
import { fileURLToPath } from "node:url";
const root=path.dirname(fileURLToPath(import.meta.url));
const app=express();app.use(express.json({limit:"32kb"}));app.use(express.static(path.join(root,"public")));
const server=app.listen(Number(process.env.PORT||8765),"0.0.0.0",()=>console.log("Halo Meow local host on http://127.0.0.1:"+(process.env.PORT||8765)));
const clients=new Set(),wss=new WebSocketServer({noServer:true});
server.on("upgrade",(req,socket,head)=>{if(req.url!=="/bridge"){socket.destroy();return;}wss.handleUpgrade(req,socket,head,ws=>{clients.add(ws);ws.on("close",()=>clients.delete(ws));});});
const send=o=>{const s=JSON.stringify(o);for(const c of clients)if(c.readyState===WebSocket.OPEN)c.send(s);};
const last=new Map(),cool=(k,ms)=>{const n=Date.now();if(n-(last.get(k)||0)<ms)return false;last.set(k,n);return true;};
const base=(process.env.AI_BASE_URL||"https://api.openai.com/v1").replace(/\/+$/,"");
async function reply(user,text){if(!process.env.AI_API_KEY)throw Error("AI_API_KEY belum disetel");const r=await fetch(base+"/chat/completions",{method:"POST",headers:{Authorization:"Bearer "+process.env.AI_API_KEY,"Content-Type":"application/json"},body:JSON.stringify({model:process.env.AI_MODEL||"gpt-4o-mini",temperature:.7,max_tokens:120,messages:[{role:"system",content:"You are Halo Meow, a warm Indonesian AI virtual radio host. Reply naturally in Bahasa Indonesia, concise and friendly. Never pretend to be human. Never solicit gifts, pressure spending, or promise rewards. Avoid unsafe advice and personal data."},{role:"user",content:"Viewer "+user+" says: "+String(text).slice(0,500)+". Reply as Halo Meow."}]})});if(!r.ok)throw Error("AI provider HTTP "+r.status);const j=await r.json();return j.choices?.[0]?.message?.content?.trim()||"Hai! Selamat datang di Halo Meow!";}
async function event(e){const d=e?.data||{},type=e?.event,user=d.uniqueId||d.nickname||d.user?.uniqueId||"Teman Meow";if(type==="chat"){const msg=d.comment||d.message||"";if(!msg||!cool("chat:"+user,8000))return;send({type:"chat",name:user,text:msg});try{send({type:"speech",text:await reply(user,msg)});}catch(err){send({type:"status",text:"AI belum siap: "+err.message});}}else if(type==="follow"&&cool("follow:"+user,2500)){send({type:"speech",text:"Makasih sudah follow, "+user+"! Selamat datang di Halo Meow!"});}else if(type==="gift"){const gift=d.giftName||d.gift?.name||"gift";send({type:"speech",text:"Terima kasih banyak, "+user+", untuk "+gift+"! Kamu baik sekali."});}else if(type==="like"&&cool("likes",15000)){send({type:"event",text:"Makasih untuk likes-nya, teman-teman!"});}else if(type==="share"){send({type:"speech",text:"Terima kasih sudah share Halo Meow, "+user+"!"});}}
let tf;function connect(){if(tf)try{tf.close()}catch{}tf=new WebSocket(process.env.TIKFINITY_WS||"ws://127.0.0.1:21213/");tf.on("open",()=>send({type:"status",text:"TikFinity terhubung"}));tf.on("message",raw=>{try{event(JSON.parse(raw.toString()));}catch(err){console.error(err.message);}});tf.on("close",()=>setTimeout(connect,5000));tf.on("error",err=>console.error("TikFinity:",err.message));}connect();
app.get("/health",(_,res)=>res.json({ok:true,tikfinity:tf?.readyState===WebSocket.OPEN,aiConfigured:Boolean(process.env.AI_API_KEY)}));
