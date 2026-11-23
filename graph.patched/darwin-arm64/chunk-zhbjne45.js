// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-wryttfdq.js";import{t}from"./chunk-bdfv2ky4.js";import{i}from"./chunk-428zme0n.js";import{ZCs,Qne,iyt,P_}from"./chunk-wqb2b4v0.js";import{Hts}from"./chunk-wdz7hbv2.js";async function Dts(r,o){if(Hts()||i.CLAUDE_CODE_SYNC_PLUGIN_INSTALL)return t("plugin worktree hooks not registered ahead of the worktree: startup lists no plugins here"),"skipped";try{if(await iyt(r))Qne(),P_("registerWorktreeHooksAhead: seed marketplaces registered")}catch(e){t(`seed marketplaces not registered ahead of the worktree: ${d(e)}`,{level:"warn"})}try{return await ZCs(r,o),"registered"}catch(e){return t(`plugin worktree hooks not registered ahead of the worktree (a plugin's WorktreeCreate or WorktreeRemove hook will not run): ${d(e)}`,{level:"warn"}),"failed"}}
export{Dts};
