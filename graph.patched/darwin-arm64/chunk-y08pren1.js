// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{p}from"./chunk-hz0a4zf6.js";import{ce}from"./chunk-gcyvvtkw.js";import{t}from"./chunk-b5feae42.js";import{a}from"./chunk-70qqbqq4.js";import{Yd}from"./chunk-pf8p4bsg.js";import{gat}from"./chunk-5g70wphz.js";import{An}from"./chunk-2r0ph8pf.js";import{RF,me}from"./chunk-48by85wp.js";import{pDe}from"./chunk-zyvek18h.js";import{kA}from"./chunk-y72kn7rz.js";function Q8e(){if(a.NODE_EXTRA_CA_CERTS)return;let o=s();if(o)process.env.NODE_EXTRA_CA_CERTS=o,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`)}function s(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!Yd()&&gat("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}if(RF()||kA())return;let o=ce(),e=pDe(o?.env,"globalConfig"),i=An("userSettings")?me("userSettings"):void 0,n=pDe(i?.env,"userSettings");t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${n?Object.keys(n).join(","):"none"}`);let r=n?.NODE_EXTRA_CA_CERTS||e?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(o){t(`CA certs: Config fallback failed: ${o}`,{level:"error"}),p("ca_certs_load","config_read_failed");return}}
export{Q8e};
