import './NotFoundPage.scss';

export function NotFoundPage() {
  return (
    <section className="section-not-found error">
      <p className="error__status">404</p>
      <h2 className="error__message">Oops something went wrong</h2>
      <p className="error__type">Page not found</p>
      <a className="homepage-link" href="/">
        Back to Home
      </a>
    </section>
  );
}
