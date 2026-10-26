// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{kW}from"./chunk-d7b0m8qy.js";import{w5,Er,Lst,yo}from"./chunk-q8vnfcnf.js";import{lX}from"./chunk-5xe1amq0.js";function IFe(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",xui={github:Er,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function IM(r){if(r=IFe(r),yo(r))return"github";let t=Lst(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function vTt(r){let t=r.trim();if(w5(t)||kW(t)||lX(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function zvn(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!kW(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{IFe,xui,IM,vTt,zvn};
