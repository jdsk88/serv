import express from "express";
import {getTranslatedEmails,getTranslatedEmail} from "../services/translate.js";
import {getEmails} from "../services/email.js";
import crypto from "crypto";
import CryptoJS from 'crypto-js';
import translate from 'translate';
translate.engine = 'google';
translate.key = process.env.TRANSLATE_KEY;
//cryptography
const secret = process.env.MAIL_SECRET
const routes = express.Router({});

routes.get("/", async (req, res) => {
    const result = await getEmails({
        letter: req.query.letter,
        limit: parseInt(req.query.limit),
        page: parseInt(req.query.page),
    });
    res.header("Access-Control-Allow-Origin", "*");
    res.send(result);
});

routes.get(`/:email_id/:language`, async (req, res) => {
    const { email_id } = req.params;
    const { language } = req.params;
    const result = await getTranslatedEmail({ id: email_id });
    res.header("Access-Control-Allow-Origin", "*");
    console.log(result)
      const translated_result = {
        from: result.from,
        to: result.to,
        toCopy: result.toCopy,
        toHiddenCopy: result.toHiddenCopy,
        title: await translate(result.title, language),
        letter: await translate(result.letter, language),
        signature: await translate(result.signature, language),
      }
      res.send(translated_result);
  });
// routes.get("/:language", async (req, res) => {
//     const { language } = req.params;
//     const result = await getTranslatedEmails({
//       letter: req.query.letter,
//       limit: parseInt(req.query.limit),
//       page: parseInt(req.query.page),
//     });
//     res.header("Access-Control-Allow-Origin", "*");
//     for (var item of result) {
//       const iterated_items = {
        
//         from: item.from,
//         to: item.to,
//         toCopy: item.toCopy,
//         toHiddenCopy: item.toHiddenCopy,
//         title: await translate(item.title, language),
//         letter: await translate(item.letter, language),
//         signature: await translate(item.signature, language),
//       }
//       const iterated_items_STR = JSON.stringify(iterated_items)
//       console.log(iterated_items_STR)
//       res.send(iterated_items_STR);
//     }
//   });
export default routes
