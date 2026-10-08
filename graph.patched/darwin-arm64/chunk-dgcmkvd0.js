// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Za}from"./chunk-d9jpb7es.js";var Vg={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function v$(E){return Za(`?${E}h`)}function Yz(E){return Za(`?${E}l`)}var jMt=v$(Vg.SYNCHRONIZED_UPDATE),B9e=Yz(Vg.SYNCHRONIZED_UPDATE),Yxo=v$(Vg.BRACKETED_PASTE),Fsn=Yz(Vg.BRACKETED_PASTE),$sn=v$(Vg.FOCUS_EVENTS),dut=Yz(Vg.FOCUS_EVENTS),Xxo=v$(Vg.THEME_NOTIFY),Usn=Yz(Vg.THEME_NOTIFY),M0=v$(Vg.CURSOR_VISIBLE),D0=Yz(Vg.CURSOR_VISIBLE),uut=v$(Vg.ALT_SCREEN_CLEAR),put=Yz(Vg.ALT_SCREEN_CLEAR),Bsn=Yz(Vg.WIN32_INPUT_MODE),S=v$(Vg.MOUSE_NORMAL)+v$(Vg.MOUSE_BUTTON)+v$(Vg.MOUSE_ANY)+v$(Vg.MOUSE_SGR),_=v$(Vg.MOUSE_NORMAL)+v$(Vg.MOUSE_SGR),kue=Yz(Vg.MOUSE_SGR)+Yz(Vg.MOUSE_ANY)+Yz(Vg.MOUSE_BUTTON)+Yz(Vg.MOUSE_NORMAL),Jxo=v$(Vg.MOUSE_SGR_PIXELS),Qxo=Yz(Vg.MOUSE_SGR_PIXELS)+v$(Vg.MOUSE_SGR);function jsn(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{Vg,v$,Yz,jMt,B9e,Yxo,Fsn,$sn,dut,Xxo,Usn,M0,D0,uut,put,Bsn,kue,Jxo,Qxo,jsn};
