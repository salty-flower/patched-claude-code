// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{IXn}from"./chunk-278j353c.js";import{a}from"./chunk-k4g6y57j.js";import{A9}from"./chunk-jn6attna.js";function _r(){return a.CLAUDE_CODE_REMOTE===!0&&a.CLAUDE_CODE_ENVIRONMENT_KIND===void 0}function Ox(){return a.CLAUDE_CODE_REMOTE===!0&&a.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"}function h7(){return _r()||Ox()}function FHo(){return Ox()&&a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE==="self_hosted"}function aWs(e,o){return!(e&&FHo()&&Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)&&!a.CLAUDE_CODE_DISABLE_WORKING_SYNC)?"not_admitted":o===IXn?"admitted":"moved_directory"}function Hx(){return a.CLAUDE_CODE_ENVIRONMENT_KIND==="bridge"}function m0e(){return Hx()&&!A9()}function S4n(e){return e.hostedWorker||Hx()&&e.transportPersists!==!1}
export{_r,Ox,h7,FHo,aWs,Hx,m0e,S4n};
