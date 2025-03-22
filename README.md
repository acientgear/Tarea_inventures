# Inventures Task

URL: [34.133.72.73:3000/](http://34.133.72.73:3000/)

## Requirements

### Frontend

- Node.js
- npm

### Backend

- Java 17
- Maven

## Installation and Execution

### Frontend

To start the frontend:

1. Navigate to the `frontend` folder.
2. Run the following command in the terminal:
   ```sh
   npm install
   ```
3. To run the application, use:
   ```sh
   npm start
   ```

### Backend

To start the backend:

1. Navigate to the `backend` folder.
2. Run the following command in the terminal:
   ```sh
   mvn spring-boot:run
   ```

## Dependencies

### Frontend

- **PrimeReact**: This React variant was chosen for its extensive and well-structured documentation, as well as prior academic experience.
- **Axios**: Selected for its ease of use and error handling capabilities.

### Backend

- **MySQL Connector**: Enables connection to the MySQL database.

## Database

The application uses a MySQL database.

## Problem and Solution

### Problem

The goal of this project is to develop a full-stack URL shortener application. Several technical challenges arose during backend, frontend, and cloud deployment.

### Solution

#### Backend

- **Spring Boot**: Chosen primarily due to familiarity, which reduced the research time and accelerated development.

#### Frontend

- **User Interface (UI)**: A significant challenge was the lack of experience in web development. To address this, research was conducted, and code from a simple PrimeReact-based application was reused. This initial project retrieved data from a backend and displayed price lists in two currencies. The existing code was modified and expanded to serve as the foundation for the project. Consequently, some dependencies may be outdated.
- **URL Encoding**: Technical knowledge of encoding methods was required for URL shortening, leading to research on various implementation approaches.

#### Deployment

- **Cloud Database**: The database needed to be persistent and hosted in the cloud. Various providers offering free-tier options were evaluated, and **Google Cloud** was selected for its \$300 USD initial credit for new users.
- **Cloud SQL**:
  - **First challenge**: As a cloud-based database, external connections were restricted. The solution was to whitelist the local machine’s IP address in Google Cloud.
  - **Second challenge**: When deploying the backend on Google Cloud, database connectivity failed due to a missing dependency. The solution was to add the virtual machine’s IP address to the whitelist.
- **Frontend**:
  - When deploying the frontend alongside the backend in the cloud, connection directives were not properly transmitted. A temporary solution was implemented by setting the backend URL as a global constant in the frontend and replacing it with the backend server’s IP. This approach was taken due to time constraints.

## Completed Features

This project meets the following requirements:

- **100%** Implementation of a **full-stack** URL shortener application.
- **100%** Backend developed with **Spring Boot**, connected to a **MySQL cloud database**.
- **100%** Frontend built with **React and PrimeReact** for the user interface.
- **100%** Deployment in the cloud using **Google Cloud**.
- **100%** Security configuration for cloud database connections.
- **50%** Adaptation of the frontend to properly connect with the deployed backend.
- **0%** Custom URL functionality.
  - Due to time constraints and lack of experience, the server URL was not customized.
- **100%** Implementation of custom suffixes in shortened URLs.
  - The application allows users to specify a custom suffix and checks if it is already in use. If no suffix is provided, a random one is generated.

## Considerations

- Original URLs are not unique, allowing for future user accounts where each user can shorten their own URLs.
- The suffix is unique, and shortened URLs include a timestamp.
- In this version, the expiration time for suffixes is not renewed, meaning that once a suffix is taken, it cannot be reused.
