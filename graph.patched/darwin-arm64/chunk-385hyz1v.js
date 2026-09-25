// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.281
import{p}from"./chunk-ymkzysdh.js";import{le}from"./chunk-twxt3h9y.js";import{t}from"./chunk-wvb0gwjm.js";import{a}from"./chunk-3a4khaz5.js";import{$c}from"./chunk-x4gz28fm.js";import{Zqe}from"./chunk-ekshy3qa.js";import{cae,ye}from"./chunk-je0c1kfp.js";import{pr}from"./chunk-aneqvevx.js";function EGt(){if(a.NODE_EXTRA_CA_CERTS)return;let n=i();if(n)process.env.NODE_EXTRA_CA_CERTS=n,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${n}`)}function i(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!$c()&&Zqe("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}if(cae())return;let e=le()?.env,o=(pr("userSettings")?ye("userSettings"):void 0)?.env;t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${o?Object.keys(o).join(","):"none"}`);let r=o?.NODE_EXTRA_CA_CERTS||e?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(n){t(`CA certs: Config fallback failed: ${n}`,{level:"error"}),p("ca_certs_load","config_read_failed");return}}
export{EGt};
