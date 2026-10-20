// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{JF,SKe}from"./chunk-dxktn51d.js";import{gI}from"./chunk-cskmvz0m.js";import{Wo,UW,ar,oQ,Dn}from"./chunk-293nkhh0.js";function pls(a){let e=a.trim(),r=Wo(),t=UW(e);if(t!==null)return{slug:t,url:Dn({slug:t,env:r})};let n=e.toLowerCase();if(ar.test(n))return{slug:n,url:Dn({slug:n,env:r})};let o=oQ(e);if(o===null)return{error:"Error: --watch-artifact expects an artifact id or a claude.ai artifact URL"};if(o.env!==r)return{error:`Error: --watch-artifact got a ${o.env} artifact URL, but this session is signed in to ${r}`};return{slug:o.slug,url:Dn(o)}}var s=null;function fls(a){s=a}function mls(){let a=s;return s=null,a}function gls(){return s}function W6t(a){let e=[];for(let r=0;r<a.length;r++){let t=a[r];if(t==="--watch-artifact"||t==="--watch-artifact-no-autoreact"){r++;continue}if(t.startsWith("--watch-artifact=")||t.startsWith("--watch-artifact-no-autoreact="))continue;e.push(t)}return e}function Hur(a,e){a=a.toLowerCase();let r=["--watch-artifact","--watch-artifact-no-autoreact"],t=JF(),n=[],o=!1;for(let i=0;i<t.length;i++){let c=t[i];if(r.some((u)=>c===u&&t[i+1]?.toLowerCase()===a||c.toLowerCase()===`${u}=${a}`)){if(c.indexOf("=")===-1)i++;o=!0;continue}n.push(c)}if(o)SKe(n),gI("--watch-artifact",["--watch-artifact-no-autoreact"],null,void 0,e)}function hls(a){let e=JF(),r;for(let t=0;t<e.length;t++){let n=e[t];if(n==="--watch-artifact"&&e[t+1]!==void 0)r=e[t+1].toLowerCase();else if(n.startsWith("--watch-artifact="))r=n.slice(17).toLowerCase()}if(r===void 0)return!1;return SKe([...W6t(JF()),"--watch-artifact-no-autoreact",r]),gI("--watch-artifact-no-autoreact",["--watch-artifact"],r,void 0,a),!0}
export{pls,fls,mls,gls,W6t,Hur,hls};
