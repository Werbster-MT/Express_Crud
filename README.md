# Express CRUD Application

This is a simple CRUD (Create, Read, Update, Delete) application built with Express.js. It allows you to manage products in a basic database.

## Getting Started

### Prerequisites

Before running this application, ensure you have the following installed on your system:

- Node.js
- npm (Node Package Manager)

### Installation

1. Clone this repository to your local machine:

```
    git clone https://github.com/Werbster-MT/Express_Crud.git
```

2. Navigate to the project directory:
```
    cd express-crud
```

3. Install dependencies:
```
    npm install
```

### Usage

To start the server, run the following command:

```
    npm start
```

The server will start listening on port `3003` by default. You can change the port in the `server.js` file if needed.

### Endpoints

#### GET `/products`

- Retrieves all products from the database.
- Returns JSON data of all products.

#### GET `/products/:id`

- Retrieves a specific product by its ID.
- Requires passing the product ID as a parameter in the URL.
- Returns JSON data of the specified product.

#### POST `/products`

- Creates a new product.
- Expects JSON data in the request body with `name` and `price` fields.
- Returns JSON data of the created product.

#### PUT `/products/:id`

- Updates an existing product by its ID.
- Requires passing the product ID as a parameter in the URL.
- Expects JSON data in the request body with `name` and `price` fields.
- Returns JSON data of the updated product.

#### DELETE `/products/:id`

- Deletes a product by its ID.
- Requires passing the product ID as a parameter in the URL.
- Returns JSON data of the deleted product.

## Contributing

Contributions are welcome! If you find any issues or want to improve the application, feel free to submit a pull request.

## License

This project is licensed under the [MIT License](LICENSE).
