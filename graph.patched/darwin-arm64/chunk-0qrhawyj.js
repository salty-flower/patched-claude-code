// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{Ye}from"./chunk-nre716m4.js";class G5t extends Ye{why;constructor(e){super(`serving client ${e} while the request was pending`);this.why=e;this.name="ServingInstanceGoneError"}}class z5t extends Ye{status;constructor(e){super("request event dropped after an upload attempt that may have landed; delivery unknown");this.status=e;this.name="RequestDeliveryUnknownError"}}class Nro extends Ye{constructor(){super("request withdrawn before it left this process; not delivered");this.name="RequestWithdrawnUnsentError"}}class V5t extends Ye{status;constructor(e){super("request event refused by the session service; not delivered");this.status=e;this.name="RequestNotDeliveredError"}}
export{G5t,z5t,Nro,V5t};
