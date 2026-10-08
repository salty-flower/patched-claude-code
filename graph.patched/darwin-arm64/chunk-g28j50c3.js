// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
function Iit(e,r,o){Object.defineProperty(e,r,{value:o,enumerable:!0,writable:!0,configurable:!0})}function p(e){if(typeof e!=="object"||e===null)return!1;let r=new Set([e]),o=[e];for(let t=o.pop();t!==void 0;t=o.pop()){if(Object.hasOwn(t,"__proto__"))return!0;for(let u of Array.isArray(t)?t:Object.values(t))if(typeof u==="object"&&u!==null&&!r.has(u))r.add(u),o.push(u)}return!1}function aKe(e){if(!p(e))return{stripped:e,count:0};let r=0,o=new Map,t=[],u=(n)=>{if(typeof n!=="object"||n===null)return n;let a=o.get(n);if(a===void 0)a=Array.isArray(n)?[]:{},o.set(n,a),t.push([n,a]);return a},f=u(e);for(let n=t.pop();n!==void 0;n=t.pop()){let[a,i]=n;if(Array.isArray(a)&&Array.isArray(i)){for(let s of a)i.push(u(s));continue}for(let[s,l]of Object.entries(a))if(s==="__proto__")r++;else Reflect.set(i,s,u(l))}return{stripped:f,count:r}}function Ta(e,r){return Object.hasOwn(e,r)?e[r]:void 0}class c{reader=null;register(e){let r=this.reader;return this.reader=e,r}}var d=new c;function Nhs(e){return d.register(e)}function R(){let e=d.reader;if(!e)return!0;try{let{value:r,source:o,defaultHost:t}=e("tengu_warm_sunrise",!0);return r!==!1||o!=="payload"||!t}catch{return!0}}function pNn(e){return e!=="-rm"||R()}
export{Iit,aKe,Ta,Nhs,pNn};
