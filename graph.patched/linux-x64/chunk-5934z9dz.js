// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import{Qa}from"./chunk-hv4n1akt.js";var Gg={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,MOUSE_SGR_PIXELS:1016,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function mF(E){return Qa(`?${E}h`)}function Uq(E){return Qa(`?${E}l`)}var RDt=mF(Gg.SYNCHRONIZED_UPDATE),D5e=Uq(Gg.SYNCHRONIZED_UPDATE),bxo=mF(Gg.BRACKETED_PASTE),vsn=Uq(Gg.BRACKETED_PASTE),Esn=mF(Gg.FOCUS_EVENTS),nut=Uq(Gg.FOCUS_EVENTS),Sxo=mF(Gg.THEME_NOTIFY),ksn=Uq(Gg.THEME_NOTIFY),PM=mF(Gg.CURSOR_VISIBLE),IM=Uq(Gg.CURSOR_VISIBLE),rut=mF(Gg.ALT_SCREEN_CLEAR),out=Uq(Gg.ALT_SCREEN_CLEAR),Tsn=Uq(Gg.WIN32_INPUT_MODE),S=mF(Gg.MOUSE_NORMAL)+mF(Gg.MOUSE_BUTTON)+mF(Gg.MOUSE_ANY)+mF(Gg.MOUSE_SGR),_=mF(Gg.MOUSE_NORMAL)+mF(Gg.MOUSE_SGR),_ue=Uq(Gg.MOUSE_SGR)+Uq(Gg.MOUSE_ANY)+Uq(Gg.MOUSE_BUTTON)+Uq(Gg.MOUSE_NORMAL),wxo=mF(Gg.MOUSE_SGR_PIXELS),vxo=Uq(Gg.MOUSE_SGR_PIXELS)+mF(Gg.MOUSE_SGR);function Asn(E){switch(E){case"full":return S;case"scroll":return _;case"off":return""}}
export{Gg,mF,Uq,RDt,D5e,bxo,vsn,Esn,nut,Sxo,ksn,PM,IM,rut,out,Tsn,_ue,wxo,vxo,Asn};
