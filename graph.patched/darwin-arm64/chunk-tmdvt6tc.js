// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{oDe}from"./chunk-vtnrdghy.js";import{qOn,vyr,KOn,YOn}from"./chunk-nbk5sasn.js";import{jYt,Yso,Xso,v6e}from"./chunk-x801ch23.js";var a=[Xso,jYt];function oRe(e){if(e===null)return{tagsRead:!1,rcChild:!1,projectThreadChild:!1,attended:!1};let t=!1;t=e.includes("hearth-rc-child");let r=e.includes(Yso);return{tagsRead:!0,rcChild:r,projectThreadChild:t,attended:e.some((o)=>a.includes(o))&&!r&&!e.includes(v6e)}}function v2t(e){if(qOn()||KOn())return!0;return e==="spawn"&&YOn()}function C2t(e){let t=e.roles.rcChild&&!e.modePinned&&qOn(),r=t&&vyr()&&oDe(e.settings()),o=e.roles.attended,l=!1;o=o||e.roles.projectThreadChild,l=e.roles.projectThreadChild&&YOn();let n=o&&KOn();return{autoDefault:t,autoOverSettings:r,artifact:n,machineSettings:l}}
export{oRe,v2t,C2t};
