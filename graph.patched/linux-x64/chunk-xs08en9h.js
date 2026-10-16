// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{f}from"./chunk-rhe3yjtx.js";import{a}from"./chunk-xwn0mfnc.js";import{t}from"./chunk-cwsn6mdf.js";import{vu}from"./chunk-en4g449d.js";import{Kg,oQe}from"./chunk-9155m2kg.js";import{ue}from"./chunk-k16gymf7.js";import{ln}from"./chunk-9t95885m.js";import{hB,me}from"./chunk-a502zyxr.js";import{y1e}from"./chunk-7dc4sv65.js";import{Nd}from"./chunk-8dm571cw.js";function Jnt(){if(a.NODE_EXTRA_CA_CERTS)return;let o=s();if(o)process.env.NODE_EXTRA_CA_CERTS=o,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`)}function s(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!vu()&&oQe("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}if(Kg())return;if(hB()||Nd())return;let o=ue(),e=y1e(o?.env,"globalConfig"),i=ln("userSettings")?me("userSettings"):void 0,n=y1e(i?.env,"userSettings");t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${n?Object.keys(n).join(","):"none"}`);let r=n?.NODE_EXTRA_CA_CERTS||e?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(o){t(`CA certs: Config fallback failed: ${o}`,{level:"error"}),f("ca_certs_load","config_read_failed");return}}
export{Jnt};
