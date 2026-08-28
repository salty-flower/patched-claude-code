// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Fb as p}from"./_17.js";import{Jwc as l,Nwc as I}from"./_672.js";import{pxc as n,qxc as c}from"./_674.js";import"./_675.js";import{Tzc as a,Uzc as m,cAc as k}from"./_687.js";import"./_748.js";import"./_749.js";import"./_750.js";import"./_751.js";import"./_752.js";import"./_754.js";import"./_755.js";import"./_756.js";import"./_775.js";import"./_777.js";import"./_778.js";import"./_779.js";import"./_780.js";import{Tbd as d}from"./_811.js";import{ncd as s}from"./_812.js";import"./_813.js";import"./_814.js";import"./_815.js";import"./_816.js";import"./_817.js";import"./_818.js";import"./_819.js";import{jhd as r,ohd as _}from"./_820.js";import"./_821.js";import{Ehd as e,Jhd as S}from"./_822.js";import"./_823.js";import"./_824.js";import"./_825.js";import"./_826.js";import"./_827.js";import"./_828.js";import"./_829.js";import"./_830.js";import{Mud as i,zvd as g}from"./_831.js";import"./_832.js";import"./_833.js";import"./_834.js";import"./_835.js";import"./_836.js";import"./_837.js";c();k();S();_();d();g();I();async function A({sessionId:E,sdkUrl:f}){try{let t=s.CLAUDE_SESSION_INGRESS_TOKEN_FILE??a;if(!(await l(t,m))?.trim()){r("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await p({sessionId:E,apiBaseUrl:n(new URL(f)).origin,tokenFilePath:t,binaryResolution:"search",log:r});if(o)e(()=>o.stop())}catch(t){r(`[vitals] not started: ${i(t)}`)}}export{A as startHostedWorkerVitalsEmitter};
