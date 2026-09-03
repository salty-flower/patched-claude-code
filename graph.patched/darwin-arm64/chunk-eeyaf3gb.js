// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.258
import{pf}from"./chunk-s438shyh.js";var Zf={CURSOR_VISIBLE:25,ALT_SCREEN:47,ALT_SCREEN_CLEAR:1049,MOUSE_NORMAL:1000,MOUSE_BUTTON:1002,MOUSE_ANY:1003,MOUSE_SGR:1006,FOCUS_EVENTS:1004,BRACKETED_PASTE:2004,THEME_NOTIFY:2031,SYNCHRONIZED_UPDATE:2026,WIN32_INPUT_MODE:9001};function PO(E){return pf(`?${E}h`)}function v9(E){return pf(`?${E}l`)}var n4e=PO(Zf.SYNCHRONIZED_UPDATE),kbe=v9(Zf.SYNCHRONIZED_UPDATE),PFt=PO(Zf.BRACKETED_PASTE),r4e=v9(Zf.BRACKETED_PASTE),Zdt=PO(Zf.FOCUS_EVENTS),pOe=v9(Zf.FOCUS_EVENTS),OFt=PO(Zf.THEME_NOTIFY),o4e=v9(Zf.THEME_NOTIFY),Gv=PO(Zf.CURSOR_VISIBLE),hk=v9(Zf.CURSOR_VISIBLE),ept=PO(Zf.ALT_SCREEN_CLEAR),T3n=v9(Zf.ALT_SCREEN_CLEAR),tpt=v9(Zf.WIN32_INPUT_MODE),_=PO(Zf.MOUSE_NORMAL)+PO(Zf.MOUSE_BUTTON)+PO(Zf.MOUSE_ANY)+PO(Zf.MOUSE_SGR),t=PO(Zf.MOUSE_NORMAL)+PO(Zf.MOUSE_SGR),RF=v9(Zf.MOUSE_SGR)+v9(Zf.MOUSE_ANY)+v9(Zf.MOUSE_BUTTON)+v9(Zf.MOUSE_NORMAL);function $7(E){switch(E){case"full":return _;case"scroll":return t;case"off":return""}}
export{Zf,PO,v9,n4e,kbe,PFt,r4e,Zdt,pOe,OFt,o4e,Gv,hk,ept,T3n,tpt,RF,$7};
