// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Y}from"./chunk-wk0rbc8w.js";import{ev}from"./chunk-2gwswfrc.js";import{createInterface as m}from"readline";var R=5,got=250,E8r="That answer arrived too quickly after the question to count. Please answer again.";async function Tqe(e,t=process.stdin,{ignoreAnswersWithinMs:o=0,reaskPreamble:d=""}={}){if(o>0){if(await w(t,o))return!1}let r=()=>{},a=new Promise((n)=>{r=n}),s=m({input:t,output:process.stdout}),i=0,c=()=>{let n=performance.now();s.question(`${e} [y/N] `,(f)=>{if(o>0&&performance.now()-n<o){if(++i>R){r(!1),s.close();return}process.stdout.write(`${d}${E8r}
`),c();return}let l=f.trim().toLowerCase();r(l==="y"||l==="yes"),s.close()})};return c(),s.once("close",()=>r(!1)),a}async function w(e,t){let o="isTTY"in e&&e.isTTY===!0,d="isRaw"in e&&e.isRaw===!0,r=!1,a=()=>{r=!0},s=()=>{};if(e.once("end",a),e.once("close",a),e.on("data",s),o)ev(e,!0);try{e.resume(),await Y(t)}finally{if(e.removeListener("data",s),e.removeListener("end",a),e.removeListener("close",a),e.pause(),o)ev(e,d)}return r||"readableEnded"in e&&e.readableEnded===!0||"destroyed"in e&&e.destroyed===!0}
export{got,E8r,Tqe};
