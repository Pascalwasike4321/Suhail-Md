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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




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
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_30_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMSxcbiAgICAgICAgMjI5LFxuICAgICAgICAzOCxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjE2LFxuICAgICAgICA1OSxcbiAgICAgICAgMjM0LFxuICAgICAgICA2MyxcbiAgICAgICAgOTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA1LFxuICAgICAgICA2OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTczLFxuICAgICAgICAxMDksXG4gICAgICAgIDIwNixcbiAgICAgICAgNzIsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxOSxcbiAgICAgICAgNTEsXG4gICAgICAgIDEwNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMDEsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTgxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDYsXG4gICAgICAgIDQ2LFxuICAgICAgICAyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMTk1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA5MixcbiAgICAgICAgMjMzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTE2LFxuICAgICAgICAxNTksXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTE1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTAzLFxuICAgICAgICA0OSxcbiAgICAgICAgMTg3LFxuICAgICAgICA1NixcbiAgICAgICAgODUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICA4LFxuICAgICAgICAyMSxcbiAgICAgICAgMTA4LFxuICAgICAgICAyNDksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOSxcbiAgICAgICAgNzEsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxOTIsXG4gICAgICAgIDk5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTIyLFxuICAgICAgICA2NlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjYsXG4gICAgICAgIDgzLFxuICAgICAgICA3OCxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjUxLFxuICAgICAgICA4NSxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDYzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTksXG4gICAgICAgIDY1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2LFxuICAgICAgICAxOCxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgODAsXG4gICAgICAgIDQ3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA1MixcbiAgICAgICAgNjUsXG4gICAgICAgIDc2LFxuICAgICAgICA4NixcbiAgICAgICAgMTU4LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNzQsXG4gICAgICAgIDk4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEzMixcbiAgICAgICAgNixcbiAgICAgICAgMzEsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU0LFxuICAgICAgICA3NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgOTQsXG4gICAgICAgIDk5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDc3LFxuICAgICAgICAxMzksXG4gICAgICAgIDQyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA1OCxcbiAgICAgICAgMjIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNDQsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjUyLFxuICAgICAgICA5MixcbiAgICAgICAgMjUsXG4gICAgICAgIDU4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDgwLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE1OSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgOTlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNzksXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMzNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTQzLFxuICAgICAgICA3LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5MixcbiAgICAgICAgMzQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNDksXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTksXG4gICAgICAgIDE3MixcbiAgICAgICAgOCxcbiAgICAgICAgMTUzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyLFxuICAgICAgICAzMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNjAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzksXG4gICAgICAgIDExMCxcbiAgICAgICAgNzMsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDcsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMixcbiAgICAgICAgMjE5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDUsXG4gICAgICAgIDQ3LFxuICAgICAgICAyOCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM0LFxuICAgICAgICAxODIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjUyLFxuICAgICAgICA1NSxcbiAgICAgICAgNTIsXG4gICAgICAgIDE2NSxcbiAgICAgICAgODQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDMzLFxuICAgICAgICAxMzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI0OCxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJPZnFaVXVVdnI5TWMxcytwam5CbnVKYm5CQkoxVGE1YlRQWWpUSkZkcFNzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJLX1Y4ZnUwTlRkLWZEVjh2OUZjc0l3XCIsXG4gIFwicGhvbmVJZFwiOiBcIjVmNDliMGIzLWNhMmUtNGMzYi1hZDJhLTc1OTQyYjU1NjY4OVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTUsXG4gICAgICA1MSxcbiAgICAgIDI1MCxcbiAgICAgIDIxNSxcbiAgICAgIDExNixcbiAgICAgIDEyOSxcbiAgICAgIDIyLFxuICAgICAgMjEzLFxuICAgICAgMjUsXG4gICAgICAxNDIsXG4gICAgICAxMTMsXG4gICAgICAyNDEsXG4gICAgICAyMDAsXG4gICAgICAyNyxcbiAgICAgIDUsXG4gICAgICAxMDksXG4gICAgICAxMDQsXG4gICAgICAxNTksXG4gICAgICAxMzgsXG4gICAgICA2NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTgsXG4gICAgICAyNTIsXG4gICAgICAxMDEsXG4gICAgICAxOTMsXG4gICAgICA1NixcbiAgICAgIDIwMyxcbiAgICAgIDUsXG4gICAgICAyMzEsXG4gICAgICAxMTAsXG4gICAgICAxMjQsXG4gICAgICAxNzUsXG4gICAgICAxOTYsXG4gICAgICAxMTMsXG4gICAgICA3NyxcbiAgICAgIDE0OSxcbiAgICAgIDExMixcbiAgICAgIDIzOSxcbiAgICAgIDE5OSxcbiAgICAgIDIxOCxcbiAgICAgIDk2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlEyUUFMSlc1XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyNTQ3MTQ0ODAxNjI6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjI1MDU3NzMxNzU4NTAwMDoxOUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLTEEvOXdIRUpLS25iVUdHQklnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjN2SEgzU3JJS2JoR21SK3p0dHNmNjI0OU91cE5FazhjaDhVT09xOEpid3M9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiREZ4RjM5U25pemNFS1RWQXh4MTdUR0k1eGR6QmowTUI3YmZDTEZPZUNYYWpvZXJDOUVzRXVTZng2SXdBRTVQYTNERVBwbWUyNEx2c3QzNjgvdUhTQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiTmpQV0NFc2lPdG9wTkxHUmJPVG5oVWdjcWlYYmxlUzZDNkVlZmlBNnRvN1NZeThhQ0RiM3hyQUtsRzk2MElpQ0t3QytJM0ZZNVNmQW1LYWk2d0hnakE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjU0NzE0NDgwMTYyOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjE5LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDksXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjIyMzgyMjksXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBTjdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFONy5qc29uIjogIntcImtleURhdGFcIjpcImNHc3BEOWU1YkRKU2JVVlA4UGw2cHFPYlZWZmZTTlNucXlYbVFxQTlGa2M9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA3NDA3NTE2OSxcImN1cnJlbnRJbmRleFwiOjQsXCJkZXZpY2VJbmRleGVzXCI6WzAsMSwyXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
