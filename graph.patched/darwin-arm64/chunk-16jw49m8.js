// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{iq}from"./chunk-jwn3rcdm.js";import{yie,Qr,sPt,Ao}from"./chunk-kvaypm0q.js";import{_ie}from"./chunk-zj1h9c1q.js";function L7e(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",YFa={github:Qr,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function n1(r){if(r=L7e(r),Ao(r))return"github";let t=sPt(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function k5t(r){let t=r.trim();if(yie(t)||iq(t)||_ie(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function rtr(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!iq(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{L7e,YFa,n1,k5t,rtr};
