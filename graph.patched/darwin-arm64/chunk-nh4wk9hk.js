// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{i}from"./chunk-n1cpnz94.js";import{Te,ci,Qz,Bc,Jd}from"./chunk-39j7k06t.js";import{Yc,II}from"./chunk-axsjfnwn.js";import{g6e}from"./chunk-pjy7mdmq.js";import{ZCe}from"./chunk-8n895qgz.js";function ipt(r=Te()){if(r!=="firstParty"||!ci())return!1;if(Qz())return!0;return s()}function XMi(r=Te()){if(r!=="firstParty"||!Bc())return!1;return s()}function mZ(r=Te()){if(r!=="firstParty"||!Bc())return!1;if(i.ANTHROPIC_BASE_URL!==void 0||!Yc()||!II())return!0;let t=ZCe(),e=t===void 0?g6e()??null:t;return e===null||Jd(e)}function s(){if(i.ANTHROPIC_BASE_URL!==void 0||!II())return!0;let r=ZCe();return r===null||r!==void 0&&Jd(r)}function mdo(){if(i.ANTHROPIC_BASE_URL!==void 0)return i.ANTHROPIC_BASE_URL;try{if(II()){let r=ZCe();if(typeof r==="string")return r}}catch{}return"https://api.anthropic.com"}
export{ipt,XMi,mZ,mdo};
