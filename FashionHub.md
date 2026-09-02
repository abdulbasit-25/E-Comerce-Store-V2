# FashionHub

A full-stack e-commerce application built with Next.js, TypeScript, MongoDB Atlas, Mongoose, JWT authentication, and Cloudinary.

The project uses a single-folder architecture where the frontend and backend API are part of the same Next.js application. It is designed to be deployed as a single project on Vercel using serverless API routes.

## Tech Stack

- Next.js
- TypeScript
- React
- MongoDB Atlas
- Mongoose
- JWT Authentication
- bcrypt
- Cloudinary
- Vercel

## Features

- User registration and login
- JWT-based authentication
- Product browsing and product details
- Product categories
- Search and filtering
- Shopping cart
- Wishlist
- Order management
- Admin product management
- Cloudinary image uploads
- MongoDB Atlas database
- Responsive storefront
- Serverless API routes

## Project Structure

```text
FashionHub/
├── app/
│   ├── api/              # Serverless API routes
│   ├── products/         # Product pages
│   ├── shop/             # Storefront
│   ├── cart/             # Shopping cart
│   ├── wishlist/        # Wishlist
│   ├── account/          # User account
│   ├── admin/            # Admin dashboard
│   └── page.tsx          # Home page
│
├── components/           # Reusable UI components
├── lib/                  # Database, authentication and utilities
├── models/               # Mongoose models
├── public/               # Static assets
├── .env.example          # Environment variable template
├── .gitignore
├── next.config.ts
├── package.json
└── README.md
```

## Environment Variables

Create a `.env.local` file in the project root:

```env
MONGODB_URI=
JWT_SECRET=
CLOUDINARY_API_KEY=
CLOUDINARY_API_SECRET=
CLOUDINARY_CLOUD_NAME=
```

### Variables

| Variable | Description |
|---|---|
| `MONGODB_URI` | MongoDB Atlas connection string |
| `JWT_SECRET` | Secret used to sign JWT tokens |
| `CLOUDINARY_API_KEY` | Cloudinary API key |
| `CLOUDINARY_API_SECRET` | Cloudinary API secret |
| `CLOUDINARY_CLOUD_NAME` | Cloudinary cloud name |

Do not commit `.env.local` or any file containing production credentials.

## Installation

Clone the repository and install the dependencies:

```bash
git clone <repository-url>
cd FashionHub
npm install
```

Create `.env.local` and configure the required environment variables.

## Development

Start the development server:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:3000
```

## Production Build

Build the application locally with:

```bash
npm run build
```

Start the production server with:

```bash
npm start
```

## Deployment

FashionHub is designed for a single Vercel deployment.

1. Push the repository to GitHub.
2. Import the repository into Vercel.
3. Add the required environment variables in Vercel.
4. Deploy the project.

No separate frontend or backend deployment is required.

The Next.js application handles both the storefront and serverless API routes.

## Database

The application uses MongoDB Atlas for persistent data storage.

Mongoose is used for database models and queries.

Core data models include:

- User
- Product
- Category
- Order
- Wishlist

## Media Storage

Cloudinary is used for product and other application images.

Cloudinary credentials are accessed only from server-side code and should never be exposed to the client.

## API

API routes are located under:

```text
/app/api
```

Examples:

```text
/api/auth/register
/api/auth/login
/api/auth/logout
/api/auth/me

/api/products
/api/products/[id]

/api/categories

/api/cart
/api/wishlist

/api/orders

/api/admin
```

## Security

The application uses:

- JWT authentication
- HTTP-only authentication cookies
- bcrypt password hashing
- Server-side environment variables
- MongoDB access restricted to server-side code
- Cloudinary credentials restricted to server-side code

## License

This project is licensed under the MIT License.

---

Built by ARCHER.