// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{ai,AC}from"./chunk-jf4xjz28.js";import{Xu}from"./chunk-zjcj7ams.js";import{Xn}from"./chunk-pr2cfg7g.js";import{txe}from"./chunk-87sgwxnv.js";import{D2n}from"./chunk-rnpchjq3.js";class r{reader=void 0;register(e){this.reader=e}read(){return this.reader?.()??!1}}var o=new r;function Wso(e){o.register(e)}function mYe(){let e=AC("allow_plugin_skill_search");if(e==="org_denied"||e==="latched"||e==="unregistered"||e!==null&&ai("hipaa"))return!1;if(txe())return!0;return Xu()&&Xn()&&o.read()}function zci(e){if(!D2n.includes(e))return!0;return mYe()}
export{Wso,mYe,zci};
