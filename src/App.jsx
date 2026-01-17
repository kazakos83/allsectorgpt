import home from "../content/pages/home.json";

export default function App() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: 24 }}>
      <h1>{home.hero_heading}</h1>
      <p>{home.hero_subheading}</p>

      {home.sections?.map((s, i) => (
        <section key={i} style={{ marginTop: 24 }}>
          <h2>{s.heading}</h2>
          <div dangerouslySetInnerHTML={{ __html: s.body || "" }} />
          {s.cta_label && s.cta_link ? (
            <p><a href={s.cta_link}>{s.cta_label}</a></p>
          ) : null}
        </section>
      ))}
    </div>
  );
}
