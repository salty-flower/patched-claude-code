// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.251
import{J,W}from"./chunk-30zk17wm.js";class e{bridgeBinding=void 0;resolvedHostByToolUseId=new Map;shouldAutoEnable=void 0;wiredThisSession=!1;installUpsellResolution=void 0;installUpsellBypassSuppressionCounted=!1;trackedTabIds=new Set;tabGroupCleanupRegistered=!1;unsubscribeSessionSwitch=void 0;unregisterExitCleanup=void 0;closesInFlight=new Map;lastExecutedTabUrlByScope=new Map;resolvedUrlByToolUseId=new Map;reset(){this.bridgeBinding=void 0,this.resolvedHostByToolUseId=new Map,this.shouldAutoEnable=void 0,this.wiredThisSession=!1,this.installUpsellResolution=void 0,this.installUpsellBypassSuppressionCounted=!1,this.trackedTabIds=new Set,this.tabGroupCleanupRegistered=!1,this.unsubscribeSessionSwitch?.(),this.unsubscribeSessionSwitch=void 0,this.unregisterExitCleanup?.(),this.unregisterExitCleanup=void 0,this.closesInFlight=new Map,this.lastExecutedTabUrlByScope=new Map,this.resolvedUrlByToolUseId=new Map}}var s=new J(()=>new e);function uf(){return s.of(W().host)}
export{uf};
