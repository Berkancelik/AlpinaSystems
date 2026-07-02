// Statik onizleme sunucusu: "out/" klasorunu yerel HTTP uzerinden sunar.
// Kullanim: node scripts/preview-server.js [--open]
// Bagimlilik yok; Node.js kurulu olmasi yeterli.

const http = require("http");
const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const OUT_DIR = path.join(__dirname, "..", "out");
const START_PORT = 4173;
const OPEN_BROWSER = process.argv.includes("--open");

const MIME = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".avif": "image/avif",
  ".gif": "image/gif",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".webmanifest": "application/manifest+json",
};

function send(res, status, filePath) {
  const ext = path.extname(filePath).toLowerCase();
  const headers = { "Content-Type": MIME[ext] || "application/octet-stream" };
  // Parmak izli (hash'li) statik dosyalar hic degismez: agresif cache.
  headers["Cache-Control"] = filePath.includes(`${path.sep}_next${path.sep}static${path.sep}`)
    ? "public, max-age=31536000, immutable"
    : "no-cache";
  res.writeHead(status, headers);
  fs.createReadStream(filePath).pipe(res);
}

function resolveFile(urlPath) {
  let pathname;
  try {
    pathname = decodeURIComponent(urlPath.split("?")[0].split("#")[0]);
  } catch {
    return null;
  }
  const safe = path.normalize(pathname).replace(/^([.][.][\\/])+/, "");
  let filePath = path.join(OUT_DIR, safe);
  if (!filePath.startsWith(OUT_DIR)) return null; // klasor disina cikma girisimi

  if (fs.existsSync(filePath)) {
    if (fs.statSync(filePath).isDirectory()) {
      const index = path.join(filePath, "index.html");
      return fs.existsSync(index) ? index : null;
    }
    return filePath;
  }
  // trailingSlash olmadan gelen istekler: /blog -> /blog/index.html
  const asIndex = path.join(filePath, "index.html");
  if (fs.existsSync(asIndex)) return asIndex;
  const asHtml = `${filePath}.html`;
  if (fs.existsSync(asHtml)) return asHtml;
  return null;
}

if (!fs.existsSync(path.join(OUT_DIR, "index.html"))) {
  console.error('HATA: "out" klasoru bulunamadi. Once "npm run build" calistirin.');
  process.exit(1);
}

const server = http.createServer((req, res) => {
  const filePath = resolveFile(req.url || "/");
  if (filePath) {
    send(res, 200, filePath);
    return;
  }
  const notFound = path.join(OUT_DIR, "404.html");
  if (fs.existsSync(notFound)) {
    send(res, 404, notFound);
  } else {
    res.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    res.end("404 - Sayfa bulunamadi");
  }
});

function listen(port, attemptsLeft) {
  server.once("error", (err) => {
    if (err.code === "EADDRINUSE" && attemptsLeft > 0) {
      listen(port + 1, attemptsLeft - 1);
    } else {
      console.error("Sunucu baslatilamadi:", err.message);
      process.exit(1);
    }
  });
  server.listen(port, () => {
    const url = `http://localhost:${port}/`;
    console.log(`Alpina Systems sitesi yayinda: ${url}`);
    console.log("Kapatmak icin bu pencerede Ctrl+C basin veya pencereyi kapatin.");
    if (OPEN_BROWSER && process.platform === "win32") {
      exec(`start "" "${url}"`);
    }
  });
}

listen(START_PORT, 10);
