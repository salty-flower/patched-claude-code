// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.304
import{p}from"./chunk-53e7d9dh.js";import{a}from"./chunk-h422gpw8.js";import{t}from"./chunk-tdxkq523.js";import{Lu}from"./chunk-pvfq0951.js";import{ku,wZe}from"./chunk-gzssw8ss.js";import{ue}from"./chunk-bvn0epzr.js";import{tn}from"./chunk-58pv6r0f.js";import{cP,me}from"./chunk-qwytg6a7.js";import{e5n}from"./chunk-p1erqc0j.js";import{wl}from"./chunk-esjx5d0h.js";function bst(){if(a.NODE_EXTRA_CA_CERTS)return;let o=s();if(o)process.env.NODE_EXTRA_CA_CERTS=o,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`)}function s(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!Lu()&&wZe("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}if(ku())return;if(cP()||wl())return;let o=ue(),e=e5n(o?.env,"globalConfig"),i=tn("userSettings")?me("userSettings"):void 0,n=e5n(i?.env,"userSettings");t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${n?Object.keys(n).join(","):"none"}`);let r=n?.NODE_EXTRA_CA_CERTS||e?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(o){t(`CA certs: Config fallback failed: ${o}`,{level:"error"}),p("ca_certs_load","config_read_failed");return}}
export{bst};
