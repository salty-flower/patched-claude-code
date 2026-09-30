// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.285
import{f}from"./chunk-sc069zjc.js";import{ce}from"./chunk-er6f56rj.js";import{t}from"./chunk-3wz0srxw.js";import{a}from"./chunk-1fpwxv0g.js";import{Wc}from"./chunk-n8h76tq4.js";import{jYe}from"./chunk-zpb414p7.js";import{Kn}from"./chunk-vratfdfe.js";import{f2,ge}from"./chunk-e561d543.js";function HYt(){if(a.NODE_EXTRA_CA_CERTS)return;let n=i();if(n)process.env.NODE_EXTRA_CA_CERTS=n,t(`CA certs: Applied NODE_EXTRA_CA_CERTS from config to process.env: ${n}`)}function i(){try{if(a.CLAUDE_CODE_PROVIDER_MANAGED_BY_HOST&&!Wc()&&jYe("NODE_EXTRA_CA_CERTS")){t("CA certs: skipping settings-sourced NODE_EXTRA_CA_CERTS under host-managed provider");return}if(f2())return;let e=ce()?.env,o=(Kn("userSettings")?ge("userSettings"):void 0)?.env;t(`CA certs: Config fallback - globalEnv keys: ${e?Object.keys(e).join(","):"none"}, settingsEnv keys: ${o?Object.keys(o).join(","):"none"}`);let r=o?.NODE_EXTRA_CA_CERTS||e?.NODE_EXTRA_CA_CERTS;if(r)t(`CA certs: Found NODE_EXTRA_CA_CERTS in config/settings: ${r}`);return r}catch(n){t(`CA certs: Config fallback failed: ${n}`,{level:"error"}),f("ca_certs_load","config_read_failed");return}}
export{HYt};
