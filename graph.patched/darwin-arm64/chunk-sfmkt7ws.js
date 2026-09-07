// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.260
import{Uet,Ho,iie}from"./chunk-q4eej6rr.js";function URe(r){return r.replace(/:\d+$/,"")}var i="gitlab.com",e="bitbucket.org",o={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function WC(r){if(r=URe(r),Ho(r))return"github";let t=Uet(r),n=o[t];if(n)return n;if(t===i)return"gitlab";if(t===e)return"bitbucket";return"other"}function BRe(r){let t=r.trim();if(iie(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function lHn(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t?{user:t[1],host:t[2],path:t[3]}:null}
export{URe,WC,BRe,lHn};
