// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{bT}from"./chunk-q815n131.js";import{mc}from"./chunk-xt3ddvnj.js";import{d}from"./chunk-t2kfemrk.js";var Dy=d(function(E){var t=mc(),l=bT();function m(e){try{let o=new Set(Array.from(e.match(/([A-Z_]){3,}/g)??[]));return o.delete("CONFIG"),o.delete("CONFIG_PREFIX_SEPARATOR"),o.delete("ENV"),[...o].join(", ")}catch(o){return e}}var w=(e,o)=>async()=>{try{let r=e(process.env,o);if(r===void 0)throw Error();return r}catch(r){throw new t.CredentialsProviderError(r.message||`Not found in ENV: ${m(e.toString())}`,{logger:o?.logger})}},F=(e,{preferredFile:o="config",...r}={})=>async()=>{let n=l.getProfileName(r),{configFile:i,credentialsFile:c}=await l.loadSharedConfigFiles(r),s=c[n]||{},g=i[n]||{},h=o==="config"?{...s,...g}:{...g,...s};try{let f=e(h,o==="config"?i:c);if(f===void 0)throw Error();return f}catch(a){throw new t.CredentialsProviderError(a.message||`Not found in config files w/ profile [${n}]: ${m(e.toString())}`,{logger:r.logger})}},u=(e)=>typeof e==="function",C=(e)=>u(e)?async()=>await e():t.fromStatic(e),y=({environmentVariableSelector:e,configFileSelector:o,default:r},n={})=>{let{signingName:i,logger:c}=n,s={signingName:i,logger:c};return t.memoize(t.chain(w(e,s),F(o,n),C(r)))};E.loadConfig=y});
export{Dy};
