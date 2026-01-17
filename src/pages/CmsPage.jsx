import { getPageBySlug } from "../lib/pageLoader";
import "./cmsPage.css";

export default function CmsPage({ slug }) {
  const page = getPageBySlug(slug);

  if (!page) {
    return (
      <div className="wrap">
        <h1>Page not found</h1>
        <p>Missing content for slug: <strong>{slug}</strong></p>
      </div>
    );
  }

  return (
    <div>
      <section className="hero">
        <div className="hero-inner">
          <h1>{page.hero_heading || page.title}</h1>
          {page.hero_subheading ? <p>{page.hero_subheading}</p> : null}
        </div>
      </section>

      <main className="wrap">
        {page.sections?.map((s, i) => (
          <section key={i} className="section">
            {s.heading ? <h2>{s.heading}</h2> : null}
            {s.body ? (
              <div
                className="body"
                dangerouslySetInnerHTML={{ __html: s.body }}
              />
            ) : null}
            {s.cta_label && s.cta_link ? (
              <a className="btn" href={s.cta_link}>
                {s.cta_label}
              </a>
            ) : null}
          </section>
        ))}
      </main>
    </div>
  );
}
