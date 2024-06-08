# 技術記事閲覧サイト

https://shiminori-tec-articles.onrender.com/

## Setup

Make sure to install the dependencies:

```bash
npm install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
npm run dev
```

### Lint

Executing Lint:

```bash
npm run lint
```

### Unit Test

Executing Unit Test:

```bash
npm run test:ut
```

### VRT

Executing VRT:

```bash
# Image pull
docker pull mcr.microsoft.com/playwright:v1.43.1-jammy

# Docker run
docker run --rm --network host -v $(pwd):/work/ -w /work/ -it mcr.microsoft.com/playwright:v1.43.1-jammy /bin/bash

---

# Install dependencies
root@docker-desktop:/work# npm ci

# Install Playwright Browsers
root@docker-desktop:/work# npx playwright install --with-deps chrome msedge

# Build in VRT mode
root@docker-desktop:/work# npm run build:vrt

# Executing VRT
root@docker-desktop:/work# npm run test:vrt

# Update Snapshots
root@docker-desktop:/work# npm run test:vrt:us
```

### Format

Perform file formatting:

```bash
npm run format
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

## Deploy

Server: [Render](https://dashboard.render.com/)
