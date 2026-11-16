// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{d}from"./chunk-5p3mkpyy.js";import{t}from"./chunk-ray9kegj.js";import{i}from"./chunk-5g5ea6r9.js";import{hAs,jne,Q_t,P_}from"./chunk-zaxe68t4.js";import{tts}from"./chunk-m26q1353.js";async function qes(r,o){if(tts()||i.CLAUDE_CODE_SYNC_PLUGIN_INSTALL)return t("plugin worktree hooks not registered ahead of the worktree: startup lists no plugins here"),"skipped";try{if(await Q_t(r))jne(),P_("registerWorktreeHooksAhead: seed marketplaces registered")}catch(e){t(`seed marketplaces not registered ahead of the worktree: ${d(e)}`,{level:"warn"})}try{return await hAs(r,o),"registered"}catch(e){return t(`plugin worktree hooks not registered ahead of the worktree (a plugin's WorktreeCreate or WorktreeRemove hook will not run): ${d(e)}`,{level:"warn"}),"failed"}}
export{qes};
