import home from "../content/pages/home.json";
import "./App.css";

export default function App() {
  return (
    <div className="page">
      <header className="hero">
        <h1>{home.hero_heading}</h1>
        <p className="hero-sub">{home.hero_subheading}</p>
      </header>

      <main className="container">
        {home.sections?.map((s, i) => (
          <section key={i} className="section">
            <h2>{s.heading}</h2>
            {s.body && (
              <div
                className="body"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            )}
            {s.cta_label && s.cta_link && (
              <a className="btn" href={s.cta_link}>
                {s.cta_label}
              </a>
            )}
          </section>
        ))}
      </main>
    </div>
  );
}
