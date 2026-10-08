// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.293
import"./chunk-dz7bwjyz.js";import"./chunk-ndcqd6bh.js";import"./chunk-bkr1h20c.js";import"./chunk-5g6j8x8p.js";import"./chunk-670y7hd9.js";import"./chunk-gwj7v27h.js";import"./chunk-4z5wz91m.js";import"./chunk-941sa7c2.js";import"./chunk-70ktd4rm.js";import"./chunk-rptge3r8.js";import"./chunk-28fj72x7.js";import"./chunk-g79wjybr.js";import"./chunk-4p5wb748.js";import{_,J}from"./chunk-p46wpkfz.js";import"./chunk-gx95ar6n.js";import"./chunk-j6z0j5vh.js";import"./chunk-2j48j0j1.js";import"./chunk-3s94kw4m.js";import"./chunk-7dchs7vj.js";import"./chunk-ag8h4tcz.js";import"./chunk-e84gprty.js";import"./chunk-nayw0pf7.js";import"./chunk-68vq239n.js";import"./chunk-hesrqedr.js";import"./chunk-ras5x31x.js";import"./chunk-5zqw5ss6.js";import"./chunk-hrwjwwzw.js";import"./chunk-cjpd2k0t.js";import"./chunk-rzq8vrew.js";import"./chunk-4zqg0s2n.js";import"./chunk-nv2bbff4.js";import"./chunk-tfrn9jh8.js";import"./chunk-trynpg3y.js";import"./chunk-9b9pp2j0.js";import"./chunk-jhxnp941.js";import"./chunk-syb80f1m.js";import"./chunk-sh51y7yj.js";import"./chunk-mb5hcwe1.js";import"./chunk-5v4f7g5r.js";import"./chunk-amnc8bbv.js";import"./chunk-0hrvnhgh.js";import"./chunk-m8haxweq.js";import"./chunk-9py7rh29.js";import"./chunk-wchsap03.js";import"./chunk-hv4n1akt.js";import"./chunk-ettyqnzn.js";import"./chunk-8ky01sys.js";import"./chunk-xt99khzc.js";import"./chunk-gsa86a2x.js";import"./chunk-dmwg443r.js";import"./chunk-qp65fq4n.js";import"./chunk-942093b7.js";import"./chunk-cejxg49w.js";import{Ji}from"./chunk-19kr5wet.js";import"./chunk-agxkvasb.js";import"./chunk-cxjvwxsa.js";import"./chunk-wpwa8wh9.js";import"./chunk-z1mnwnvd.js";import"./chunk-8x6enyhq.js";import"./chunk-dxwrxbnd.js";import"./chunk-9p9w9mdw.js";import"./chunk-wf918jgf.js";import"./chunk-9f88agae.js";import"./chunk-qrw8p75p.js";import"./chunk-wdbbywcf.js";import"./chunk-5pdrsybf.js";import"./chunk-bxs4s6wr.js";import"./chunk-025kqzfg.js";import"./chunk-946598ze.js";import"./chunk-rqsafy80.js";import"./chunk-v66jm760.js";import"./chunk-chs8nhab.js";import"./chunk-m7wy507r.js";import"./chunk-fs1m5djd.js";import"./chunk-571ddenq.js";import"./chunk-ds5pk6ma.js";import"./chunk-hfpf4cs3.js";import"./chunk-whgkjmx2.js";import"./chunk-e3ya4n4j.js";import"./chunk-9peh9gjb.js";import"./chunk-pesdmje3.js";import"./chunk-30xn0w2c.js";import"./chunk-7qk6zpqr.js";import"./chunk-1r841fxg.js";import{sBe}from"./chunk-4tfy89ws.js";import{wl}from"./chunk-0cg7ksy5.js";import"./chunk-30bw8frt.js";import"./chunk-me0c3h4h.js";import"./chunk-c91vhg3c.js";import"./chunk-gvd58vpb.js";import"./chunk-vygt57n9.js";import"./chunk-fxrrfs3q.js";import"./chunk-zk0yxkwh.js";import"./chunk-k4t6m1v4.js";import"./chunk-4rvkrdmh.js";import"./chunk-65kgtwr0.js";import"./chunk-ebvbbvjb.js";import"./chunk-vyx0nxv6.js";import"./chunk-rwkxt94c.js";import"./chunk-bhxa600q.js";import"./chunk-ehn9f19s.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=J(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function S(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function m(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...Ji({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let s=(await o.json()).keys?.find((a)=>a.kid===e);if(!s)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(s.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:s,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:s,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)S(t.payload);return{kid:e}}var h=16384,x=5000;async function b(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function v(t,r,e=process.stdin,n=x){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let i=(await wl(b(e),n,"decode-token: reading token from stdin")).trim();if(i)return i;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await v(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:i}=w(e),s=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??sBe()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await m({headerB64:n,payloadB64:o,signatureB64:i,header:s,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?s:c;process.stdout.write(`${_(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{C as selfHostedRunnerDecodeTokenMain};
