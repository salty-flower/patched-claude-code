// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{gG,P1e}from"./chunk-4bw62nzm.js";import{xM}from"./chunk-m2gn903q.js";import{Po,kB,rr,U8,xn}from"./chunk-phm7wwmz.js";function EVo(a){let e=a.trim(),r=Po(),t=kB(e);if(t!==null)return{slug:t,url:xn({slug:t,env:r})};let n=e.toLowerCase();if(rr.test(n))return{slug:n,url:xn({slug:n,env:r})};let o=U8(e);if(o===null)return{error:"Error: --watch-artifact expects an artifact id or a claude.ai artifact URL"};if(o.env!==r)return{error:`Error: --watch-artifact got a ${o.env} artifact URL, but this session is signed in to ${r}`};return{slug:o.slug,url:xn(o)}}var s=null;function vVo(a){s=a}function kVo(){let a=s;return s=null,a}function AVo(){return s}function S2t(a){let e=[];for(let r=0;r<a.length;r++){let t=a[r];if(t==="--watch-artifact"||t==="--watch-artifact-no-autoreact"){r++;continue}if(t.startsWith("--watch-artifact=")||t.startsWith("--watch-artifact-no-autoreact="))continue;e.push(t)}return e}function K7n(a,e){a=a.toLowerCase();let r=["--watch-artifact","--watch-artifact-no-autoreact"],t=gG(),n=[],o=!1;for(let i=0;i<t.length;i++){let c=t[i];if(r.some((u)=>c===u&&t[i+1]?.toLowerCase()===a||c.toLowerCase()===`${u}=${a}`)){if(c.indexOf("=")===-1)i++;o=!0;continue}n.push(c)}if(o)P1e(n),xM("--watch-artifact",["--watch-artifact-no-autoreact"],null,void 0,e)}function CVo(a){let e=gG(),r;for(let t=0;t<e.length;t++){let n=e[t];if(n==="--watch-artifact"&&e[t+1]!==void 0)r=e[t+1].toLowerCase();else if(n.startsWith("--watch-artifact="))r=n.slice(17).toLowerCase()}if(r===void 0)return!1;return P1e([...S2t(gG()),"--watch-artifact-no-autoreact",r]),xM("--watch-artifact-no-autoreact",["--watch-artifact"],r,void 0,a),!0}
export{EVo,vVo,kVo,AVo,S2t,K7n,CVo};
