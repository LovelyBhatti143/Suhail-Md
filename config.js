const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923284303828";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923284303828,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_04_43_07_11_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDgsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgNCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyLFxuICAgICAgICA5NixcbiAgICAgICAgMTgzLFxuICAgICAgICA2MixcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMzUsXG4gICAgICAgIDExNixcbiAgICAgICAgMTkyLFxuICAgICAgICAyMDksXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDgxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTkxLFxuICAgICAgICAyMTksXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDc1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDI5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMSxcbiAgICAgICAgMTg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNDksXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUzLFxuICAgICAgICA1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxNyxcbiAgICAgICAgNjIsXG4gICAgICAgIDYxLFxuICAgICAgICA3OCxcbiAgICAgICAgOTUsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE3NyxcbiAgICAgICAgODksXG4gICAgICAgIDE3MyxcbiAgICAgICAgNDZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDUzLFxuICAgICAgICAzMCxcbiAgICAgICAgMTE1LFxuICAgICAgICA3NyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxOTksXG4gICAgICAgIDQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDk3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzYsXG4gICAgICAgIDIwNixcbiAgICAgICAgNDcsXG4gICAgICAgIDcsXG4gICAgICAgIDIyLFxuICAgICAgICAzNixcbiAgICAgICAgNDgsXG4gICAgICAgIDU1LFxuICAgICAgICA0MixcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTEsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTczLFxuICAgICAgICA1NSxcbiAgICAgICAgODgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgNjQsXG4gICAgICAgIDE3LFxuICAgICAgICAxMTQsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDg0LFxuICAgICAgICAzMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTUsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI0MCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOTAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDI5LFxuICAgICAgICAxNyxcbiAgICAgICAgMTkwLFxuICAgICAgICA1M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICA5MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxOSxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDU5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExLFxuICAgICAgICA0NCxcbiAgICAgICAgOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE5MSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTcsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3NyxcbiAgICAgICAgNzEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTM1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxODEsXG4gICAgICAgIDc4LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxNTgsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgODcsXG4gICAgICAgIDY3LFxuICAgICAgICA5LFxuICAgICAgICAzOCxcbiAgICAgICAgMzUsXG4gICAgICAgIDc0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTc5LFxuICAgICAgICA3NCxcbiAgICAgICAgMjE1LFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIxMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA1NCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICA5MSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMjQwLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgNjFcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMTUzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDc4LFxuICAgICAgICAxMixcbiAgICAgICAgMTI5LFxuICAgICAgICAzNCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA2NCxcbiAgICAgICAgMTkxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzNixcbiAgICAgICAgODksXG4gICAgICAgIDIzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMTksXG4gICAgICAgIDIxMixcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTY2LFxuICAgICAgICA5OSxcbiAgICAgICAgOCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTE1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjAzLFxuICAgICAgICA3MyxcbiAgICAgICAgMjQzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxODQsXG4gICAgICAgIDQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDgyLFxuICAgICAgICA3NyxcbiAgICAgICAgMzksXG4gICAgICAgIDc5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDYxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjUsXG4gICAgICAgIDYzLFxuICAgICAgICAxNDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDI4LFxuICAgICAgICAxMyxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwidVJNbnhiUDRQRzA1YmZLa3VLYk1tRURTcUplMHRZd2J1bHE1VGpoaE01VT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiUERVWlNyODVUWGFtdHZwQ25DMlpzQVwiLFxuICBcInBob25lSWRcIjogXCJiMDlkZGJjOS01NzJjLTQ2YTUtOWM3OS0zMmM2MjViNzUzNzRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTgwLFxuICAgICAgMjQsXG4gICAgICAxMzksXG4gICAgICAxODYsXG4gICAgICAxMzksXG4gICAgICA0MyxcbiAgICAgIDIxLFxuICAgICAgODMsXG4gICAgICAxNTYsXG4gICAgICAxMTYsXG4gICAgICAxMixcbiAgICAgIDUxLFxuICAgICAgMjI3LFxuICAgICAgMjksXG4gICAgICAyLFxuICAgICAgMTMxLFxuICAgICAgMTk3LFxuICAgICAgMTQ3LFxuICAgICAgMjAwLFxuICAgICAgMTM1XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICAxMjcsXG4gICAgICA5MyxcbiAgICAgIDIyMixcbiAgICAgIDc3LFxuICAgICAgNDIsXG4gICAgICAyMzAsXG4gICAgICAyMCxcbiAgICAgIDE1MixcbiAgICAgIDM4LFxuICAgICAgMTQ1LFxuICAgICAgMTQ2LFxuICAgICAgMjE2LFxuICAgICAgODIsXG4gICAgICAxODEsXG4gICAgICAyNTUsXG4gICAgICA5LFxuICAgICAgOTMsXG4gICAgICAxOSxcbiAgICAgIDE2MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIzWVdMMjFaWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMjg0MzAzODI4OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI3NjI0ODkyMzUwODc1NzoxNEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQNzcvSzhIRU9YRnZiUUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZVUmZlNk1FR1BDTnpZZjF2d0UyaEFkNXd2UFlqaVZhUUdCM0kyVE91a2s9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ3lBMHJPbndHbHFBWU16dUd5NlFXcUkyR2pSZ2pnd1pqVmdvcE9tVC9CYXpxOHpxYVdEVlVkYnlKQ1lKR2NKNmE2VmFyWkJDdzhUUDBIcFV0elFGRHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiVWUwZ1pxQ2RTMTI4T21mV0k0cU9zdE90ano1R2VGTThscGFvRlpMdEJJZVMremdOeHhYR0tMMTRYMDhJYk1qT2xnbjZCcjJHT2FOeWJSbjAxbldGZ0E9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMjg0MzAzODI4OjE0QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDczXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjA2NzMwMDFcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Husnain Bhatti",
  ownername:process.env.OWNER_NAME|| "Naino",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
