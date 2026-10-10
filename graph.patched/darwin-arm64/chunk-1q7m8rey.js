// @bun @bytecode
// Claude Code is a Beta product per Anthropic's Commercial Terms of Service.
// By using Claude Code, you agree that all code acceptance or rejection decisions you make,
// and the associated conversations in context, constitute Feedback under Anthropic's Commercial Terms,
// and may be used to improve Anthropic's products, including training models.
// You are responsible for reviewing any code suggestions before use.

// (c) Anthropic PBC. All rights reserved. Use is subject to the Legal Agreements outlined here: https://code.claude.com/docs/en/legal-and-compliance.

// Version: 2.1.296
import"./chunk-4vzk3y22.js";import"./chunk-fdxhcr6b.js";import"./chunk-76anb6yt.js";import"./chunk-886tf6ja.js";import"./chunk-yjc18bey.js";import"./chunk-ae84tp6z.js";import"./chunk-nqc6v990.js";import"./chunk-5b8s3gnd.js";import"./chunk-phz47asr.js";import"./chunk-yvnhkg35.js";import"./chunk-nfna65jh.js";import"./chunk-4bw62nzm.js";import"./chunk-k1419ccf.js";import{_,Y}from"./chunk-gyf58rwf.js";import"./chunk-tat46164.js";import"./chunk-ax7r0qj7.js";import"./chunk-gsnbskq4.js";import"./chunk-p9frg3mj.js";import"./chunk-1tsh4em7.js";import"./chunk-7sdm5x5t.js";import"./chunk-4nygtnjw.js";import"./chunk-2hb5361r.js";import"./chunk-r2vtj1kh.js";import"./chunk-fdwn5gdv.js";import"./chunk-3cynezh1.js";import"./chunk-nv1qvpv3.js";import"./chunk-tadwrn0a.js";import"./chunk-a60ee1ne.js";import"./chunk-ppsy9aeg.js";import"./chunk-6pbtkr2b.js";import"./chunk-9zyrj6we.js";import"./chunk-z6p21rxk.js";import"./chunk-tdjxpe2m.js";import"./chunk-68wmv4pr.js";import"./chunk-qr9z1wer.js";import"./chunk-1t033v1j.js";import"./chunk-wh2vcbh8.js";import"./chunk-nca5bd28.js";import"./chunk-f606a53w.js";import"./chunk-bf3z2ftn.js";import"./chunk-cnq34fr6.js";import"./chunk-vgthw1fb.js";import"./chunk-y98nbw94.js";import"./chunk-1azky4vr.js";import"./chunk-yn0pfn70.js";import"./chunk-8pet3bvp.js";import"./chunk-wtch2p0g.js";import"./chunk-dp4bc9y2.js";import"./chunk-x0dc37w9.js";import"./chunk-qb086kpj.js";import"./chunk-y8g1gshe.js";import"./chunk-kvz2ymff.js";import"./chunk-2x1jdkd9.js";import{na}from"./chunk-h20sc871.js";import"./chunk-yv3rvqk7.js";import"./chunk-bk5ct2gw.js";import"./chunk-hb620t8k.js";import"./chunk-c6qwr3kc.js";import"./chunk-e4eky0pj.js";import"./chunk-zrh141bk.js";import"./chunk-mrf41zrh.js";import"./chunk-j41p6s5m.js";import"./chunk-3sda67c1.js";import"./chunk-zpefvajk.js";import"./chunk-c0aaqg7t.js";import"./chunk-64ag51qf.js";import"./chunk-0yczyn9c.js";import"./chunk-mke1mg83.js";import"./chunk-75xzrg6e.js";import"./chunk-d7wfeeft.js";import"./chunk-sazx74ct.js";import"./chunk-97q60twp.js";import"./chunk-ts42ykgs.js";import"./chunk-daqzn5gy.js";import"./chunk-g1yqb0n4.js";import"./chunk-phm7wwmz.js";import"./chunk-z0n2djw5.js";import"./chunk-m7864yc0.js";import"./chunk-rgrg9230.js";import"./chunk-y59djfw7.js";import"./chunk-0jyjhrht.js";import"./chunk-hpdcd3vm.js";import"./chunk-njj04bkb.js";import"./chunk-95s6vqpk.js";import{p2e}from"./chunk-p6q2xt56.js";import{Ml}from"./chunk-er6dw119.js";import"./chunk-j0kcafpy.js";import"./chunk-znynzfyp.js";import"./chunk-ngwfw4c8.js";import"./chunk-tfm99p8y.js";import"./chunk-25vrbr0v.js";import"./chunk-51w556q5.js";import"./chunk-k10m7cdf.js";import"./chunk-g9z2s3cs.js";import"./chunk-rzybc39t.js";import"./chunk-hf90k897.js";import"./chunk-t2x9eyac.js";import"./chunk-0hm793yn.js";import"./chunk-nkvcn1t9.js";import"./chunk-2zhybd9r.js";import"./chunk-nmnavv08.js";import"./chunk-t05cqr1r.js";import"./chunk-xaes9ysz.js";import"./chunk-wsz2wsez.js";import{createPublicKey as l,verify as g}from"crypto";function y(t){let r={header:!1,verify:!0,checkExpiry:!0,help:!1};for(let e=0;e<t.length;e++){let n=t[e];switch(n){case"--help":case"-h":r.help=!0;break;case"--header":r.header=!0;break;case"--verify":r.verify=!0;break;case"--no-verify":r.verify=!1;break;case"--no-check-expiry":r.checkExpiry=!1;break;case"--api-url":{let o=t[++e];if(o===void 0)throw Error("decode-token: --api-url requires a value");r.apiUrl=o;break}default:if(n.startsWith("-"))throw Error(`decode-token: unknown flag ${n}`);if(r.token!==void 0)throw Error("decode-token: at most one positional token argument");r.token=n}}return r}function w(t){let e=t.trim().replace(/^sk-ant-[a-z0-9]+-/i,"").split(".");if(e.length!==3||!e[0]||!e[1]||!e[2])throw Error("decode-token: not a JWT \u2014 expected 3 dot-separated base64url segments "+`(after stripping any sk-ant- prefix), got ${e.length}`);return{headerB64:e[0],payloadB64:e[1],signatureB64:e[2]}}function u(t,r){if(!/^[A-Za-z0-9_-]+$/.test(t))throw Error(`decode-token: ${r} is not valid base64url (unexpected characters)`);let e=Buffer.from(t,"base64url").toString("utf8"),n;try{n=Y(e)}catch(o){throw Error(`decode-token: ${r} is not valid JSON: ${o}`)}if(n===null||typeof n!=="object"||Array.isArray(n))throw Error(`decode-token: ${r} is not a JSON object`);return n}var E={ES256:"EC",RS256:"RSA"};function S(t,r=Math.floor(Date.now()/1000),e=60){let{exp:n,nbf:o}=t;if(typeof n!=="number")throw Error("decode-token: token has no numeric `exp` claim");if(r>n+e)throw Error(`decode-token: token EXPIRED at ${new Date(n*1000).toISOString()} (${Math.round(r-n)}s ago)`);if(typeof o==="number"&&r+e<o)throw Error(`decode-token: token not valid until ${new Date(o*1000).toISOString()}`)}async function m(t){let r=t.header.alg,e=t.header.kid;if(typeof r!=="string"||typeof e!=="string")throw Error("decode-token: JWT header is missing `alg` or `kid` \u2014 cannot select a JWKS key");let n=E[r];if(!n)throw Error(`decode-token: unsupported alg=${r} \u2014 only ES256 and RS256 are supported`);let o;try{o=await t.fetchFn(t.jwksUrl,{...na({url:t.jwksUrl}),signal:AbortSignal.timeout(30000)})}catch(a){throw Error(`decode-token: failed to fetch JWKS from ${t.jwksUrl}: ${a}`)}if(!o.ok)throw Error(`decode-token: JWKS fetch returned ${o.status} ${o.statusText} for ${t.jwksUrl}`);let s=(await o.json()).keys?.find((a)=>a.kid===e);if(!s)throw Error(`decode-token: no JWKS key with kid=${e} at ${t.jwksUrl} \u2014 `+"token may be signed by a different environment (try --api-url).");if(s.kty!==n)throw Error(`decode-token: JWKS key kid=${e} has kty=${s.kty} but alg=${r} needs kty=${n}`);let c="sha256",d=r==="ES256"?{key:l({key:s,format:"jwk"}),dsaEncoding:"ieee-p1363"}:{key:l({key:s,format:"jwk"})},k=Buffer.from(`${t.headerB64}.${t.payloadB64}`,"utf8"),f=Buffer.from(t.signatureB64,"base64url");if(!g(c,k,d,f))throw Error("decode-token: signature verification FAILED");if(t.checkExpiry!==!1)S(t.payload);return{kid:e}}var h=16384,x=5000;async function b(t=process.stdin){if(t.isTTY)return"";let r=[],e=0;for await(let n of t){let o=Buffer.from(n);if(e+=o.length,e>h)throw Error(`decode-token: stdin exceeds ${h/1024} KiB; session-ingress JWTs are ~1 KB. Pass the token as an argument or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.`);r.push(o)}return Buffer.concat(r).toString("utf8")}async function v(t,r,e=process.stdin,n=x){if(t?.trim())return t.trim();let o=r.CLAUDE_CODE_SESSION_ACCESS_TOKEN?.trim();if(o)return o;let i=(await Ml(b(e),n,"decode-token: reading token from stdin")).trim();if(i)return i;throw Error("decode-token: no token supplied. Pass it as an argument, pipe it on stdin, or set $CLAUDE_CODE_SESSION_ACCESS_TOKEN.")}var O=`Usage: claude self-hosted-runner decode-token [token] [options]

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
`),process.exit(1)}if(r.help)process.stdout.write(O),process.exit(0);try{let e=await v(r.token,process.env),{headerB64:n,payloadB64:o,signatureB64:i}=w(e),s=u(n,"header"),c=u(o,"payload");if(r.verify){let f=`${(r.apiUrl??p2e()).replace(/\/+$/,"")}/v1/code/.well-known/jwks.json`,{kid:p}=await m({headerB64:n,payloadB64:o,signatureB64:i,header:s,payload:c,jwksUrl:f,fetchFn:fetch,checkExpiry:r.checkExpiry}),a=r.checkExpiry?"sig+exp":"sig only, exp SKIPPED";process.stderr.write(`verified (kid=${p}, ${a})
`)}let d=r.header?s:c;process.stdout.write(`${_(d,null,2)}
`),process.exit(0)}catch(e){process.stderr.write(`${e instanceof Error?e.message:e}
`),process.exit(1)}}export{C as selfHostedRunnerDecodeTokenMain};
