// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.318
import{F}from"./chunk-ecyypctx.js";import{W}from"./chunk-8915xd28.js";class e{binding=void 0;currentToolUseContext=void 0;currentOnProgress=void 0;callsInFlight=0;unregisterLockCleanup=void 0;activeThisTurn=!1;runLoopPump=void 0;runLoopPumpRetainCount=0;escHotkeyRegistered=!1;frozenCoordinateMode=void 0;hostAdapter=void 0;swiftModule=void 0;inputModule=void 0;reset(){if(this.unregisterLockCleanup!==void 0||this.escHotkeyRegistered||this.runLoopPump!==void 0)throw Error("ComputerUseSession.reset() called while the lock cleanup, Esc hotkey, or run-loop pump is still registered");this.binding=void 0,this.currentToolUseContext=void 0,this.currentOnProgress=void 0,this.callsInFlight=0,this.activeThisTurn=!1,this.runLoopPumpRetainCount=0,this.frozenCoordinateMode=void 0,this.hostAdapter=void 0,this.swiftModule=void 0,this.inputModule=void 0}}var n=new W(()=>new e);function FS(){return n.of(F().host)}
export{FS};
