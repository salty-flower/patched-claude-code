// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{f}from"./chunk-yzndvntb.js";import{a}from"./chunk-cd1a8ced.js";import{t}from"./chunk-n5v91jc3.js";import{Lu}from"./chunk-zjcj7ams.js";import{Eu,mZe}from"./chunk-ww4tybgt.js";import{ue}from"./chunk-7p6jp6kj.js";import{tn}from"./chunk-4v4w26w4.js";import{iP,me}from"./chunk-merbp8kx.js";import{N6n}from"./chunk-qxd82yyp.js";import{Sl}from"./chunk-3pcxq77r.js";function hst(){if(a.NODE_EXTRA_CA_CERTS)return;let o=s();if(o)process.env.NODE_EXTRA_CA_CERTS=o,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`)}function s(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!Lu()&&mZe("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}if(Eu())return;if(iP()||Sl())return;let o=ue(),e=N6n(o?.env,"globalConfig"),i=tn("userSettings")?me("userSettings"):void 0,n=N6n(i?.env,"userSettings");t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${n?Object.keys(n).join(","):"none"}`);let r=n?.NODE_EXTRA_CA_CERTS||e?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(o){t(`CA certs: Config fallback failed: ${o}`,{level:"error"}),f("ca_certs_load","config_read_failed");return}}
export{hst};
