// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{R9,UN,Ro,bjt,Ao}from"./chunk-n5atsp4q.js";import{eG}from"./chunk-bt9vca5h.js";function bSe(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",cWo={github:Ro,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function QT(r){if(r=bSe(r),Ao(r))return"github";let t=bjt(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function kXe(r){let t=r.trim();if(R9(t)||UN(t)||eG(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function B2t(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!UN(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{bSe,cWo,QT,kXe,B2t};
