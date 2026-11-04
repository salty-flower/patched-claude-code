// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{m6}from"./chunk-53x2yxpb.js";import{E7,$r,C_t,ao}from"./chunk-vt1xpp33.js";import{Yee}from"./chunk-xfydr49e.js";function T6e(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",a5i={github:$r,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function DL(r){if(r=T6e(r),ao(r))return"github";let t=C_t(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function oUt(r){let t=r.trim();if(E7(t)||m6(t)||Yee(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function Djn(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!m6(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{T6e,a5i,DL,oUt,Djn};
