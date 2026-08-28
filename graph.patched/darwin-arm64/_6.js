// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.246
import{D$b as g,Lvc as u,T$b as l,puc as _}from"./_668.js";import{pFc as C,uGc as m}from"./_701.js";import{YGc as E,aHc as d}from"./_705.js";import{iNc as f,qNc as p}from"./_710.js";import{$$c as A,V$c as s}from"./_796.js";import{Aad as c,xad as i}from"./_798.js";import{tfd as n,yfd as a}from"./_806.js";A();u();a();l();c();p();d();m();function y(){if(i.NODE_EXTRA_CA_CERTS)return;let e=R();if(e)process.env.NODE_EXTRA_CA_CERTS=e,n(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${e}`)}function R(){try{if(i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!g()&&f("NODE_EXTRA_CA_CERTS")){n("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}let t=_()?.env,o=(E("userSettings")?C("userSettings"):void 0)?.env;n(`CA certs: Config fallback - globalEnv keys: ${t?Object.keys(t).join(","):"none"}, settingsEnv keys: ${o?Object.keys(o).join(","):"none"}`);let r=o?.NODE_EXTRA_CA_CERTS||t?.NODE_EXTRA_CA_CERTS;if(r)n(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(e){n(`CA certs: Config fallback failed: ${e}`,{level:"error"}),s("ca_certs_load","config_read_failed");return}}
export{y as ga};
