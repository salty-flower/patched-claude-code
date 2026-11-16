// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{Le}from"./chunk-732yb76j.js";import{F}from"./chunk-r3adsed5.js";import{W}from"./chunk-z1a5ffdv.js";class n{inFlightSnapshot={tasks:0,queued:0,kinds:[],items:[]};inFlightSnapshotChanged=Le();pendingStructuredResult=void 0;jobRecordSeenIn=void 0;relocatedCwd=void 0;ownStateWriteDepth=0;warnedUnknownDisabledSurface=!1;publishInFlightSnapshot(e){this.inFlightSnapshot=e;try{this.inFlightSnapshotChanged.emit()}catch{}}reset(){this.pendingStructuredResult=void 0,this.jobRecordSeenIn=void 0,this.relocatedCwd=void 0,this.warnedUnknownDisabledSurface=!1,this.publishInFlightSnapshot({tasks:0,queued:0,kinds:[],items:[]})}}var t=new W(()=>new n);function sY(){return t.of(F().host)}
export{sY};
