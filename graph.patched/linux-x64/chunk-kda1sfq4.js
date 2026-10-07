// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{p}from"./chunk-tzahwj8w.js";import{ce}from"./chunk-m0sj7y8g.js";import{t}from"./chunk-gvn18sr5.js";import{a}from"./chunk-869zfth6.js";import{Nd}from"./chunk-zyrx67ap.js";import{Zrt}from"./chunk-p72qafcy.js";import{An}from"./chunk-06vaaw45.js";import{AN,me}from"./chunk-2c0pkjse.js";import{qMe}from"./chunk-b42cdk1y.js";import{VT}from"./chunk-0qbnhrce.js";function q6e(){if(a.NODE_EXTRA_CA_CERTS)return;let o=s();if(o)process.env.NODE_EXTRA_CA_CERTS=o,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`)}function s(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!Nd()&&Zrt("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}if(AN()||VT())return;let o=ce(),e=qMe(o?.env,"globalConfig"),i=An("userSettings")?me("userSettings"):void 0,n=qMe(i?.env,"userSettings");t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${n?Object.keys(n).join(","):"none"}`);let r=n?.NODE_EXTRA_CA_CERTS||e?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(o){t(`CA certs: Config fallback failed: ${o}`,{level:"error"}),p("ca_certs_load","config_read_failed");return}}
export{q6e};
