// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{lU}from"./chunk-gyf58rwf.js";import{RV,nr,f8e,ho}from"./chunk-tdjxpe2m.js";import{n4}from"./chunk-8pet3bvp.js";function tPe(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",gIs={github:nr,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function DP(r){if(r=tPe(r),ho(r))return"github";let t=f8e(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function But(r){let t=r.trim();if(RV(t)||lU(t)||n4(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function Hrn(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!lU(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{tPe,gIs,DP,But,Hrn};
