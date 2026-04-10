import "./App.css";

function App() {
  return (
    <div className="app-shell">
      <main className="app-page">
        <header className="app-header">
          <div className="app-header__title">
            <h1>Starter Kit React + SharePoint</h1>
            <p>
              Base oficial para sistemas internos com React, TypeScript, Vite e
              SharePoint Lists.
            </p>
          </div>
        </header>

        <section className="app-content">
          <div className="app-card">
            <div className="app-card__body">
              <h2 className="app-section-title">Área principal</h2>
              <div className="app-placeholder">
                <div className="app-placeholder__line app-placeholder__line--lg" />
                <div className="app-placeholder__line" />
                <div className="app-placeholder__line" />
                <div className="app-placeholder__line" />
                <div className="app-placeholder__line" />
              </div>
            </div>
          </div>

          <aside className="app-aside">
            <div className="app-card">
              <div className="app-card__body">
                <h2 className="app-section-title">Resumo</h2>
                <div className="app-placeholder">
                  <div className="app-placeholder__line" />
                  <div className="app-placeholder__line" />
                  <div className="app-placeholder__line" />
                </div>
              </div>
            </div>

            <div className="app-card">
              <div className="app-card__body">
                <h2 className="app-section-title">Próximos passos</h2>
                <div className="app-placeholder">
                  <div className="app-placeholder__line" />
                  <div className="app-placeholder__line" />
                </div>
              </div>
            </div>
          </aside>
        </section>
      </main>
    </div>
  );
}

export default App;
