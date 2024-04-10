# AuthMathGateway

<b>AuthMathGateway is a Node.js-based API that provides a secured platform for performing basic arithmetic operations. This secure API leverages JWT (JSON Web Tokens) to ensure that all operations are performed only after successful user authentication.</b>

![Swagger UI](/images/task1.png)


## Features

- **JWT Authentication**: Implements a robust authentication system using JSON Web Tokens.
- **Arithmetic Operations API**: Provides endpoints for addition, subtraction, multiplication, and division.
- **Secure Access**: Uses JWT tokens to protect all arithmetic operation endpoints, ensuring that only authenticated users can access these services.

## Endpoints

- **Addition**: `POST /add`
    - Accepts two input numbers and returns their sum.

- **Subtraction**: `POST /subtract`
    - Accepts two input numbers and returns their difference.

- **Multiplication**: `POST /multiply`
    - Accepts two input numbers and returns their product.

- **Division**: `POST /divide`
    - Accepts two input numbers and returns their quotient.

Each secured endpoint expects two query parameters: `number1` and `number2`, for performing the corresponding arithmetic operation.
