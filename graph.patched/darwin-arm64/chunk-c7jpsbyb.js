// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{Im,BB,z7,vEt,XV,kje,Sf}from"./chunk-h3bc7dkc.js";function s(e,t){let c=Im(),o=Sf(e),n=XV(o,t),a=kje(o,t),r=!(BB()&&!z7(o,t));return{enabled:c,effectiveWindow:n,threshold:a,enforced:r,source:vEt(o,t)}}function Q1r(e){let t;return{notify(c,o){let n=s(c,o);if(t!==void 0&&JVn(t,n))return;t=n,e(n)},reset(){t=void 0}}}function JVn(e,t){return e.enabled===t.enabled&&e.effectiveWindow===t.effectiveWindow&&e.threshold===t.threshold&&e.enforced===t.enforced&&e.source===t.source}
export{Q1r,JVn};
