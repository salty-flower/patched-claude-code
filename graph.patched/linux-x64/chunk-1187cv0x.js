// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Q4}from"./chunk-k0dvm1am.js";import{cie,Qr,Qxt,Co}from"./chunk-0rzk15r4.js";import{die}from"./chunk-sx2bsz5g.js";function xYe(r){return r.replace(/:\d+$/,"")}var e="gitlab.com",o="bitbucket.org",sFa={github:Qr,gitlab:e,bitbucket:o},n={"ssh.github.com":"github","altssh.gitlab.com":"gitlab","altssh.bitbucket.org":"bitbucket"};function ZF(r){if(r=xYe(r),Co(r))return"github";let t=Qxt(r),i=n[t];if(i)return i;if(t===e)return"gitlab";if(t===o)return"bitbucket";return"other"}function p5t(r){let t=r.trim();if(cie(t)||Q4(t)||die(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function Der(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t&&!Q4(r)?{user:t[1],host:t[2],path:t[3]}:null}
export{xYe,sFa,ZF,p5t,Der};
