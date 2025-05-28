# Alex Kurata Resume Website v2

Resume website hosted on [CloudFlare](https://dash.cloudflare.com/b366b20cbdebe9d473d6d718912f0c0a/pages/view/resume-website-v2) and deployed to [alexkurata.com](https://alexkurata.com)

## Getting Started

### Installation

Install the dependencies:

```bash
bun install
```

### Development

Start the development server with HMR:

```bash
bun dev
```

Your application will be available at `http://localhost:5173`.

## Building for Production

Create a production build:

```bash
bun run build
```

Outputs `build/client` directory statically compiled (SSG) assets for hosting.

## Deployment

### Cloudflare Pages

CI/CD configured through CloudFlare pages site.

This will automatically build and deploy the `main` branch using the `wrangler.toml` file.
