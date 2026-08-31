// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
var O9="propose_skills",yJn="Show the user a review card of proposed skills to save \u2014 render-only, nothing is written",_Jn=`Surface recurring multi-step procedures from this session as skill proposals. Render-only \u2014 calling this shows a review card in the conversation; it does not write any files or create the skill. The user reviews and saves from the card.

Call once with all proposals (max 3). Use it when the user asks to turn a workflow or procedure into a skill, or when the same multi-step procedure has recurred and a skill would clearly save future work. Do not call it for one-off tasks, and do not re-propose skills the user has already seen.`;
export{O9,yJn,_Jn};
