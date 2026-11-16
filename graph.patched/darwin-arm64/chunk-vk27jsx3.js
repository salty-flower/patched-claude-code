// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{it,Ul,Rn}from"./chunk-m8nhymg4.js";import{Ss}from"./chunk-tbvds061.js";import{Dt,hn,Kn,Ev,Xt}from"./chunk-e44qnbvj.js";import{NT,AA}from"./chunk-wqb2b4v0.js";import{fgr}from"./chunk-jyt4z0s2.js";import{randomUUID as t}from"crypto";var o="You can continue now. Continue the task you were working on when the usage limit was reached; do not repeat work that is already complete.";function jbe(){return Dt()&&hn()?.billingType!=="usage_based"&&Ss()&&Ul()&&!Rn()&&!Xt()}function Omt(e){return jbe()&&NT(e)&&e.rateLimitType==="five_hour"}var i=["five_hour","seven_day","seven_day_overage_included","seven_day_opus","seven_day_sonnet"];function o0n(e){return jbe()&&NT(e)&&e.rateLimitType!==void 0&&i.includes(e.rateLimitType)}function jHe(){return fgr(Kn(),Ev())}function zDt(){AA({agentId:it(),mode:"prompt",priority:"later",value:o,uuid:t(),origin:{kind:"auto-continuation"},isMeta:!0,skipSlashCommands:!0})}
export{jbe,Omt,o0n,jHe,zDt};
