//#RIAS
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "obidikechikadibia@gmail.com";
global.location = "lagos, Nigeria";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Toxic1239/RIASGREMORYBOT";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vaex2BtGU3BRQoeEsl0U";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.devs = "2348086541281";
global.sudo = process.env.SUDO || "2349127215714";
global.owner = process.env.OWNER_NUMBER || "2349127215714";
global.style = process.env.STYLE || "1";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/e07fa9dfd176ce3a2886a.jpg";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://toxic-session-id.onrender.com/pair";
global.scan = "https://riasgremorybot-xcqv.onrender.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  " eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiK0dIbDRvL21yVDYxU2d0SEMyaTNJL011WXF3d2lXQnFmd3pkd1VwVzhXVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSU4xRERuUU9OOXFLMEFsZ3U1UjRQZUk3MGpOSVF6dmNEdDhKQ2V0Ky9nND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrQ2t2WEFnSWlqaHpvOEFLVjZoUkVoU0lDRGpSVHIxT0V3MTlqbnN1ajFJPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwYUVuQTIxOWlmUDdxbWpTV2FxR3Jzc2VHNlMvbkI5d29DMmgzRlJUakJVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFPM1g3REt6STRPbVJxc1F4b3ZTNjZvZ0pQNmlNMzFvQ1ZjU3BJQysvME09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImJLNHB0aFpVS0ZqS2tGWjcvdGZQaWI0ekVrOXZKVTBHNGQ1ajRlWTE0aWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVURKTTYrajVTNVltaEE0MDRMWmdNTjNWVDlNeTMrRU5kNFNxS2IzbExrYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidjY3eXpkSGY2bElITWJKVTY0cWhmVlo2TGh3Z0ZVcWdOSHlLaGM0TU94bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ii91OGdrM09yUU51YkpDMlpwdkpJNmhiRmxLRkFORlorYlhtbjdWY3hjL0tZZ0gvRWZ5QVBFbzNiZEdIV2piZnNuUm5zMzdxWmhpeHBETVN5dW1LUkFBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTUsImFkdlNlY3JldEtleSI6IlYyT3l6bllmZFZwaVNlVVpKRnJOSlAxM2JNYnFaQmVjOFlDTlV6U0RaQTQ9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0OTEyNzIxNTcxNEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiI0Q0U3MTY5NkNFQkEyRTgxMDhGQjlDOTkxOTlBRDA1QSJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIzMDAyNTM1fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJLVjBmNGRfOVJLNjNxbEVtb1puT2FBIiwicGhvbmVJZCI6ImMyMmMyNGY0LTk3MzUtNDRhZS05Y2E3LTk0ZjUwODY5MDg0YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIvbFhxSERVL2ttUzMzbDgxb1BSTGRGNmpBN2M9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQTIyWEtBOGlRS2FrOW5ITmcxWk9QNEF3US9NPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkM1VkJIRlhXIiwibWUiOnsiaWQiOiIyMzQ5MTI3MjE1NzE0OjgwQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJQ003S2dGRUpiZHk3VUdHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJMcmVXYWYzMk95TGN5MWpaUG5kVVNsTlpuOWxJYnpETDFYNzlKZDdHbXdjPSIsImFjY291bnRTaWduYXR1cmUiOiI0Ty9mTnF3RTlRZzVaTVBOWWlnQWhDWXl5T0VJalV6ZlN2N3EwN1VXQm5VSFJTMnZFWm5meHh6TTlEeld6ZG44WVJBS2RrYVNreUJjR2JWL2ZHVE1EQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiUHRxWHVQK2VNUjFyZ21xMzlpcFpvREZ6aGtDVTZhaGY1bXhoU2JNQmtxWE5Ua2FWVW11all5ejUvMlUvaTBFdTcwK3BnWFRYT0dmNm9WUTY3R1dNQ2c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTI3MjE1NzE0OjgwQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlM2M2xtbjk5anNpM010WTJUNTNWRXBUV1ovWlNHOHd5OVYrL1NYZXhwc0gifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwMDI1MzEsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSDRkIn0= "
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || "+",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.3.1",
  caption: process.env.CAPTION || "𝗣𝗢𝗪𝗘𝗥𝗘𝗗 𝗕𝗬 𝗧𝗢𝗫𝗫𝗜𝗖 𝗕𝗢𝗬",
  author: process.env.PACK_AUTHER || "Festus Jnr",
  packname: process.env.PACK_NAME || "𝗥𝗜𝗔𝗦 𝗠𝗗",
  botname: process.env.BOT_NAME || "𝗥𝗜𝗔𝗦 𝗚𝗥𝗘𝗠𝗢𝗥𝗬",
  ownername: process.env.OWNER_NAME || "Festus Jnr",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-pBksWDImP6VuvvJTvqDsT3BlbkFJ2E8GhbpzjyRFkFaBI9Aj",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "HRKU-2fc4d785-535b-4113-8291-84c5d3d6d2c3",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "toxicmd12",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "RIAS").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
