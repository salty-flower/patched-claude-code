// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.290
import"./chunk-9d77qdrf.js";import"./chunk-918t5khf.js";import"./chunk-yffha6me.js";import"./chunk-fdatg9ax.js";import"./chunk-0mwsqxme.js";import"./chunk-gf0t3nd9.js";import"./chunk-bpkzpttw.js";import"./chunk-zs0343th.js";import"./chunk-6rzcw8g2.js";import"./chunk-869zfth6.js";import"./chunk-b7wdy41p.js";import"./chunk-aywwjcwq.js";import"./chunk-f16c4jnr.js";import{b,Q}from"./chunk-gvn18sr5.js";import"./chunk-0z5rjdcn.js";import"./chunk-ky8zgwyh.js";import"./chunk-z6am4wsr.js";import"./chunk-z9b8syjk.js";import"./chunk-jppak124.js";import"./chunk-z6jq2hwa.js";import"./chunk-sjbbyery.js";import"./chunk-s90w5q15.js";import"./chunk-tzahwj8w.js";import"./chunk-0wqb5n04.js";import"./chunk-wp37h1qm.js";import"./chunk-p72qafcy.js";import"./chunk-7n5tp35k.js";import"./chunk-zyrx67ap.js";import"./chunk-qv90ktrr.js";import"./chunk-0h69faxq.js";import"./chunk-g55sa40r.js";import"./chunk-djxmg5va.js";import"./chunk-z6w26610.js";import"./chunk-0834hdpw.js";import"./chunk-v6ek3j23.js";import"./chunk-4hsn0a4s.js";import"./chunk-pvcr8t0y.js";import"./chunk-h3056rfm.js";import"./chunk-dcpaq2kj.js";import"./chunk-j3629m0a.js";import"./chunk-cqa4khw0.js";import"./chunk-hevpq2ht.js";import"./chunk-nnbb9at0.js";import"./chunk-aey7fddv.js";import"./chunk-0qcng0ek.js";import"./chunk-nffxs9ey.js";import"./chunk-06vaaw45.js";import"./chunk-qdmy1g69.js";import"./chunk-2c0pkjse.js";import"./chunk-vf73wj1b.js";import"./chunk-jb27eay5.js";import"./chunk-9dnqpecd.js";import"./chunk-ta86nc10.js";import{Vi}from"./chunk-wby8n7tq.js";import"./chunk-repmvexm.js";import"./chunk-m0sj7y8g.js";import"./chunk-jkhtckyv.js";import"./chunk-e6wajgyd.js";import"./chunk-6ntgn93k.js";import"./chunk-h96fkqh0.js";import"./chunk-dejd0mwg.js";import"./chunk-f1vm98xj.js";import"./chunk-7ha2yydy.js";import"./chunk-cwqxpkpd.js";import"./chunk-jnystawq.js";import"./chunk-hdjzp1hc.js";import"./chunk-zbm7xwyr.js";import"./chunk-jb4eqyjv.js";import"./chunk-gsz4ykfe.js";import"./chunk-ghdwe20r.js";import"./chunk-vw9vnafd.js";import"./chunk-y1pmnwf8.js";import"./chunk-3ff85ar3.js";import"./chunk-pvw1e2q4.js";import"./chunk-ch8aw0k0.js";import"./chunk-yh6kwat0.js";import"./chunk-g6x5pfpt.js";import"./chunk-3xa8a4ky.js";import"./chunk-k0nrzyt2.js";import"./chunk-zg2sg2cj.js";import"./chunk-v7q9te9b.js";import"./chunk-8m32anyb.js";import"./chunk-tymcbz7d.js";import"./chunk-55rkkpz0.js";import{G$e}from"./chunk-4tzqjg33.js";import{dl}from"./chunk-af2j90xw.js";import"./chunk-3wab60rz.js";import"./chunk-ngfft5dp.js";import"./chunk-pak71jg1.js";import"./chunk-dx30tgp5.js";import"./chunk-29g2jvx2.js";import"./chunk-vj952p6j.js";import"./chunk-qt7wfk46.js";import"./chunk-ht3hn07r.js";import"./chunk-ryr5zmfz.js";import"./chunk-byp7b1vv.js";import"./chunk-hpdq1e8e.js";import"./chunk-q2j1pc7w.js";import"./chunk-40wcwz4f.js";import"./chunk-vcpw40gh.js";import"./chunk-cs06r2mk.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=Q(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function S(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function m(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...Vi({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let s=(await o.json()).keys?.find((a)=>a.kid===e);if(!s)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(s.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:s,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:s,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)S(t.payload);return{kid:e}}var h=16384,x=5000;async function v(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function _(t,r,e=process.stdin,n=x){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let i=(await dl(v(e),n,"decode-token: reading token from stdin")).trim();if(i)return i;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await _(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:i}=w(e),s=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??G$e()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await m({headerB64:n,payloadB64:o,signatureB64:i,header:s,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?s:c;process.stdout.write(`${b(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{C as selfHostedRunnerDecodeTokenMain};
