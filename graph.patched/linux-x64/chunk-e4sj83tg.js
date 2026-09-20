// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{yEe}from"./chunk-nc4fc0sr.js";import{xun,WKn,Iun,Pun}from"./chunk-xrxjetby.js";import{XHr}from"./chunk-2g8te4de.js";function FRe(e){let t=!1;return t=e.includes("hearth-rc-child"),{rcChild:e.includes(XHr),projectThreadChild:t}}function DEt(e){if(xun())return!0;return Iun()||e==="spawn"&&Pun()}function LEt(e){let t=e.roles.rcChild&&!e.modePinned&&xun(),l=t&&WKn()&&yEe(e.settings()),o=!1,i=!1;return o=e.roles.projectThreadChild&&Iun(),i=e.roles.projectThreadChild&&Pun(),{autoDefault:t,autoOverSettings:l,artifact:o,machineSettings:i}}
export{FRe,DEt,LEt};
