// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{p}from"./chunk-n1esck2w.js";import{a}from"./chunk-k4g6y57j.js";import{t}from"./chunk-bnfhb7sj.js";import{Eu}from"./chunk-jn6attna.js";import{qg,uJe}from"./chunk-d9vq4daa.js";import{ue}from"./chunk-1901fdh6.js";import{ln}from"./chunk-jybqja29.js";import{C1,me}from"./chunk-61p68esv.js";import{TBe}from"./chunk-c2nbjjfe.js";import{Nd}from"./chunk-760c7t99.js";function irt(){if(a.NODE_EXTRA_CA_CERTS)return;let o=s();if(o)process.env.NODE_EXTRA_CA_CERTS=o,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${o}`)}function s(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!Eu()&&uJe("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}if(qg())return;if(C1()||Nd())return;let o=ue(),e=TBe(o?.env,"globalConfig"),i=ln("userSettings")?me("userSettings"):void 0,n=TBe(i?.env,"userSettings");t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${n?Object.keys(n).join(","):"none"}`);let r=n?.NODE_EXTRA_CA_CERTS||e?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(o){t(`CA certs: Config fallback failed: ${o}`,{level:"error"}),p("ca_certs_load","config_read_failed");return}}
export{irt};
