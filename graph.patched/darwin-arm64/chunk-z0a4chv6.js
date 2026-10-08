// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import"./chunk-dr4n1eny.js";import"./chunk-63vja5td.js";import"./chunk-eak61y8v.js";import"./chunk-tnh13g2g.js";import"./chunk-k2e8p61g.js";import"./chunk-9exgg8sx.js";import"./chunk-ce4b81xm.js";import"./chunk-y208484s.js";import"./chunk-dqm3tjsh.js";import"./chunk-70qqbqq4.js";import"./chunk-drh3s4e9.js";import"./chunk-vd0a9d2s.js";import"./chunk-a48152q4.js";import{_,X}from"./chunk-b5feae42.js";import"./chunk-xaschh52.js";import"./chunk-cy0s0eq1.js";import"./chunk-v2r1tbj3.js";import"./chunk-tdmgys2e.js";import"./chunk-7dchs7vj.js";import"./chunk-ebsg4v3f.js";import"./chunk-45vnv946.js";import"./chunk-ne43gjnt.js";import"./chunk-hz0a4zf6.js";import"./chunk-zp1a5mr6.js";import"./chunk-y575z4xw.js";import"./chunk-5g70wphz.js";import"./chunk-sd0xvc0m.js";import"./chunk-pf8p4bsg.js";import"./chunk-2cyvs4wb.js";import"./chunk-843ya6e2.js";import"./chunk-rh939hn5.js";import"./chunk-havdj21n.js";import"./chunk-xrq7sey1.js";import"./chunk-kp09cc0v.js";import"./chunk-7194gg2b.js";import"./chunk-f51x0gch.js";import"./chunk-htsd57mk.js";import"./chunk-pzha2ryw.js";import"./chunk-j1zwmk4n.js";import"./chunk-yj45yszw.js";import"./chunk-a7bs4sbc.js";import"./chunk-as4x8nna.js";import"./chunk-qczqzyxh.js";import"./chunk-q2zdhqvq.js";import"./chunk-d9jpb7es.js";import"./chunk-je76vky8.js";import"./chunk-2r0ph8pf.js";import"./chunk-yzpy5cf5.js";import"./chunk-48by85wp.js";import"./chunk-3qfs0gea.js";import"./chunk-xxchs9s7.js";import"./chunk-fsnz81vy.js";import"./chunk-exvcagr3.js";import{Ji}from"./chunk-m7sjke7g.js";import"./chunk-84g1ggm4.js";import"./chunk-gcyvvtkw.js";import"./chunk-07wdw7m0.js";import"./chunk-5tqxeqqd.js";import"./chunk-ayvdek13.js";import"./chunk-hbp0s36e.js";import"./chunk-svyf12fc.js";import"./chunk-82debp0t.js";import"./chunk-yxxcd79r.js";import"./chunk-8cqnzay2.js";import"./chunk-630hazsp.js";import"./chunk-kbn00z3m.js";import"./chunk-g28j50c3.js";import"./chunk-zttk1yx5.js";import"./chunk-cy4t0v8j.js";import"./chunk-1x0mmdxb.js";import"./chunk-3smfeyq8.js";import"./chunk-pz1x73ay.js";import"./chunk-jgmrvhwh.js";import"./chunk-ccbm7724.js";import"./chunk-rh7py0tc.js";import"./chunk-dryq126j.js";import"./chunk-9rdmsm2q.js";import"./chunk-j9jxxcf5.js";import"./chunk-91pk1a5a.js";import"./chunk-vc6d82rm.js";import"./chunk-35a3sr2r.js";import"./chunk-7q1xzeq8.js";import"./chunk-5gqxahqm.js";import"./chunk-e4h4yp41.js";import{fUe}from"./chunk-0wm8ry5x.js";import{El}from"./chunk-61amhpbb.js";import"./chunk-fwcnvxqe.js";import"./chunk-wmrm2j5z.js";import"./chunk-jkhz8ejr.js";import"./chunk-d2m17704.js";import"./chunk-r7tff0ah.js";import"./chunk-4hk3eh7v.js";import"./chunk-x3tm8c2g.js";import"./chunk-eqqjcad1.js";import"./chunk-kpdnxgda.js";import"./chunk-20vgjjee.js";import"./chunk-d3pfyxhw.js";import"./chunk-rgvsr2fj.js";import"./chunk-s07g171s.js";import"./chunk-b9ck3csh.js";import"./chunk-vq057nnn.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=X(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function S(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function m(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...Ji({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let s=(await o.json()).keys?.find((a)=>a.kid===e);if(!s)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(s.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:s,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:s,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)S(t.payload);return{kid:e}}var h=16384,x=5000;async function b(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function v(t,r,e=process.stdin,n=x){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let i=(await El(b(e),n,"decode-token: reading token from stdin")).trim();if(i)return i;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

Decode a session-ingress JWT (CLAUDE_CODE_SESSION_ACCESS_TOKEN) and print its
claims as JSON to stdout. Strips any sk-ant-cc- / sk-ant-si- prefix
automatically. Pipe to jq to extract a single claim.

Token source (first non-empty wins):
  1. Positional argument
  2. $CLAUDE_CODE_SESSION_ACCESS_TOKEN
  3. Piped stdin

Signature verification against <api-url>/v1/code/.well-known/jwks.json is ON
by default, as is the exp/nbf check (60s skew). Prints "verified (kid=\u2026,
sig+exp)" to stderr on success; exits 1 on verification failure, expiry, or
JWKS fetch error. Does NOT pin iss/aud/token-type \u2014 compare those from the
decoded claims if your auth model depends on them.

Options:
  --header           Print the JWT header instead of the claims.
  --no-verify        Skip signature verification and the JWKS fetch. For
                     offline inspection only \u2014 do NOT feed the output to an
                     auth decision.
  --no-check-expiry  Skip the exp/nbf check (signature still verified). For
                     forensics ("was this token ever issued by us?").
  --api-url <url>    API base URL for JWKS fetch (default: $ANTHROPIC_BASE_URL
                     or the built-in default).
  --verify           (Deprecated \u2014 verification is the default. Kept so older
                     wrapper scripts don't break.)
  --help, -h         Show this help.

Examples:
  # In an --exec-path wrapper: who created this session? Signature is
  # verified by default, so a tampered token exits non-zero here.
  # Use jq -re (not -r) when the claim gates an auth decision \u2014 jq -r prints
  # the literal string "null" and exits 0 when the claim is missing.
  creator=$(claude self-hosted-runner decode-token | jq -re .act.email) \\
    || { echo "session JWT: no creator identity or verification failed" >&2; exit 1; }

  # Offline inspection (no network, no auth decision)
  claude self-hosted-runner decode-token --no-verify

  # Decode a different token by piping it (unset the env var first)
  echo "$SOME_TOKEN" | env -u CLAUDE_CODE_SESSION_ACCESS_TOKEN \\
    claude self-hosted-runner decode-token --no-verify
`;async function C(t){let r;try{r=y(t)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await v(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:i}=w(e),s=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??fUe()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await m({headerB64:n,payloadB64:o,signatureB64:i,header:s,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?s:c;process.stdout.write(`${_(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{C as selfHostedRunnerDecodeTokenMain};
