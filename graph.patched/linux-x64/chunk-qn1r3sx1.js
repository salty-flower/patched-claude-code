// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{FB}from"./chunk-cwsn6mdf.js";import{b4,sr,P7e,co}from"./chunk-he4afcmc.js";import{u3}from"./chunk-z5pqasm7.js";function uHe(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",tVs={github:sr,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function KI(r){if(r=uHe(r),co(r))return"github";let t=P7e(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function u_t(r){let t=r.trim();if(b4(t)||FB(t)||u3(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function opn(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!FB(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{uHe,tVs,KI,u_t,opn};
