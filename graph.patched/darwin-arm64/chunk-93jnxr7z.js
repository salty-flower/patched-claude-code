// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import{f}from"./chunk-2hb5361r.js";import{ce}from"./chunk-bk5ct2gw.js";import{t}from"./chunk-gyf58rwf.js";import{a}from"./chunk-yvnhkg35.js";import{ou}from"./chunk-tadwrn0a.js";import{tut}from"./chunk-3cynezh1.js";import{cn}from"./chunk-wtch2p0g.js";import{G$,fe}from"./chunk-x0dc37w9.js";import{sFe}from"./chunk-g135h42d.js";import{iu}from"./chunk-wsz2wsez.js";function gJe(){if(a.NODE_EXTRA_CA_CERTS)return;let o=s();if(o)process.env.NODE_EXTRA_CA_CERTS=o,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`)}function s(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!ou()&&tut("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}if(G$()||iu())return;let o=ce(),e=sFe(o?.env,"globalConfig"),i=cn("userSettings")?fe("userSettings"):void 0,n=sFe(i?.env,"userSettings");t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${n?Object.keys(n).join(","):"none"}`);let r=n?.NODE_EXTRA_CA_CERTS||e?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(o){t(`CA certs: Config fallback failed: ${o}`,{level:"error"}),f("ca_certs_load","config_read_failed");return}}
export{gJe};
