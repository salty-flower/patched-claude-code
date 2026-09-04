// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.259
import{c8,qo,fae}from"./chunk-rt4nfhwk.js";function bxe(r){return r.replace(/:\d+$/,"")}var n="gitlab.com",e="bitbucket.org",s={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function J0(r){if(r=bxe(r),qo(r))return"github";let t=c8(r);while(t.startsWith("www."))t=t.slice(4);let i=s[t];if(i)return i;if(t===n)return"gitlab";if(t===e)return"bitbucket";return"other"}function Qpr(r){switch(J0(r)){case"gitlab":return n;case"bitbucket":return e;default:return null}}function Nhe(r){let t=r.trim();if(fae(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function mPn(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t?{user:t[1],host:t[2],path:t[3]}:null}
export{bxe,J0,Qpr,Nhe,mPn};
