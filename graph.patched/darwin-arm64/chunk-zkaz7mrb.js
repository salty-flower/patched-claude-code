// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Yu}from"./chunk-ycp5r4r6.js";import{mRe}from"./chunk-xkrrrz48.js";import{zh}from"./chunk-n1cpnz94.js";import{RHe}from"./chunk-asqcbvd4.js";import{homedir as i}from"os";import{dirname as l,join as e}from"path";var dWe=".credentials.json",cWe=".device-keys.json";function p_r(){return e(i(),".claude",cWe).normalize("NFC")}var S7t=".config.json",gps=`.claude${mRe[0]}.json`,slo=mRe.map((o)=>`.claude${o}.json`),wOi=[...slo,S7t,dWe,cWe];function uMt(){let o=Yu(),r=RHe();if(o===null||r===null)return[p_r()];let t=l(zh());return[...slo.map((n)=>e(t,n)),e(o,S7t),e(r,dWe),p_r()]}
export{dWe,cWe,p_r,S7t,gps,slo,wOi,uMt};
