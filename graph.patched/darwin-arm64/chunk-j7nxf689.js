// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{ust}from"./chunk-m9vc4x6e.js";class MBt extends TransformStream{constructor({onError:t,onRetry:a,onComment:o}={}){let s;super({start(e){s=ust({onEvent:(r)=>{e.enqueue(r)},onError(r){t==="terminate"?e.error(r):typeof t=="function"&&t(r)},onRetry:a,onComment:o})},transform(e){s.feed(e)}})}}
export{MBt};
