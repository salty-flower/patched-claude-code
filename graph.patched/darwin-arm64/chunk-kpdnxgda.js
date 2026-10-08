// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{JF}from"./chunk-b5feae42.js";import{lz,Yn,Z3e,po}from"./chunk-xrq7sey1.js";import{MK}from"./chunk-je76vky8.js";function PTe(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",ubs={github:Yn,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function vx(r){if(r=PTe(r),po(r))return"github";let t=Z3e(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function tlt(r){let t=r.trim();if(lz(t)||JF(t)||MK(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function RQt(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!JF(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{PTe,ubs,vx,tlt,RQt};
