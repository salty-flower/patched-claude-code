// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{N3e,Wbe}from"./chunk-ersar6wn.js";import{$se,E8r,v8r}from"./chunk-zd2z0f00.js";function s(){return E8r({envVar:"CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",wellKnownPath:$se,readPath:process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE??$se,label:"token",fileLabel:"session ingress token",getCached:N3e,setCached:Wbe,skipInReviewOrigin:!0})}async function bui(e){if(process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN)return;await v8r({envVar:"CLAUDE_CODE_WEBSOCKET_AUTH_FILE_DESCRIPTOR",wellKnownPath:$se,readPath:process.env.CLAUDE_SESSION_INGRESS_TOKEN_FILE??$se,label:"token",fileLabel:"session ingress token",getCached:N3e,setCached:Wbe,credentials:e,skipInReviewOrigin:!0})}function od(){let e=process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN;if(e)return e;return s()}function TFe(){return od()!==null}function dW(){let e=od();if(!e)return{};if(e.startsWith("sk-ant-sid")){let n={Cookie:`sessionKey=${e}`},r=process.env.CLAUDE_CODE_ORGANIZATION_UUID;if(r)n["X-Organization-Uuid"]=r;return n}return uxe(e)}function uxe(e){return e?{Authorization:`Bearer ${e}`}:{}}function Yar(e){process.env.CLAUDE_CODE_SESSION_ACCESS_TOKEN=e}
export{bui,od,TFe,dW,uxe,Yar};
