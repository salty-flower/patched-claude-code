// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{mXn}from"./chunk-qeqy4res.js";import{a}from"./chunk-xwn0mfnc.js";import{_3}from"./chunk-en4g449d.js";function yr(){return a.CLAUDE_CODE_REMOTE===!0&&a.CLAUDE_CODE_ENVIRONMENT_KIND===void 0}function xx(){return a.CLAUDE_CODE_REMOTE===!0&&a.CLAUDE_CODE_ENVIRONMENT_KIND==="byoc"}function aJ(){return yr()||xx()}function dHo(){return xx()&&a.CLAUDE_CODE_REMOTE_ENVIRONMENT_TYPE==="self_hosted"}function vjs(e,o){return!(e&&dHo()&&Boolean(a.CLAUDE_CODE_REMOTE_SESSION_ID)&&!a.CLAUDE_CODE_DISABLE_WORKING_SYNC)?"not_admitted":o===mXn?"admitted":"moved_directory"}function Px(){return a.CLAUDE_CODE_ENVIRONMENT_KIND==="bridge"}function aMe(){return Px()&&!_3()}function t6n(e){return e.hostedWorker||Px()&&e.transportPersists!==!1}
export{yr,xx,aJ,dHo,vjs,Px,aMe,t6n};
