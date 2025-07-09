import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Login</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css"
          integrity="sha384-GnbkxGSUYgt9H06+nE3pHg0YPgrsEm9p9QwRnMpaU8fZjvL5Nwr6x9nEPI1V8+01"
          crossOrigin="anonymous"
        />
      </Head>
      <div className="container mt-5" style={{ maxWidth: '400px' }}>
        <h1 className="mb-4">Login</h1>
        <form>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="form-control"
              aria-describedby="emailHelp"
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="form-control"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary w-100">
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}
