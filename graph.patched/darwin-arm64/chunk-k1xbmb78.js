// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{Fb as p}from"./_17.js";import{Jwc as l,Nwc as I}from"./_672.js";import{Lxc as n,Mxc as c}from"./_675.js";import"./_676.js";import{EAc as a,FAc as m,PAc as k}from"./_690.js";import"./_763.js";import"./_764.js";import"./_765.js";import"./_766.js";import"./_767.js";import"./_769.js";import"./_770.js";import"./_774.js";import"./_791.js";import"./_793.js";import"./_794.js";import"./_795.js";import"./_796.js";import{bad as d}from"./_797.js";import{xad as s}from"./_798.js";import"./_799.js";import"./_800.js";import"./_801.js";import"./_802.js";import"./_803.js";import"./_804.js";import"./_805.js";import{tfd as r,yfd as _}from"./_806.js";import"./_807.js";import{Ofd as e,Tfd as S}from"./_808.js";import"./_809.js";import"./_810.js";import"./_811.js";import"./_812.js";import"./_813.js";import"./_814.js";import"./_815.js";import"./_825.js";import"./_833.js";import{Nvd as g,_ud as i}from"./_834.js";import"./_835.js";import"./_836.js";import"./_837.js";import"./_838.js";import"./_839.js";c();k();S();_();d();g();I();async function A({sessionId:E,sdkUrl:f}){try{let t=s.CLAUDE_SESSION_INGRESS_TOKEN_FILE??a;if(!(await l(t,m))?.trim()){r("[vitals] no session token file on this worker; guest vitals disabled");return}let o=await p({sessionId:E,apiBaseUrl:n(new URL(f)).origin,tokenFilePath:t,binaryResolution:"search",log:r});if(o)e(()=>o.stop())}catch(t){r(`[vitals] not started: ${i(t)}`)}}export{A as startHostedWorkerVitalsEmitter};
