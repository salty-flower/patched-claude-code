// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import{j}from"./chunk-eqmywwjn.js";import{G}from"./chunk-pzq28dp7.js";class e{claudeTempDir=void 0;childProcessTmpDir=void 0;bundledSkillsRoot=void 0;scratchpadDirBySessionId=new Map;resolvedWorkingDirPaths=new Map;compiledPatternsByRules=new WeakMap;physicalTwinsByPattern=new Map;giveUpProbes=new WeakMap;reportedGiveUps=new Set;reportedSecondRootMountMatches=new Set;reportedSecondRootMountFlagThrow=!1;trustedSymlinkEquivalences=void 0;userSkillsBaseSpellingsFolded=void 0;resolvedSandboxConfigPaths=new Map;canonicalHomedirByHome=new Map;foldedSegmentsBySpelling=new Map;settingsFileLinks=void 0;reset(){this.claudeTempDir=void 0,this.childProcessTmpDir=void 0,this.bundledSkillsRoot=void 0,this.scratchpadDirBySessionId.clear(),this.resolvedWorkingDirPaths.clear(),this.trustedSymlinkEquivalences=void 0,this.userSkillsBaseSpellingsFolded=void 0,this.resolvedSandboxConfigPaths.clear(),this.canonicalHomedirByHome.clear(),this.foldedSegmentsBySpelling.clear(),this.physicalTwinsByPattern.clear(),this.reportedGiveUps.clear(),this.reportedSecondRootMountMatches.clear(),this.reportedSecondRootMountFlagThrow=!1,this.settingsFileLinks=void 0}}var n=new G(()=>new e);function uI(){return n.of(j().host)}function bMs(){return j().host.clock}
export{uI,bMs};
