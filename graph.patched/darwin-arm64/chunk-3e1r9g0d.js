// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{W}from"./chunk-qq9jq5dz.js";import{Tn}from"./chunk-83fmeatd.js";import{w,X,t}from"./chunk-qmm87fyw.js";import{mkdir as g,readFile as P}from"fs/promises";import{dirname as S}from"path";function a6(e,f,c){let{defaultValue:a,mode:T,ensureDir:s=!1,indent:p,trailingNewline:y=!1}=c;function u(){return b(a)?a():a}async function m(){let n;try{n=await P(e,"utf8")}catch(i){if(W(i))return u();throw i}let r;try{r=X(n)}catch(i){return t(`jsonStore: ${e} is not valid JSON: ${i}`,{level:"warn"}),u()}let o=f().safeParse(r);if(!o.success)return t(`jsonStore: ${e} failed schema validation: ${o.error.message}`,{level:"warn"}),u();return o.data}async function d(n){if(s!==!1)await g(S(e),{recursive:!0,mode:s===!0?void 0:s.mode});let r=w(n,null,p)+(y?`
`:"");await Tn(e,r,T)}let l=Promise.resolve();function v(n){let r=l.then(async()=>{let o=n(await m());return await d(o),o});return l=r.then(()=>{return},()=>{return}),r}return{path(){return e},read:m,write:d,update:v}}function b(e){return typeof e==="function"}
export{a6};
