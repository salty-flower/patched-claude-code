// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{X}from"./chunk-3rgses43.js";import{Gk}from"./chunk-mp1gcfk3.js";import{createInterface as b}from"readline";var E=5,wze=250,GZo="That answer arrived too quickly after the question to count. Please answer again.";async function uHe(e,a=process.stdin,{ignoreAnswersWithinMs:r=0,reaskPreamble:c="",signal:s}={}){if(r>0){if(await R(a,r))return!1}if(s?.aborted===!0)return!1;let o=()=>{},n=new Promise((d)=>{o=d}),t=b({input:a,output:process.stdout}),f=0,l=()=>{let d=performance.now();t.question(`${e} [y/N] `,(m)=>{if(r>0&&performance.now()-d<r){if(++f>E){o(!1),t.close();return}process.stdout.write(`${c}${GZo}
`),l();return}let i=m.trim().toLowerCase();o(i==="y"||i==="yes"),t.close()})};return l(),t.once("close",()=>o(!1)),s?.addEventListener("abort",()=>t.close(),{once:!0}),n}async function R(e,a){let r="isTTY"in e&&e.isTTY===!0,c="isRaw"in e&&e.isRaw===!0,s=!1,o=()=>{s=!0},n=()=>{};if(e.once("end",o),e.once("close",o),e.on("data",n),r)Gk(e,!0);try{e.resume(),await X(a)}finally{if(e.removeListener("data",n),e.removeListener("end",o),e.removeListener("close",o),e.pause(),r)Gk(e,c)}return s||"readableEnded"in e&&e.readableEnded===!0||"destroyed"in e&&e.destroyed===!0}
export{wze,GZo,uHe};
