// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{x5,No,Tse}from"./chunk-3kqdqvsp.js";var n="gitlab.com",i="bitbucket.org";function P1(r){if(No(r))return"github";let t=x5(r);while(t.startsWith("www."))t=t.slice(4);if(t===n)return"gitlab";if(t===i)return"bitbucket";return"other"}function Ecr(r){switch(P1(r)){case"gitlab":return n;case"bitbucket":return i;default:return null}}function uRt(r){let t=r.trim();if(Tse(t))return null;if(t.includes("://"))try{return new URL(t).hostname||null}catch{return null}return/^(?:[^@:/]+@)?([^:/]+):/.exec(t)?.[1]??null}function fHn(r){let t=/^([^@:/[\]]+)@([^@:/[\]]+):(.*)$/s.exec(r);return t?{user:t[1],host:t[2],path:t[3]}:null}
export{P1,Ecr,uRt,fHn};
