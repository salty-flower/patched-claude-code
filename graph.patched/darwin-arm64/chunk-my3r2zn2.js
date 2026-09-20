// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{Tve}from"./chunk-qqvjsfs3.js";import{Jun,b4n,Qun,Zun}from"./chunk-1dcymsv2.js";import{IIr}from"./chunk-fk7p3dw4.js";function KRe(e){let t=!1;return t=e.includes("hearth-rc-child"),{rcChild:e.includes(IIr),projectThreadChild:t}}function Yvt(e){if(Jun())return!0;return Qun()||e==="spawn"&&Zun()}function Xvt(e){let t=e.roles.rcChild&&!e.modePinned&&Jun(),l=t&&b4n()&&Tve(e.settings()),o=!1,i=!1;return o=e.roles.projectThreadChild&&Qun(),i=e.roles.projectThreadChild&&Zun(),{autoDefault:t,autoOverSettings:l,artifact:o,machineSettings:i}}
export{KRe,Yvt,Xvt};
