// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{Si}from"./chunk-qb1h8t4n.js";var n=30000;function UVt(e){Si.pendingSurveyFeedbackSource=e}function Mxn(){let e=Si.pendingSurveyFeedbackSource;return e!==null&&Date.now()-e.setAt<=n}function Oxn(){let e=Si.pendingSurveyFeedbackSource;if(Si.pendingSurveyFeedbackSource=null,!e||Date.now()-e.setAt>n)return null;return e}
export{UVt,Mxn,Oxn};
