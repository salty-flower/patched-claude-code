// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{OB}from"./chunk-tdxkq523.js";import{w3,ur,ett,co}from"./chunk-b8vhamvd.js";import{g8}from"./chunk-7606em17.js";function ZHe(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",u7s={github:ur,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function wO(r){if(r=ZHe(r),co(r))return"github";let t=ett(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function swt(r){let t=r.trim();if(w3(t)||OB(t)||g8(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function Bhn(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!OB(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{ZHe,u7s,wO,swt,Bhn};
