// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.301
import"./chunk-n03wywra.js";import"./chunk-rs6p8dg3.js";import"./chunk-fr28a3he.js";import"./chunk-w7m8nded.js";import"./chunk-r2xfgg0x.js";import"./chunk-pzq28dp7.js";import"./chunk-c61xdsy8.js";import"./chunk-8fqmxv14.js";import"./chunk-63mtweh2.js";import"./chunk-xwn0mfnc.js";import"./chunk-bfqfmbd0.js";import"./chunk-eqmywwjn.js";import"./chunk-qeqy4res.js";import{_,X}from"./chunk-cwsn6mdf.js";import"./chunk-xc4b32zy.js";import"./chunk-b9getfsf.js";import"./chunk-9pt2nr7j.js";import"./chunk-73603qq3.js";import"./chunk-eveykdxw.js";import"./chunk-xsxnmhwb.js";import"./chunk-h723y8sa.js";import"./chunk-rhe3yjtx.js";import"./chunk-he0s6sfd.js";import"./chunk-kmgwwaz2.js";import"./chunk-dzt95g1x.js";import"./chunk-9155m2kg.js";import"./chunk-g84j6s5r.js";import"./chunk-70f8b1fa.js";import"./chunk-e6akwa1s.js";import"./chunk-zg8w8y5z.js";import"./chunk-en4g449d.js";import"./chunk-4dcbf4v7.js";import"./chunk-4m7tg52y.js";import"./chunk-0v63deca.js";import"./chunk-55hpndzc.js";import"./chunk-v4b5tf75.js";import"./chunk-d3cqnp4r.js";import"./chunk-he4afcmc.js";import"./chunk-ac6y47nt.js";import"./chunk-30b5ph10.js";import"./chunk-brkdb8k6.js";import"./chunk-sbc6y92x.js";import"./chunk-wz19y5sy.js";import"./chunk-n1y0nb3t.js";import"./chunk-zk4arnjj.js";import"./chunk-xz2ecwrk.js";import"./chunk-snmng9rv.js";import"./chunk-xx1rar7b.js";import"./chunk-5znx2wc7.js";import"./chunk-z5pqasm7.js";import"./chunk-ameg1sn6.js";import"./chunk-9t95885m.js";import"./chunk-y70k7r60.js";import"./chunk-a502zyxr.js";import"./chunk-wrm9spc9.js";import"./chunk-xyn7gydh.js";import"./chunk-rzncn4a3.js";import{Ji}from"./chunk-0nwsa03d.js";import"./chunk-k16gymf7.js";import"./chunk-xex0gggg.js";import"./chunk-4zax65nq.js";import"./chunk-egsk30hx.js";import"./chunk-21ehane9.js";import"./chunk-gn6vejgv.js";import"./chunk-v55shcxh.js";import"./chunk-spj3hc88.js";import"./chunk-v5v0bm5h.js";import"./chunk-zkbf0zdp.js";import"./chunk-yfyzz0k6.js";import"./chunk-qj5k75tz.js";import"./chunk-m1dg0rsv.js";import"./chunk-7z1je35j.js";import"./chunk-5vywp25k.js";import"./chunk-5v7hcwhj.js";import"./chunk-bkmwhar8.js";import"./chunk-4z1qxvsq.js";import"./chunk-bsdd04br.js";import"./chunk-8g5pckzs.js";import"./chunk-694thzp1.js";import"./chunk-b8e5f7zw.js";import"./chunk-3axhkz18.js";import"./chunk-2j2r7x9x.js";import"./chunk-0afeyn3v.js";import"./chunk-j0cszb7p.js";import"./chunk-9vjdjq5x.js";import"./chunk-vt9rkdza.js";import"./chunk-9082r4nb.js";import"./chunk-s1bx8n97.js";import{MVe}from"./chunk-mpp4f38w.js";import"./chunk-9q4n330t.js";import"./chunk-j7zvqr40.js";import"./chunk-we926ymf.js";import"./chunk-xaxbaeg3.js";import"./chunk-8m7s6eqb.js";import"./chunk-2wn2yz44.js";import{cl}from"./chunk-m1harvj6.js";import"./chunk-a68hwr52.js";import"./chunk-zm170jeg.js";import"./chunk-n6aksg65.js";import"./chunk-rnt2hee8.js";import"./chunk-435b7wc4.js";import"./chunk-6yjayhyn.js";import"./chunk-m09ded2g.js";import"./chunk-mm8dw908.js";import"./chunk-6z47rnsq.js";import"./chunk-041rk1gc.js";import"./chunk-sdt3vs8w.js";import"./chunk-7qtsq477.js";import"./chunk-peqw4kvv.js";import"./chunk-f83bg975.js";import"./chunk-qn1r3sx1.js";import"./chunk-yhkfehzg.js";import"./chunk-e0thntkh.js";import"./chunk-y6e2zv6a.js";import"./chunk-brdnce5f.js";import"./chunk-8dm571cw.js";import"./chunk-67r4k30a.js";import"./chunk-29rv67gt.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=X(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function S(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function m(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...Ji({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let i=(await o.json()).keys?.find((a)=>a.kid===e);if(!i)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(i.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${i.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:i,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:i,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)S(t.payload);return{kid:e}}var h=16384,x=5000;async function b(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function v(t,r,e=process.stdin,n=x){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let s=(await cl(b(e),n,"decode-token: reading token from stdin")).trim();if(s)return s;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`;async function J(t){let r;try{r=y(t)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await v(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:s}=w(e),i=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??MVe()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await m({headerB64:n,payloadB64:o,signatureB64:s,header:i,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?i:c;process.stdout.write(`${_(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{J as selfHostedRunnerDecodeTokenMain};
