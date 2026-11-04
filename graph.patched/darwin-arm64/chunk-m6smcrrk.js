// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{Ye}from"./chunk-sktwb66b.js";class Bgn extends Ye{why;constructor(e){super(`serving client ${e} while the request was pending`);this.why=e;this.name="ServingInstanceGoneError"}}class jgn extends Ye{status;constructor(e){super("request event dropped after an upload attempt that may have landed; delivery unknown");this.status=e;this.name="RequestDeliveryUnknownError"}}class U2o extends Ye{constructor(){super("request withdrawn before it left this process; not delivered");this.name="RequestWithdrawnUnsentError"}}class Wgn extends Ye{status;constructor(e){super("request event refused by the session service; not delivered");this.status=e;this.name="RequestNotDeliveredError"}}
export{Bgn,jgn,U2o,Wgn};
