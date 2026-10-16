// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{j}from"./chunk-xzypj06m.js";import{z}from"./chunk-r0a9v21k.js";import{fE}from"./chunk-gafqfm7x.js";import{w9}from"./chunk-kc7vd1v6.js";class u{buffer="";seeded="";capturing=!1;readableHandler=null}var f=new z(()=>new u);function i(){return f.of(j().host)}function kni(){let e=i();if(!process.stdin.isTTY||e.capturing||fE("-p")||fE("--print"))return;e.capturing=!0,e.buffer="",e.seeded="";try{process.stdin.setEncoding("utf8"),process.stdin.setRawMode(!0),process.stdin.ref(),e.readableHandler=()=>{let n=process.stdin.read();while(n!==null){if(typeof n==="string")l(n);n=process.stdin.read()}},process.stdin.on("readable",e.readableHandler)}catch{e.capturing=!1}}function l(e){let n=i(),t=0;while(t<e.length){let a=e[t],o=a.charCodeAt(0);if(o===3){Uj(),process.exit(130);return}if(o===4){Uj();return}if(o===127||o===8){if(n.buffer.length>0){let r=w9(n.buffer);n.buffer=n.buffer.slice(0,-(r.length||1))}t++;continue}if(o===27){t++;let r=t<e.length?e.charCodeAt(t):-1;if(r===91){t++;while(t<e.length&&e.charCodeAt(t)<64)t++;if(t<e.length)t++}else if(r===93||r===80||r===88||r===94||r===95){t++;while(t<e.length){let s=e.charCodeAt(t);if(s===7){t++;break}if(s===27&&t+1<e.length&&e.charCodeAt(t+1)===92){t+=2;break}t++}}else if(r===79)t+=2;else if(r!==-1&&r!==27)t++;continue}if(o<32&&o!==9&&o!==10&&o!==13){t++;continue}if(o===13){n.buffer+=`
`,t++;continue}n.buffer+=a,t++}}function Uj(){let e=i();if(!e.capturing)return;if(e.capturing=!1,e.readableHandler)process.stdin.removeListener("readable",e.readableHandler),e.readableHandler=null}function fLt(){Uj();let e=i(),n=e.buffer.trim();return e.buffer="",e.seeded="",n}function tsn(){return i().buffer.trim().length>0}function nsn(e){let n=i();n.buffer=e,n.seeded=e}export{kni,Uj,fLt,tsn,nsn};
