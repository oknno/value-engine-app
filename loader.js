(function () {
  const APP_CONTAINER_ID = "static-mirror";
  const APP_BASE_URL = window.__APP_BASE_URL__ || "";
  const MANIFEST_URL = `${APP_BASE_URL}/manifest.json`;

  function renderError(message) {
    const container =
      document.getElementById(APP_CONTAINER_ID) || document.body;
    const errorBox = document.createElement("div");
    errorBox.style.padding = "16px";
    errorBox.style.margin = "16px";
    errorBox.style.background = "#fff4f4";
    errorBox.style.border = "1px solid #f1caca";
    errorBox.style.borderRadius = "8px";
    errorBox.style.color = "#7f1d1d";
    errorBox.style.fontFamily = "'Segoe UI', Arial, sans-serif";
    errorBox.textContent = message;
    container.appendChild(errorBox);
  }

  async function loadJson(url) {
    const response = await fetch(url, { cache: "no-store" });
    if (!response.ok) {
      throw new Error(`Falha ao carregar ${url}`);
    }
    return response.json();
  }

  function ensureContainer() {
    const container = document.getElementById(APP_CONTAINER_ID);
    if (!container) {
      throw new Error(
        `Container #${APP_CONTAINER_ID} não encontrado. Verifique o Script Editor no SharePoint.`,
      );
    }
    return container;
  }

  function loadCss(href) {
    return new Promise((resolve, reject) => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = href;
      link.onload = resolve;
      link.onerror = () => reject(new Error(`Falha ao carregar CSS: ${href}`));
      document.head.appendChild(link);
    });
  }

  function loadJs(src) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.type = "module";
      script.src = src;
      script.onload = resolve;
      script.onerror = () => reject(new Error(`Falha ao carregar JS: ${src}`));
      document.body.appendChild(script);
    });
  }

  async function bootstrap() {
    if (!APP_BASE_URL) {
      throw new Error(
        "APP_BASE_URL não definido. Configure window.__APP_BASE_URL__ antes de carregar o loader.",
      );
    }

    ensureContainer();

    const manifest = await loadJson(MANIFEST_URL);
    const entry = manifest["index.html"];

    if (!entry || !entry.file) {
      throw new Error("Entrada index.html não encontrada no manifest.");
    }

    if (Array.isArray(entry.css)) {
      for (const cssFile of entry.css) {
        await loadCss(`${APP_BASE_URL}/${cssFile}`);
      }
    }

    await loadJs(`${APP_BASE_URL}/${entry.file}`);
  }

  bootstrap().catch((error) => {
    console.error("Erro ao carregar aplicação:", error);
    renderError(
      "Não foi possível carregar a aplicação. Verifique o manifest, o APP_BASE_URL e os arquivos publicados.",
    );
  });
})();
