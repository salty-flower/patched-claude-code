// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{$W,H$e}from"./chunk-g79wjybr.js";import{hH}from"./chunk-ztvkra0t.js";import{bo,tB,tr,l5,kn}from"./chunk-571ddenq.js";function aFo(a){let e=a.trim(),r=bo(),t=tB(e);if(t!==null)return{slug:t,url:kn({slug:t,env:r})};let n=e.toLowerCase();if(tr.test(n))return{slug:n,url:kn({slug:n,env:r})};let o=l5(e);if(o===null)return{error:"Error: --watch-artifact expects an artifact id or a claude.ai artifact URL"};if(o.env!==r)return{error:`Error: --watch-artifact got a ${o.env} artifact URL, but this session is signed in to ${r}`};return{slug:o.slug,url:kn(o)}}var s=null;function lFo(a){s=a}function cFo(){let a=s;return s=null,a}function dFo(){return s}function hFt(a){let e=[];for(let r=0;r<a.length;r++){let t=a[r];if(t==="--watch-artifact"||t==="--watch-artifact-no-autoreact"){r++;continue}if(t.startsWith("--watch-artifact=")||t.startsWith("--watch-artifact-no-autoreact="))continue;e.push(t)}return e}function B6n(a,e){a=a.toLowerCase();let r=["--watch-artifact","--watch-artifact-no-autoreact"],t=$W(),n=[],o=!1;for(let i=0;i<t.length;i++){let c=t[i];if(r.some((u)=>c===u&&t[i+1]?.toLowerCase()===a||c.toLowerCase()===`${u}=${a}`)){if(c.indexOf("=")===-1)i++;o=!0;continue}n.push(c)}if(o)H$e(n),hH("--watch-artifact",["--watch-artifact-no-autoreact"],null,void 0,e)}function uFo(a){let e=$W(),r;for(let t=0;t<e.length;t++){let n=e[t];if(n==="--watch-artifact"&&e[t+1]!==void 0)r=e[t+1].toLowerCase();else if(n.startsWith("--watch-artifact="))r=n.slice(17).toLowerCase()}if(r===void 0)return!1;return H$e([...hFt($W()),"--watch-artifact-no-autoreact",r]),hH("--watch-artifact-no-autoreact",["--watch-artifact"],r,void 0,a),!0}
export{aFo,lFo,cFo,dFo,hFt,B6n,uFo};
