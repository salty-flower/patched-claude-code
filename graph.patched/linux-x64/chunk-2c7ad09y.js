// @bun @bytecode
// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.325
import{sh,S}from"./chunk-a5a37ds7.js";var P$s=Object.freeze({twoStageClassifier:!0,sameTurnSiblingContext:!0,editRemovalVisibility:!0,editRemovalCap:3000,outcomeVisibility:!1,repoVisibility:!0,gitStatusType:!0,gitStatusUploads:!1,tagConnectorWrites:!1,envOnboarding:!0,severityByModel:Object.freeze({"claude-sonnet-5[1m]":Object.freeze({t1:25,t2:35}),"claude-opus-4-8[1m]":Object.freeze({t1:45,t2:35}),"claude-sonnet-5":Object.freeze({t1:25,t2:35}),"claude-opus-4-8":Object.freeze({t1:45,t2:35})})}),e=Object.freeze({});function Uf(){let t=S("tengu_auto_mode_config",e)??e;if(t!==e)return t;return sh()?e:P$s}
export{P$s,Uf};
