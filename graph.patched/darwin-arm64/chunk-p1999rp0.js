// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.310
import{p}from"./chunk-wn8xtaqg.js";import{i}from"./chunk-9a41hw1t.js";import{t}from"./chunk-d7b0m8qy.js";import{Nc}from"./chunk-we9anmwe.js";import{Fu,cot}from"./chunk-qnvapa9t.js";import{ue}from"./chunk-27xjmczp.js";import{Qt}from"./chunk-t4r22my8.js";import{EI,fe}from"./chunk-32v5ghb4.js";import{dZn}from"./chunk-58dq13zd.js";import{sd}from"./chunk-t0kv6pst.js";function bct(){if(i.NODE_EXTRA_CA_CERTS)return;let o=f();if(o)process.env.NODE_EXTRA_CA_CERTS=o,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`)}function f(){try{if(i.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!Nc()&&cot("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}if(Fu())return;if(EI()||sd())return;let o=ue(),e=dZn(o?.env,"globalConfig"),s=Qt("userSettings")?fe("userSettings"):void 0,n=dZn(s?.env,"userSettings");t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${n?Object.keys(n).join(","):"none"}`);let r=n?.NODE_EXTRA_CA_CERTS||e?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(o){t(`CA certs: Config fallback failed: ${o}`,{level:"error"}),p("ca_certs_load","config_read_failed");return}}
export{bct};
