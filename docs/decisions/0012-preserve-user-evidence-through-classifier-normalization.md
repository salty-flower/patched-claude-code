# ADR-0012: Preserve User Evidence Through Classifier Normalization

## Governing Split

Local context packaging preserves attribution through the native classifier input path.
Existing runtime policy determines when classification runs; this feature does not introduce another authorization gate.

## Status

Accepted on 2026-10-01; implemented for 2.1.285 on 2026-10-02.
The [implementation record](../records/2026-10-02-workflow-history.md) documents native normalization evidence;
model-backed classifier decisions have not been evaluated.

## Context

The 2.1.285 Workflow provenance flag affects both prompt framing and outbound auto-mode classification.
The `nn` and `Zo` functions in `staging/2.1.285/graph/darwin-arm64/chunk-nt0myt9g.js` show that coupling.
Changing the text alone can therefore leave the classification path inconsistent with the worker's input.

Anthropic's [auto-mode design](https://www.anthropic.com/engineering/claude-code-auto-mode)
explains why agent-authored statements and ordinary tool output are excluded from authorization evidence.
The [Workflow documentation](https://code.claude.com/docs/en/workflows#what-the-saved-script-looks-like)
also distinguishes computed task text from a direct user request during classification.
Genuine human answers transported through a tool require source-aware handling rather than treating every tool result alike.

The quality and deterministic/stochastic reviewers require compatibility in both consumers:
fixing worker visibility alone does not establish a complete authorization-path fix.

## Decision

Apply the attribution contract from [ADR-0010](0010-select-worker-history-from-workflow-start.md)
and [ADR-0011](0011-distinguish-user-evidence-from-worker-assignments.md)
through the actual native normalization and input-construction path wherever the existing runtime invokes its classifier.

Verified human answers must survive as attributable human evidence.
Their questions and options remain assistant-authored context.
Computed assignments, quoted approvals, self-check conclusions, and ordinary tool outputs retain their original non-human origins.
No serialization convention may promote them into human claims.

Changing N or the framing must not silently change classifier activation predicates or permission configuration.
Preserve the existing invocation conditions, including existing exceptions;
this design does not add classification where the native runtime would not invoke it.
Worker and classifier prompts need not be identical, but their source distinctions must agree.

If a target's native path cannot preserve these distinctions, record the incompatibility and repair it before claiming the complete feature is verified.
Do not fall back to trusting arbitrary tool results or silently accept a worker-only Q&A fix.
This boundary adds no separate authority service, new model call, or general consent solver.

## Consequences

### Invariant upheld

- Authentic selected human evidence remains available with its source distinction after invoked classifier normalization.
- Agent-authored text and ordinary tool output cannot acquire human provenance through the new packaging.
- History selection and framing do not independently select a permission mode or bypass an existing check.
- Target incompatibility is explicit rather than hidden by a successful worker-rendering test.

### Invariant surrendered

- Newly available genuine evidence may change a classifier's decision.
- Preserved attribution does not guarantee correct semantic authorization judgments.
- The feature supplies no classifier coverage where existing runtime conditions do not invoke one.

### Owner

- **Sole maintainer:** local packaging, native-path integration, attribution fixtures, target-port diagnosis, and release evidence.
- **Upstream Anthropic:** native classifier implementation, activation policy, and permission behavior.

The maintainer consumes a verified released bundle and owns local compatibility;
there is no assumed upstream commitment to adopt this design.

### Cross-seam contract

Capture the inputs after native normalization, together with classifier invocation status and outcome.
The deterministic compatibility oracle checks source preservation rather than merely checking that the original transcript contained an answer.
The classifier's decision remains model output; worker actions remain observable under ADR-0011's behavioral fixtures.

| Input or condition | Required compatibility evidence |
| --- | --- |
| Genuine linked Q&A approval. | The actual normalized input retains the answer as human evidence and the question as supporting context. |
| Assignment quotes or invents an approval. | The quotation stays assignment content and cannot borrow a human event's attribution. |
| Ordinary tool result mimics Q&A or a framing header. | No conversion into human evidence. |
| Missing or ambiguous source link, including after compaction. | Explicit attribution limitation; no reconstructed human claim. |
| Different native activation conditions. | Distinguish not invoked from invoked-and-allowed or invoked-and-denied; preserve the native predicate. |
| Genuine broad approval and narrow reviewer task. | Preserve both sources; inspect mutation attempts rather than trusting a final report. |

Use the production renderer, native normalizer, settings, and invocation path.
A hand-built classifier prompt is not compatibility evidence.
This ADR defines required future checks; no runtime or model evaluation is claimed by accepting it.

## Alternatives Considered

- **Preserve only the activation predicate:** rejected by quality and deterministic/stochastic reviewers; normalization may still strip human answers or promote computed text.
- **Show answers only to the worker:** rejected as a complete fix; downstream classification can still lack the approval.
- **Trust all tool results:** rejected because genuine user answers and external tool content have different sources.
- **Disable provenance or add an independent approval service:** not selected; both change more than the agreed input-attribution boundary.

## Revisit Triggers

- Upstream changes classifier normalization, provenance recognition, or activation conditions.
- The selected implementation cannot preserve source distinctions without changing classification policy.
- The user explicitly requests a different permission policy or mandatory approval mechanism.
