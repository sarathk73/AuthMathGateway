# AuthMathGateway

<b>AuthMathGateway is a Node.js-based API that provides a secured platform for performing basic arithmetic operations. This secure API leverages JWT (JSON Web Tokens) to ensure that all operations are performed only after successful user authentication.</b>

![Swagger UI](/images/task1.png)


## Features

- **JWT Authentication**: Implements a robust authentication system using JSON Web Tokens.
- **Arithmetic Operations API**: Provides endpoints for addition, subtraction, multiplication, and division.
- **Secure Access**: Uses JWT tokens to protect all arithmetic operation endpoints, ensuring that only authenticated users can access these services.

## Folder Structure

Below is an outline of the important files and folders included in the AuthCRUDFileManager project:

```
|-- node_modules

|-- controllers/
   |-- arithmeticController.js
|-- middlewares/
   |-- authMiddleware.js
   |-- errorHandlers.js
   |-- rateLimit.js
|-- routes/
   |-- arithmeticRoutes.js
   |-- index.js
   |--authRoutes.js
|-- validations
   |-- validationSchemas.js
|-- postman
   |--postman_collection.json
|-- server.js
|-- .gitignore
|--pacakage.json
|--package-lock.json
|-- .env
|-- .env.example

```


## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```
node.js
npm

```
### Installation

A step-by-step series of examples that tell you how to get a development environment running:

1. Clone the repository:
```bash
   git clone https://github.com/sarathk73/AuthMathGateway.git
   cd AuthMathGateway


```
Install the necessary node modules:
 ```bash
   npm install 
```


### Configuration

Configure your environment variables appropriately:
```plain
Create a .env file in the root directory and add the following:

ACCESS_TOKEN_SECRET==your-secret

PORT=3001
```
Start the server:
```
npm start or node server.js
```
The server will start on port 3001 or the next available port.

### Arithmetic Operations
- **Addition**
  `POST /api/arithmetic/add` - Adds two numbers.
- **Subtraction**
  `POST /api/arithmetic/subtract` - Subtracts two numbers.
- **Multiplication**
  `POST /api/arithmetic/multiply` - Multiplies two numbers.
- **Division**
  `POST /api/arithmetic/divide` - Divides two numbers.

### Authentication
- `POST /api/auth/register` - Register a new user.
- `POST /api/auth/login` - Login a user and receive a token.

## Postman

You can find the Postman collection in `/postman` directory to easily test the API endpoints.

### API Documentation
The API documentation is provided via Swagger, which outlines all the routes, possible parameters, and responses. Access the interactive documentation at:
```bash
http://localhost:3001/api-docs
```
Replace http://localhost:3001 with your production URL if applicable

### Versioning
We use SemVer for versioning. For the versions available, see the tags on this repository.

### Authors

- Sarath K - Initial work - [sarathk73](https://github.com/sarathk73)

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
### Acknowledgments

<ul>
   <li>Hat tip to anyone whose code was used</li>
   <li>Inspiration</li>
   <li>Etc</li>
</ul>
