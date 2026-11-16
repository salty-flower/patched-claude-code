// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{E9e}from"./chunk-jk3t30z5.js";function zEn(o,t,e){switch(t){case"credential_store_failed":return E9e()==="keychain"?`Couldn't remove the saved sign-in for "${o}", so Claude Code may still use it. Claude Code could not read or update its credential store. If the macOS keychain is locked, unlock it, for example with \`security unlock-keychain\`, then ${e}.`:`Couldn't remove the saved sign-in for "${o}", so Claude Code may still use it. Claude Code could not read or update its credential store. ${e.charAt(0).toUpperCase()}${e.slice(1)}.`;case"keychain_unreadable":return`Couldn't confirm the sign-out from "${o}": Claude Code could not read the macOS keychain, so a saved sign-in may still be there. The keychain may be locked. Unlock it, for example with \`security unlock-keychain\`, then ${e}.`}}
export{zEn};
