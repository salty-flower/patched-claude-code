// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{pi}from"./chunk-ddzmwptt.js";var n=30000;function qYt(e){pi.pendingSurveyFeedbackSource=e}function iMn(){let e=pi.pendingSurveyFeedbackSource;return e!==null&&Date.now()-e.setAt<=n}function sMn(){let e=pi.pendingSurveyFeedbackSource;if(pi.pendingSurveyFeedbackSource=null,!e||Date.now()-e.setAt>n)return null;return e}
export{qYt,iMn,sMn};
