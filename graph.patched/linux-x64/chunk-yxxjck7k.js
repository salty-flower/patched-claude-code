// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{b}from"./chunk-t5df5mky.js";import{RW}from"./chunk-cxhjnr5a.js";var d={},I4n=RW("whiteboardTelemetry",d);function P4n(i,r,e,n){b("whiteboard_publish",{seeded:n&&e.elCount>0,el_count:e.elCount,is_first_publish:n});let t;if(i.set((o)=>{if(t=o[r],t===void 0)return{...o,[r]:e.pingCount};if(e.pingCount>t)return{...o,[r]:e.pingCount};return o}),t!==void 0&&e.pingCount>t)b("whiteboard_turn",{ping_count:e.pingCount,el_count:e.elCount})}
export{I4n,P4n};
