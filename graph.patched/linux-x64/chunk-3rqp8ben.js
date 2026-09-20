// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.273
import{G,gd}from"./chunk-txfrkyzp.js";import{$R}from"./chunk-ggjhe3cp.js";import{vt,P}from"./chunk-30p0nwys.js";function knt(){return $R("autoContinueAtUsageLimit")[0]}function $xt(e){return knt()??e==="absent"}var i="tengu_marble_heron";function LJt(){let e=n();return o(e)?e:{}}function Nle(){let e=n();return r(o(e)?e.enabled:e)}function Ant(){return gd()&&!vt()}function Ihr(){return Ant()&&Nle()}function Fxt(){return r(LJt().autoArm)}function n(){return P(i,{})}function o(e){return typeof e==="object"&&e!==null&&!Array.isArray(e)}function r(e){if(e===void 0)return!0;if(typeof e==="string"){let t=e.trim().toLowerCase();return t!==""&&t!=="false"&&t!=="0"}return Boolean(e)}var Tnt=86400000;function C1(e){return e.status==="rejected"&&e.resetsAt!==void 0&&Number.isFinite(e.resetsAt)&&e.isUsingOverage!==!0&&e.overageInUse!==!0}class u{#e=null;get provided(){return this.#e!==null}provide(e){this.#e=e}hasIntent(){return this.#e?.()??!1}}var Uxt=new G(()=>new u);
export{knt,$xt,LJt,Nle,Ant,Ihr,Fxt,Tnt,C1,Uxt};
