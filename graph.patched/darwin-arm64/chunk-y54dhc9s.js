// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{z,F}from"./chunk-vd0a9d2s.js";import{AsyncLocalStorage as r}from"async_hooks";class Cmr{#e=!1;#o=!1;#r=!1;#t=!1;#s=!1;#n;get backgroundTasksDisabled(){return this.#e}get backgroundAgentLaunchDisabled(){return this.#o}get remoteAgentIsolationDisabled(){return this.#r}get unsandboxedCommandsDisabled(){return this.#t}get backgroundDeadlineDisabled(){return this.#s}get backgroundLaunchRule(){return this.#n}disableBackgroundTasks(){this.#e=!0}disableBackgroundAgentLaunch(){this.#o=!0}disableRemoteAgentIsolation(){this.#r=!0}installBackgroundLaunchRule(e){if(!this.#e)throw Error("A background launch rule needs background tasks disabled first");if(typeof e.parameterDescription!=="string")throw Error("A background launch rule needs parameterDescription to be a string");if(this.#n!==void 0)throw Error("A background launch rule is already installed");this.#n=e}disableBackgroundDeadline(){this.#s=!0}disableUnsandboxedCommands(){this.#t=!0}}var t=new z(()=>new Cmr);function ok(){return n.getStore()??t.of(F().host)}var n=new r;function _ds(e,o){return n.run(e,o)}
export{Cmr,ok,_ds};
