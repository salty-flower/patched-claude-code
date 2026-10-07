// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{Pj,kLe}from"./chunk-aywwjcwq.js";import{RM}from"./chunk-vanx1pds.js";import{ho,uU,Qn,Z6,Rn}from"./chunk-ch8aw0k0.js";function fIo(a){let e=a.trim(),r=ho(),t=uU(e);if(t!==null)return{slug:t,url:Rn({slug:t,env:r})};let n=e.toLowerCase();if(Qn.test(n))return{slug:n,url:Rn({slug:n,env:r})};let o=Z6(e);if(o===null)return{error:"Error: --watch-artifact expects an artifact id or a claude.ai artifact URL"};if(o.env!==r)return{error:`Error: --watch-artifact got a ${o.env} artifact URL, but this session is signed in to ${r}`};return{slug:o.slug,url:Rn(o)}}var s=null;function mIo(a){s=a}function gIo(){let a=s;return s=null,a}function hIo(){return s}function k0t(a){let e=[];for(let r=0;r<a.length;r++){let t=a[r];if(t==="--watch-artifact"||t==="--watch-artifact-no-autoreact"){r++;continue}if(t.startsWith("--watch-artifact=")||t.startsWith("--watch-artifact-no-autoreact="))continue;e.push(t)}return e}function Y2n(a,e){a=a.toLowerCase();let r=["--watch-artifact","--watch-artifact-no-autoreact"],t=Pj(),n=[],o=!1;for(let i=0;i<t.length;i++){let c=t[i];if(r.some((u)=>c===u&&t[i+1]?.toLowerCase()===a||c.toLowerCase()===`${u}=${a}`)){if(c.indexOf("=")===-1)i++;o=!0;continue}n.push(c)}if(o)kLe(n),RM("--watch-artifact",["--watch-artifact-no-autoreact"],null,void 0,e)}function yIo(a){let e=Pj(),r;for(let t=0;t<e.length;t++){let n=e[t];if(n==="--watch-artifact"&&e[t+1]!==void 0)r=e[t+1].toLowerCase();else if(n.startsWith("--watch-artifact="))r=n.slice(17).toLowerCase()}if(r===void 0)return!1;return kLe([...k0t(Pj()),"--watch-artifact-no-autoreact",r]),RM("--watch-artifact-no-autoreact",["--watch-artifact"],r,void 0,a),!0}
export{fIo,mIo,gIo,hIo,k0t,Y2n,yIo};
