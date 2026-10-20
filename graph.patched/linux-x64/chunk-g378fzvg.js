// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{T1}from"./chunk-n5v91jc3.js";import{pY,ur,Vet,co}from"./chunk-0vs9wg49.js";import{i8}from"./chunk-dzngbkpd.js";function KDe(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",CXs={github:ur,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function hO(r){if(r=KDe(r),co(r))return"github";let t=Vet(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function JSt(r){let t=r.trim();if(pY(t)||T1(t)||i8(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function Thn(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!T1(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{KDe,CXs,hO,JSt,Thn};
