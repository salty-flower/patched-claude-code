// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{sF}from"./chunk-f8eqwxpt.js";import{e6,qn,sqe,ao}from"./chunk-j4wy5r0f.js";import{kq}from"./chunk-hd1pzxwr.js";function Cke(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",Mds={github:qn,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function ZR(r){if(r=Cke(r),ao(r))return"github";let t=sqe(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function Yot(r){let t=r.trim();if(e6(t)||sF(t)||kq(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function RYt(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!sF(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{Cke,Mds,ZR,Yot,RYt};
