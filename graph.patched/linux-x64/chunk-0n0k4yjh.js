// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{Be}from"./chunk-7s3c5qqq.js";import{J}from"./chunk-30zk17wm.js";import{cMn}from"./chunk-xm1ykqsj.js";function t(){let o=new Map;return{known(e){let n=Math.max(o.get(e)??0,1);return o.set(e,n),n},next(e){let n=(o.get(e)??0)+1;return o.set(e,n),n}}}function lXt(){return{consentPin:cMn(),generations:t(),pointedToCommand:{shown:!1},setAsideSessions:new Set,decided:Be()}}var snt=new J(lXt);
export{lXt,snt};
