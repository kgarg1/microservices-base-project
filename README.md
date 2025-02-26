# Microservices Basic Platform

This project is a **microservices-based Basic platform** built using **Node.js, MongoDB, and React**. It follows a scalable architecture with independent services communicating through an **API Gateway**.

## 🛠️ Tech Stack

- **Backend:** Node.js (Express.js)  
- **Frontend:** React.js  
- **Database:** MongoDB  
- **API Gateway:** Handles authentication and service routing  
- **Containerization:** Docker & Docker Compose  

## 📌 Services

### 1. Auth Service (Port: 5000)
- Manages user authentication and authorization
- Uses JWT for secure authentication

### 2. Product Service (Port: 5001)
- Handles product-related operations (CRUD)
- Stores product data in MongoDB

### 3. API Gateway (Port: 3030)
- Routes requests to respective microservices
- Ensures secure communication between services

### 4. MongoDB (Port: 27017)
- Central database for storing user and product data

### 5. Frontend (Port: 3000)
- React.js UI for users to browse products and authenticate

## 🚀 How to Run

### Clone the repository:
```bash
git clone https://github.com/kgarg1/microservices-base-project.git  
cd microservices_project 
```

### Start the services using Docker Compose:
```bash
docker-compose up --build  
```

### Access the application:
- **Frontend:** [http://localhost:3000](http://localhost:3000)  
- **API Gateway:** [http://localhost:3030](http://localhost:3030)  

---
Feel free to contribute or raise issues for improvements! 🚀

