# Micro Frontend Demo

This project demonstrates a simple micro-frontend architecture using **Webpack 5 Module Federation**.

## Services

- `api-server` - Node/Express server providing mock endpoints.
- `container` - React shell application with routing and navigation.
- `login-service` - React micro-app with a login form.
- `tms-dashboard` - Angular micro-app showing transport statistics.
- `epos-dashboard` - Vue micro-app displaying sales data.

Each folder has its own `package.json` and can be developed independently.

## Mock API

Endpoints are backed by static JSON located in `mock-data/`.

| Endpoint | File |
|----------|------|
| `POST /api/auth/login` | returns `{ token: "fake-jwt" }` |
| `GET /api/tms/stats` | `mock-data/tms-stats.json` |
| `GET /api/tms/shipments` | `mock-data/tms-shipments.json` |
| `GET /api/epos/sales` | `mock-data/epos-sales.json` |

## Getting Started

From each folder run `npm install` once to install dependencies.

### Start API server
```bash
cd api-server
npm install
npm start
```
Server listens on **http://localhost:3001**.

### Start micro frontends
Each micro frontend runs on its own port:

```bash
# in separate terminals
cd login-service && npm start       # http://localhost:8081
cd tms-dashboard && npm start       # http://localhost:8082
cd epos-dashboard && npm start      # http://localhost:8083
```

### Start container shell
```bash
cd container
npm start    # http://localhost:8080
```

Navigate using these routes:

- `http://localhost:8080/login`
- `http://localhost:8080/tms`
- `http://localhost:8080/epos`

Logging in stores a fake JWT token in `localStorage` and redirects to the TMS dashboard.

This setup is intended for demonstration purposes only and omits production concerns.
