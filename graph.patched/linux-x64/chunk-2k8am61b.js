// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{fe}from"./chunk-c63g0fmv.js";var s=["boot_process","boot_session","boot_load","boot_init","boot_mcp","boot_hydrate","boot_connect","open","attachments","prepare","schemas","normalize","build"],o=["stream","permission","tool","send"],i=["uploads","telemetry"];var a=["rest","after_stream",...s,...o,...i];function r(){}var t=fe({clock:void 0},(e)=>{e.clock=void 0});function Bla(e){t.clock?.setPhase(e)}function jla(e,n){t.clock?.setPhaseWithin(e,n)}function Wla(e,n){t.clock?.endPhaseWithin(e,n)}function gcn(e){return t.clock?.openWindow(e)??r}function l1s(e){return t.clock?.enterSpan(e)??"not_clocked"}function d1s(e){t.clock?.leaveSpan(e)}
export{Bla,jla,Wla,gcn,l1s,d1s};
