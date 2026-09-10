// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.267
import{g}from"./chunk-a25t2bvk.js";import{ne}from"./chunk-e02s7cks.js";import{t}from"./chunk-wbbe5mtc.js";import{a}from"./chunk-dv6tepz3.js";import{ld}from"./chunk-jngjxeh6.js";import{$r,U0e}from"./chunk-ysx7ez10.js";import{ye}from"./chunk-yyyfew8j.js";function Olt(){if(a.NODE_EXTRA_CA_CERTS)return;let e=i();if(e)process.env.NODE_EXTRA_CA_CERTS=e,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${e}`)}function i(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!ld()&&U0e("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}let n=ne()?.env,o=($r("userSettings")?ye("userSettings"):void 0)?.env;t(`CA certs: Config fallback - globalEnv keys: ${n?Object.keys(n).join(","):"none"}, settingsEnv keys: ${o?Object.keys(o).join(","):"none"}`);let r=o?.NODE_EXTRA_CA_CERTS||n?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(e){t(`CA certs: Config fallback failed: ${e}`,{level:"error"}),g("ca_certs_load","config_read_failed");return}}
export{Olt};
