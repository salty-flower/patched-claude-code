// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{V1}from"./chunk-bnfhb7sj.js";import{RK,sr,NQe,co}from"./chunk-h7da0bhz.js";import{b9}from"./chunk-hh9t8f7t.js";function _He(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",$6s={github:sr,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function JI(r){if(r=_He(r),co(r))return"github";let t=NQe(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function S_t(r){let t=r.trim();if(RK(t)||V1(t)||b9(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function bpn(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!V1(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{_He,$6s,JI,S_t,bpn};
