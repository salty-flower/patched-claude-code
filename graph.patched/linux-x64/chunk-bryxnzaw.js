// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{d}from"./chunk-bkr1h20c.js";import{i}from"./chunk-nayw0pf7.js";import{$ie}from"./chunk-aqh2c7wz.js";import{lf}from"./chunk-r93mxs6w.js";function K6e(){return lf()||$ie()}function Kko(e){switch(e.kind){case"elsewhere":return"elsewhere";case"nowhere":return e.hasOwnSessionRecord?"here_only":"nowhere";case"unknown":return e.why==="not_looked"?"not_looked":"unknown"}}function vtn(e,o){i("tengu_remote_attach_record_lookup",{outcome:d(e),entry_point:d(o)})}
export{K6e,Kko,vtn};
