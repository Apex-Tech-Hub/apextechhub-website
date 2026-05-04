# Apex Tech Hub Enterprise Website

This repository contains the source code and deployment configurations for the official **Apex Tech Hub** website. The platform is designed for high performance, scalability, and seamless integration with an automated deployment pipeline.

## System Architecture
The application is built using a modern full-stack approach, containerized for environment consistency and managed through a robust CI/CD workflow.

*   **Frontend:** Next.js (TypeScript) - Optimized for SEO and rapid user interaction.
*   **Reverse Proxy:** Nginx - Handles SSL termination and traffic routing.
*   **Infrastructure:** Dockerized environments hosted on a Linux VPS.
*   **Deployment:** Automated via GitHub Actions using SSH-based remote execution.

---

## Getting Started

### Prerequisites
*   Docker and Docker Compose
*   Node.js v20 or higher
*   A valid SSH configuration for remote deployment

### Local Development
1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/Apex-Tech-Hub/apextechhub-website.git](https://github.com/Apex-Tech-Hub/apextechhub-website.git)
    cd apextechhub-website
    ```

2.  **Environment Configuration:**
    Create a `.env.local` file in the root directory to manage local environment variables:
    ```env
    NEXT_PUBLIC_API_URL=http://localhost:5000
    NODE_ENV=development
    ```

3.  **Run the Application:**
    ```bash
    docker-compose up --build
    ```

---

## CI/CD and Deployment

The project utilizes GitHub Actions to maintain a continuous deployment cycle. On every push to the main branch, the following automated steps occur:

1.  **Build:** A production-ready Docker image is created.
2.  **Registry:** The image is pushed to the GitHub Container Registry (GHCR).
3.  **Deploy:** The runner establishes a secure SSH connection to the VPS, pulls the updated image, and restarts the service containers.

### Manual Service Management
If manual intervention is required on the VPS, use the following commands:
*   **View Logs:** `docker logs -f nextjs-app`
*   **Restart Service:** `docker restart nextjs-app`
*   **Verify Port Mapping:** `sudo lsof -i :3000`

---

## Security and Maintenance

### Firewall Configuration
The production server utilizes UFW (Uncomplicated Firewall) to restrict access. Ensure the following ports are managed:
*   **Port 22:** Restricted for SSH access.
*   **Ports 80/443:** Open for standard web traffic.
*   **Port 3000:** Internal application port, proxied via Nginx.

### Infrastructure Health
Regularly monitor system resources to prevent deployment failures:
*   **Disk Space:** `df -h`
*   **Memory Usage:** `free -m`
*   **Active Connections:** `sudo netstat -tulpn`

---

## About Apex Tech Hub
Apex Tech Hub is dedicated to delivering high-quality technical solutions and digital transformations. This repository represents the core digital presence of the organization, focusing on clean architecture and reliable service delivery.

**Lead Maintainer:** Ibrar Ali
**Last Updated:** May 2026