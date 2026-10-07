// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{JN}from"./chunk-gvn18sr5.js";import{zG,Vn,QVe,ao}from"./chunk-z6w26610.js";import{yK}from"./chunk-nffxs9ey.js";function _Te(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",Jcs={github:Vn,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function YR(r){if(r=_Te(r),ao(r))return"github";let t=QVe(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function Bot(r){let t=r.trim();if(zG(t)||JN(t)||yK(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function p9t(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!JN(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{_Te,Jcs,YR,Bot,p9t};
