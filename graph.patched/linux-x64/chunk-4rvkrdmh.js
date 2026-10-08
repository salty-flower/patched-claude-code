// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{W$}from"./chunk-p46wpkfz.js";import{Q2,Yn,qYe,po}from"./chunk-trynpg3y.js";import{T4}from"./chunk-ettyqnzn.js";function ECe(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",Rbs={github:Yn,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function bx(r){if(r=ECe(r),po(r))return"github";let t=qYe(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function Vat(r){let t=r.trim();if(Q2(t)||W$(t)||T4(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function p7t(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!W$(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{ECe,Rbs,bx,Vat,p7t};
