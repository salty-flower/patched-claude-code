// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.250
import{y}from"./chunk-v1ap59a1.js";import{oe}from"./chunk-ns0ekkj0.js";import{n}from"./chunk-akz0cj0f.js";import{a}from"./chunk-g0kfvhx3.js";import{_d}from"./chunk-dakyjptz.js";import{YSe}from"./chunk-a891q37t.js";import{be}from"./chunk-bcez0qfh.js";import{yo}from"./chunk-8v512hc9.js";function mXe(){if(a.NODE_EXTRA_CA_CERTS)return;let e=i();if(e)process.env.NODE_EXTRA_CA_CERTS=e,n(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${e}`)}function i(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!_d()&&YSe("NODE_EXTRA_CA_CERTS")){n("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}let t=oe()?.env,o=(yo("userSettings")?be("userSettings"):void 0)?.env;n(`CA certs: Config fallback - globalEnv keys: ${t?Object.keys(t).join(","):"none"}, settingsEnv keys: ${o?Object.keys(o).join(","):"none"}`);let r=o?.NODE_EXTRA_CA_CERTS||t?.NODE_EXTRA_CA_CERTS;if(r)n(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(e){n(`CA certs: Config fallback failed: ${e}`,{level:"error"}),y("ca_certs_load","config_read_failed");return}}
export{mXe};
