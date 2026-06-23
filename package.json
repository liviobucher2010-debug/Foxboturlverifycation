<!DOCTYPE html>
<html lang="de">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Railway – Code einfügen für Fox Bot</title>
  <meta name="description" content="Schritt-für-Schritt-Anleitung, wie du den Discord Interactions Code für deinen Bot bei Railway und GitHub einfügst." />
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Syne:wght@700;800&family=Manrope:wght@400;500;700;800&display=swap" rel="stylesheet">
  <style>
    :root{
      --bg:#f6f1e8;
      --paper:#fffaf1;
      --ink:#171411;
      --muted:#6f665c;
      --line:rgba(23,20,17,.12);
      --accent:#c85c2f;
      --accent-2:#e1a458;
      --accent-3:#2d6a4f;
      --shadow:0 20px 60px rgba(61,39,20,.10);
      --radius:26px;
      --radius-sm:18px;
      --max:1180px;
    }

    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      color:var(--ink);
      background:
        radial-gradient(circle at 10% 10%, rgba(200,92,47,.10), transparent 28%),
        radial-gradient(circle at 90% 15%, rgba(225,164,88,.14), transparent 24%),
        linear-gradient(180deg, #f8f3eb 0%, #f4efe6 100%);
      font-family:"Manrope", sans-serif;
      line-height:1.6;
    }

    body::before{
      content:"";
      position:fixed;
      inset:0;
      pointer-events:none;
      opacity:.32;
      background:
        linear-gradient(rgba(23,20,17,.03) 1px, transparent 1px),
        linear-gradient(90deg, rgba(23,20,17,.03) 1px, transparent 1px);
      background-size:24px 24px;
      mask-image:linear-gradient(to bottom, rgba(0,0,0,.8), transparent 85%);
    }

    .wrap{width:min(calc(100% - 2rem), var(--max)); margin-inline:auto}
    .reveal{opacity:0; transform:translateY(24px); transition:opacity .7s ease, transform .7s ease}
    .reveal.visible{opacity:1; transform:none}

    header{
      position:sticky;
      top:0;
      z-index:20;
      background:rgba(248,243,235,.72);
      backdrop-filter:blur(14px);
      border-bottom:1px solid var(--line);
    }

    .nav{
      min-height:74px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:1rem;
    }

    .brand{
      display:flex;
      align-items:center;
      gap:.85rem;
      text-decoration:none;
      color:var(--ink);
      font-weight:800;
      letter-spacing:.01em;
    }

    .brand-mark{
      width:44px;
      height:44px;
      border-radius:14px;
      background:
        radial-gradient(circle at 30% 30%, #ffd9b5, transparent 30%),
        linear-gradient(135deg, var(--accent-2), var(--accent));
      box-shadow:0 12px 28px rgba(200,92,47,.22);
      position:relative;
    }

    .brand-mark::after{
      content:"";
      position:absolute;
      inset:10px;
      border-radius:10px;
      background:rgba(255,250,241,.92);
      box-shadow:inset 0 0 0 1px rgba(23,20,17,.08);
    }

    .nav-links{
      display:flex;
      gap:1rem;
      flex-wrap:wrap;
    }

    .nav-links a{
      text-decoration:none;
      color:var(--muted);
      font-weight:700;
      font-size:.95rem;
      transition:.2s ease;
    }

    .nav-links a:hover{color:var(--ink)}

    .hero{
      padding:clamp(3.2rem, 6vw, 6rem) 0 2rem;
    }

    .hero-grid{
      display:grid;
      grid-template-columns:1.1fr .9fr;
      gap:1rem;
      align-items:stretch;
    }

    .hero-copy,
    .hero-side,
    .panel{
      background:rgba(255,250,241,.72);
      border:1px solid rgba(23,20,17,.09);
      border-radius:var(--radius);
      box-shadow:var(--shadow);
      overflow:hidden;
      position:relative;
    }

    .hero-copy{
      padding:clamp(1.4rem, 3vw, 2.5rem);
      display:flex;
      flex-direction:column;
      justify-content:space-between;
      min-height:520px;
    }

    .eyebrow{
      display:inline-flex;
      align-items:center;
      gap:.55rem;
      text-transform:uppercase;
      letter-spacing:.15em;
      font-size:.8rem;
      font-weight:800;
      color:var(--accent);
    }

    .eyebrow::before{
      content:"";
      width:10px;
      height:10px;
      border-radius:999px;
      background:var(--accent);
      box-shadow:0 0 0 6px rgba(200,92,47,.12);
    }

    h1,h2,h3{
      font-family:"Syne", sans-serif;
      line-height:.95;
      letter-spacing:-.04em;
      margin:0;
    }

    h1{
      margin-top:1rem;
      font-size:clamp(3rem, 8vw, 6.3rem);
      max-width:9ch;
    }

    .lead{
      margin-top:1.2rem;
      max-width:60ch;
      color:var(--muted);
      font-size:clamp(1rem, 1.5vw, 1.08rem);
    }

    .cta{
      display:flex;
      gap:.85rem;
      flex-wrap:wrap;
      margin-top:1.6rem;
    }

    .btn{
      appearance:none;
      border:none;
      text-decoration:none;
      cursor:pointer;
      border-radius:999px;
      padding:.95rem 1.2rem;
      font:inherit;
      font-weight:800;
      transition:transform .18s ease, box-shadow .25s ease, background .25s ease;
      display:inline-flex;
      align-items:center;
      gap:.55rem;
    }

    .btn:active{transform:translateY(1px) scale(.99)}
    .btn-primary{
      color:#fffaf1;
      background:linear-gradient(135deg, var(--accent), #a44622);
      box-shadow:0 14px 28px rgba(200,92,47,.22);
    }
    .btn-primary:hover{transform:translateY(-2px)}
    .btn-secondary{
      color:var(--ink);
      background:rgba(255,255,255,.55);
      border:1px solid rgba(23,20,17,.09);
    }
    .btn-secondary:hover{transform:translateY(-2px); background:#fff}

    .meta{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:.8rem;
      margin-top:1.8rem;
    }

    .meta div{
      padding:1rem;
      border-radius:18px;
      background:rgba(255,255,255,.45);
      border:1px solid rgba(23,20,17,.08);
    }

    .meta strong{
      display:block;
      font-size:1.3rem;
    }

    .meta span{
      color:var(--muted);
      font-size:.92rem;
    }

    .hero-side{
      padding:1rem;
      display:grid;
      gap:1rem;
      min-height:520px;
      background:
        radial-gradient(circle at top right, rgba(225,164,88,.18), transparent 30%),
        rgba(255,250,241,.76);
    }

    .chalk{
      background:#1b1916;
      color:#f4ecdf;
      border-radius:22px;
      padding:1rem;
      border:1px solid rgba(255,255,255,.08);
      min-height:0;
      display:flex;
      flex-direction:column;
    }

    .chalk-bar{
      display:flex;
      gap:.45rem;
      margin-bottom:.8rem;
    }

    .dot{
      width:10px;
      height:10px;
      border-radius:999px;
      background:#666;
    }
    .dot:nth-child(1){background:#ff6b6b}
    .dot:nth-child(2){background:#ffd166}
    .dot:nth-child(3){background:#4cd137}

    pre{
      margin:0;
      white-space:pre-wrap;
      word-break:break-word;
      font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace;
      font-size:.93rem;
      line-height:1.6;
      overflow:auto;
    }

    code.inline{
      background:rgba(23,20,17,.06);
      border:1px solid rgba(23,20,17,.08);
      padding:.16rem .45rem;
      border-radius:8px;
      font-size:.95em;
    }

    section{padding:1rem 0 3rem}

    .section-head{
      display:grid;
      grid-template-columns:.9fr 1.1fr;
      gap:2rem;
      align-items:end;
      margin-bottom:1.2rem;
    }

    .section-head p{margin:0; color:var(--muted)}

    .grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:1rem;
    }

    .panel{padding:1.2rem}

    .steps{
      display:grid;
      gap:.85rem;
      counter-reset:step;
    }

    .step{
      display:grid;
      grid-template-columns:auto 1fr;
      gap:.95rem;
      align-items:start;
      padding:1rem;
      border-radius:20px;
      background:rgba(255,255,255,.46);
      border:1px solid rgba(23,20,17,.08);
    }

    .step::before{
      counter-increment:step;
      content:counter(step, decimal-leading-zero);
      width:42px;
      height:42px;
      border-radius:14px;
      display:grid;
      place-items:center;
      font-weight:800;
      color:#fffaf1;
      background:linear-gradient(135deg, var(--accent-2), var(--accent));
      box-shadow:0 10px 22px rgba(200,92,47,.16);
    }

    .step h3{
      font-size:1.08rem;
      margin-bottom:.2rem;
    }

    .step p{
      margin:0;
      color:var(--muted);
    }

    .code{
      border-radius:22px;
      overflow:hidden;
      background:#191714;
      color:#f8f2e8;
      border:1px solid rgba(255,255,255,.08);
    }

    .code-head{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:1rem;
      padding:.9rem 1rem;
      background:rgba(255,255,255,.05);
      border-bottom:1px solid rgba(255,255,255,.08);
    }

    .copy{
      border:none;
      cursor:pointer;
      border-radius:999px;
      padding:.65rem .95rem;
      font:inherit;
      font-weight:800;
      background:#2b2824;
      color:#fffaf1;
      border:1px solid rgba(255,255,255,.08);
      transition:.2s ease;
    }

    .copy:hover{transform:translateY(-1px); background:#37332e}
    .copy.done{background:var(--accent-3)}

    .code pre{padding:1rem; max-height:620px; overflow:auto}

    .note{
      border-left:4px solid var(--accent);
      background:rgba(200,92,47,.08);
      padding:1rem 1rem 1rem 1.1rem;
      border-radius:0 16px 16px 0;
      color:#714124;
    }

    footer{
      padding:2rem 0 3rem;
      color:var(--muted);
    }

    .footer-box{
      border-top:1px solid var(--line);
      padding-top:1.25rem;
      display:flex;
      justify-content:space-between;
      gap:1rem;
      flex-wrap:wrap;
    }

    @media (max-width: 920px){
      .hero-grid,
      .section-head,
      .grid,
      .meta{
        grid-template-columns:1fr;
      }
      .hero-copy,.hero-side{min-height:auto}
    }

    @keyframes rise{
      from{opacity:0; transform:translateY(24px)}
      to{opacity:1; transform:none}
    }

    .stagger > *{
      opacity:0;
      animation:rise .8s ease forwards;
    }
    .stagger > *:nth-child(1){animation-delay:.05s}
    .stagger > *:nth-child(2){animation-delay:.14s}
    .stagger > *:nth-child(3){animation-delay:.23s}
    .stagger > *:nth-child(4){animation-delay:.32s}
    .stagger > *:nth-child(5){animation-delay:.41s}
  </style>
</head>
<body>
  <header>
    <div class="wrap nav">
      <a href="#top" class="brand" aria-label="Start">
        <span class="brand-mark" aria-hidden="true"></span>
        <span>Railway Hilfe</span>
      </a>
      <nav class="nav-links" aria-label="Navigation">
        <a href="#github">GitHub</a>
        <a href="#railway">Railway</a>
        <a href="#discord">Discord URL</a>
      </nav>
    </div>
  </header>

  <main id="top">
    <section class="hero">
      <div class="wrap hero-grid">
        <article class="hero-copy stagger">
          <div>
            <span class="eyebrow">Ganz einfach</span>
            <h1>So fügst du den Code bei Railway ein</h1>
            <p class="lead">
              Wichtig: Meist fügt man den Code <strong>nicht direkt in Railway</strong> ein,
              sondern in <strong>GitHub</strong>. Railway zieht den Code dann automatisch aus deinem Repository
              und deployed ihn neu.
            </p>
          </div>

          <div>
            <div class="cta">
              <a href="#github" class="btn btn-primary">Zu GitHub-Schritten</a>
              <a href="#railway" class="btn btn-secondary">Zu Railway-Schritten</a>
            </div>

            <div class="meta">
              <div>
                <strong>1</strong>
                <span><code class="inline">index.js</code> in GitHub öffnen</span>
              </div>
              <div>
                <strong>2</strong>
                <span>Code ersetzen und committen</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Railway deployed automatisch</span>
              </div>
            </div>
          </div>
        </article>

        <aside class="hero-side stagger">
          <div class="chalk">
            <div class="chalk-bar" aria-hidden="true">
              <span class="dot"></span>
              <span class="dot"></span>
              <span class="dot"></span>
            </div>
            <pre>GitHub öffnen
→ Repository: Foxboturlverifycation
→ index.js anklicken
→ Stift / Edit drücken
→ alten Code löschen
→ neuen Code einfügen
→ Commit changes

Railway
→ deployed automatisch
→ dann Discord URL eintragen</pre>
          </div>
          <div class="note">
            Wenn dein Railway-Service mit GitHub verbunden ist, musst du fast immer
            <strong>nur GitHub bearbeiten</strong>.
          </div>
        </aside>
      </div>
    </section>

    <section id="github">
      <div class="wrap">
        <div class="section-head reveal">
          <h2>So fügst du den Code richtig ein</h2>
          <p>
            Das ist der einfachste Weg. Du bearbeitest direkt die Datei in deinem GitHub-Repository.
          </p>
        </div>

        <div class="grid">
          <div class="panel reveal">
            <div class="steps">
              <div class="step">
                <div>
                  <h3>GitHub öffnen</h3>
                  <p>Öffne dein Repository:<br><code class="inline">liviobucher2010-debug/Foxboturlverifycation</code></p>
                </div>
              </div>
              <div class="step">
                <div>
                  <h3>Datei index.js anklicken</h3>
                  <p>Suche in der Dateiliste nach <code class="inline">index.js</code> und öffne sie.</p>
                </div>
              </div>
              <div class="step">
                <div>
                  <h3>Auf den Stift klicken</h3>
                  <p>Klicke oben rechts auf <strong>Edit</strong> oder das Stift-Symbol.</p>
                </div>
              </div>
              <div class="step">
                <div>
                  <h3>Alten Inhalt löschen</h3>
                  <p>Markiere alles in <code class="inline">index.js</code> und lösche es komplett.</p>
                </div>
              </div>
              <div class="step">
                <div>
                  <h3>Neuen Code einfügen</h3>
                  <p>Füge den neuen Discord-Interactions-Code ein.</p>
                </div>
              </div>
              <div class="step">
                <div>
                  <h3>Commit Changes</h3>
                  <p>Unten auf <strong>Commit changes</strong> klicken. Railway deployt dann automatisch neu.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="panel reveal">
            <h3 style="margin-bottom:.8rem;">Direktlink zu deinem Repo</h3>
            <div class="code">
              <div class="code-head">
                <strong>GitHub Repository</strong>
                <button class="copy" data-copy-target="repoLink">Link kopieren</button>
              </div>
              <pre id="repoLink">https://github.com/liviobucher2010-debug/Foxboturlverifycation</pre>
            </div>

            <div style="height:1rem"></div>

            <h3 style="margin-bottom:.8rem;">Was du in index.js einfügst</h3>
            <div class="code">
              <div class="code-head">
                <strong>index.js</strong>
                <button class="copy" data-copy-target="indexCode">Code kopieren</button>
              </div>
              <pre id="indexCode">const express = require("express");
const { verifyKey } = require("discord-interactions");

const app = express();
const PORT = process.env.PORT || 3000;
const PUBLIC_KEY = process.env.DISCORD_PUBLIC_KEY;

app.use(
  express.json({
    verify: (req, res, buf) => {
      req.rawBody = buf.toString("utf8");
    },
  })
);

app.post("/interactions", (req, res) => {
  const signature = req.get("X-Signature-Ed25519");
  const timestamp = req.get("X-Signature-Timestamp");

  if (!signature || !timestamp) {
    return res.status(401).send("Fehlende Discord-Signatur");
  }

  const isValidRequest = verifyKey(
    req.rawBody,
    signature,
    timestamp,
    PUBLIC_KEY
  );

  if (!isValidRequest) {
    return res.status(401).send("Ungültige Anfrage-Signatur");
  }

  const interaction = req.body;

  if (interaction.type === 1) {
    return res.json({ type: 1 });
  }

  return res.json({
    type: 4,
    data: {
      content: "Fox Bot läuft erfolgreich über Interactions."
    }
  });
});

app.get("/", (req, res) => {
  res.send("Fox Bot Server läuft.");
});

app.listen(PORT, () => {
  console.log(`Server läuft auf Port ${PORT}`);
});</pre>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="railway">
      <div class="wrap">
        <div class="section-head reveal">
          <h2>Was du danach in Railway machst</h2>
          <p>
            Wenn GitHub gespeichert ist, musst du in Railway nur noch prüfen, ob alles deployed wurde und die Variable gesetzt ist.
          </p>
        </div>

        <div class="grid">
          <div class="panel reveal">
            <div class="steps">
              <div class="step">
                <div>
                  <h3>Variables öffnen</h3>
                  <p>In deinem Service auf <code class="inline">Variables</code> klicken.</p>
                </div>
              </div>
              <div class="step">
                <div>
                  <h3>Public Key eintragen</h3>
                  <p>Neue Variable anlegen:<br><code class="inline">DISCORD_PUBLIC_KEY</code></p>
                </div>
              </div>
              <div class="step">
                <div>
                  <h3>Wert einfügen</h3>
                  <p>Als Wert diesen Public Key einfügen:<br><code class="inline">f3ff25021778461329409058c4aea0f8f161d9885d2edb9cb3f48b51c7483ec5</code></p>
                </div>
              </div>
              <div class="step">
                <div>
                  <h3>Deployment prüfen</h3>
                  <p>Unter <code class="inline">Deployments</code> schauen, ob der neue Deploy erfolgreich ist.</p>
                </div>
              </div>
            </div>
          </div>

          <div class="panel reveal">
            <div class="code">
              <div class="code-head">
                <strong>Railway Variable</strong>
                <button class="copy" data-copy-target="railVar">Kopieren</button>
              </div>
              <pre id="railVar">Name: DISCORD_PUBLIC_KEY
Value: f3ff25021778461329409058c4aea0f8f161d9885d2edb9cb3f48b51c7483ec5</pre>
            </div>

            <div style="height:1rem"></div>

            <div class="note">
              Falls Railway nicht automatisch neu deployed, kannst du im Service unter
              <strong>Deployments</strong> manuell einen neuen Deploy starten oder einfach nochmal eine kleine Änderung in GitHub committen.
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="discord">
      <div class="wrap">
        <div class="section-head reveal">
          <h2>Danach in Discord einfügen</h2>
          <p>Wenn der Deploy fertig ist, nimm genau diese URL für deine Interaktions-Endpunkt-URL.</p>
        </div>

        <div class="panel reveal">
          <div class="code">
            <div class="code-head">
              <strong>Discord Interaktions-Endpunkt-URL</strong>
              <button class="copy" data-copy-target="discordUrl">URL kopieren</button>
            </div>
            <pre id="discordUrl">https://foxboturlverifycation-production.up.railway.app/interactions</pre>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="wrap footer-box">
      <span>Fox Bot Anleitung</span>
      <span>GitHub → Railway → Discord</span>
    </div>
  </footer>

  <script>
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.12 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    document.querySelectorAll('[data-copy-target]').forEach(btn => {
      btn.addEventListener('click', async () => {
        const target = document.getElementById(btn.dataset.copyTarget);
        const text = target.innerText;
        const old = btn.textContent;
        try {
          await navigator.clipboard.writeText(text);
          btn.textContent = "Kopiert";
          btn.classList.add("done");
          setTimeout(() => {
            btn.textContent = old;
            btn.classList.remove("done");
          }, 1500);
        } catch {
          btn.textContent = "Fehler";
        }
      });
    });
  </script>
</body>
</html>
