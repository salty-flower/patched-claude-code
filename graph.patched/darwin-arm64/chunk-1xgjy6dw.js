// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{U2r}from"./chunk-wvpct8kj.js";function XGe(e,r){return e.toLocaleString("en-US",{month:"short",day:"numeric",...r?.includeYear&&{year:"numeric"},hour:"numeric",minute:"2-digit",timeZone:U2r()}).replace(/,? at |, (?=\d{1,2}:)/," ").replace(/[ \u202f]([AP]M)/i,(o,t)=>t.toLowerCase())}
export{XGe};
