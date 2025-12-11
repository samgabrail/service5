# service5

Order processing microservice for the TechCorp e-commerce platform. Handles order creation, status tracking, and fulfillment integration.

## Overview

This service is part of the **system:default/customer-portal** system.

**Owner:** group:default/developers

## Endpoints

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/` | GET | Welcome message |
| `/health` | GET | Health check |
| `/ready` | GET | Readiness check |
| `/api/v1/status` | GET | Service status |

## Development

Start the service locally:

    npm install
    npm run dev

Run tests:

    npm test

## Deployment

This service is deployed via GitOps using ArgoCD.

Push changes to the `main` branch to trigger:
1. GitHub Actions runs tests
2. Docker image is built and pushed to GHCR
3. Kubernetes manifests are updated
4. ArgoCD syncs the changes to the cluster
