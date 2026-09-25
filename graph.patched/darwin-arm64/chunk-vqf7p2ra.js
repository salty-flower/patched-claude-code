// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{b}from"./chunk-wvb0gwjm.js";import{tt}from"./chunk-j370x2tz.js";var Ok=1e6;import{createHash as m}from"crypto";function Kkt(r){return r.configErrorReason==="url_empty"||!r.configError&&"url"in r&&r.url.trim()===""}function U6(r){let{scope:l,pluginSource:k,pluginPath:y,agentSource:s,declaredIn:M,configError:C,configErrorReason:h,expandedFromEnv:E,...f}=r,e=f;if(delete e.tools,delete e.discoveryCache,delete e.cachedInitResponse,delete e.cachedDiscoverResponse,delete e.discoverSupport,delete e.eligible,delete e.ineligibleReason,delete e.enterpriseManaged,e.type==="stdio"||e.type===void 0&&"command"in e)e.type="stdio",e.args=e.args??[];let d=typeof e.url==="string"&&URL.canParse(e.url)?/^([^?#]*\?)([^#]*)(.*)$/s.exec(e.url):null;if(d){let[,c="",o="",t=""]=d;e.url=c+o.split("&").sort((n,i)=>{let a=tt(n,"="),u=tt(i,"=");return a<u?-1:a>u?1:0}).join("&")+t}if(Kkt(r))e.unconfigured=!0;if(s!==void 0)e.agentSource=s;let S=b(e,(c,o)=>{if(o&&typeof o==="object"&&!Array.isArray(o)){let t=o,n={};for(let i of Object.keys(t).sort())n[i]=t[i];return n}return o});return m("sha256").update(S).digest("hex").slice(0,16)}function Sr(r,l){return`${r}-${U6(l)}`}class p{loaderSide=null;register(r){this.loaderSide=r}}var g=new p;function Hdo(r){g.register(r)}function vJt(){let r=g.loaderSide;if(!r)throw Error("MCP skill builders not registered \u2014 loadSkillsDir.ts has not been evaluated yet");return r}
export{Ok,Kkt,U6,Sr,Hdo,vJt};
