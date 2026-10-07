// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import{p}from"./chunk-e3gw32ew.js";import{ce}from"./chunk-s46qgfx7.js";import{t}from"./chunk-f8eqwxpt.js";import{a}from"./chunk-j77txbjn.js";import{Nd}from"./chunk-mcq8tx7b.js";import{Zrt}from"./chunk-nqb0d8cm.js";import{An}from"./chunk-9s9xt61j.js";import{HN,me}from"./chunk-861a7whf.js";import{tHe}from"./chunk-y847j1h7.js";import{Jk}from"./chunk-292ssc6n.js";function e5e(){if(a.NODE_EXTRA_CA_CERTS)return;let o=s();if(o)process.env.NODE_EXTRA_CA_CERTS=o,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`)}function s(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!Nd()&&Zrt("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}if(HN()||Jk())return;let o=ce(),e=tHe(o?.env,"globalConfig"),i=An("userSettings")?me("userSettings"):void 0,n=tHe(i?.env,"userSettings");t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${n?Object.keys(n).join(","):"none"}`);let r=n?.NODE_EXTRA_CA_CERTS||e?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(o){t(`CA certs: Config fallback failed: ${o}`,{level:"error"}),p("ca_certs_load","config_read_failed");return}}
export{e5e};
