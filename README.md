# FashionHub

A single-deployment e-commerce app that runs as one Vercel project with a Vite React frontend and Express API served through serverless functions.

## Architecture

- Frontend: React + Vite
- API: Express app mounted in `/api` and exported through Vercel serverless functions
- Database: MongoDB Atlas
- Auth: JWT stored in secure HTTP-only cookies
- Storage: Cloudinary
- Payments: Razorpay server-side verification
- Hosting: Vercel

## Local development

1. Install dependencies:
   npm install
2. Copy `.env.example` to `.env` and fill in the required values.
3. Start the app:
   npm run dev
4. The Vite dev server runs on http://localhost:5173 and proxies `/api/*` to the local backend on port 5000.

## Production build

npm run build

## Vercel deployment

1. Push the repository to GitHub.
2. Import the project into Vercel.
3. Add all required environment variables from `.env.example` in the Vercel project settings.
4. Deploy.

## Required environment variables

- `MONGODB_URI`
- `JWT_SECRET`
- `CLOUDINARY_CLOUD_NAME`
- `CLOUDINARY_API_KEY`
- `CLOUDINARY_API_SECRET`
- `EMAIL_HOST`
- `EMAIL_PORT`
- `EMAIL_USER`
- `EMAIL_PASSWORD`
- `EMAIL_FROM`
- `NEWS_API_KEY`
- `RAZORPAY_KEY_ID`
- `RAZORPAY_KEY_SECRET`
- `VITE_NEWS_API_KEY`

## Notes

- Do not expose server secrets to the browser.
- All API routes must be accessed through `/api/*`.
- Frontend routes are handled by the Vite SPA fallback and will work after reloads on Vercel.

### Frontend

- **React 18** - UI Framework
- **TypeScript** - Type Safety
- **Vite** - Build Tool
- **Tailwind CSS** - Styling
- **Shadcn/ui** - Components
- **Wouter** - Routing
- **TanStack Query** - Data Fetching
- **Lucide Icons** - Icons
- **Recharts** - Charts

</td>
<td width="33%">

### Backend

- **Node.js 20+** - Runtime
- **Express.js** - Framework
- **TypeScript** - Type Safety
- **MongoDB** - Database
- **Mongoose** - ODM
- **JWT** - Authentication
- **Bcrypt** - Hashing
- **Nodemailer** - Emails
- **Helmet** - Security

</td>
<td width="33%">

### DevOps & Tools

- **Railway** - Hosting
- **MongoDB Atlas** - Database
- **Cloudinary** - Images
- **News API** - Content
- **Git** - Version Control
- **ESLint** - Linting
- **Prettier** - Formatting
- **Postman** - API Testing

</td>
</tr>
</table>

## 🚀 Getting Started

### 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v20.0.0 or higher) - [Download](https://nodejs.org/)
- **npm** or **yarn** - Package manager
- **MongoDB** - [Local](https://www.mongodb.com/try/download/community) or [Atlas](https://www.mongodb.com/cloud/atlas)
- **Git** - Version control

### 📥 Installation

#### **Step 1: Clone the Repository**

```bash
# Clone via HTTPS
git clone https://github.com/yasuo72/fashionwear.git

# Or clone via SSH
git clone git@github.com:yasuo72/fashionwear.git

# Navigate to project directory
cd fashionwear
```

#### **Step 2: Install Dependencies**

```bash
# Install all dependencies
npm install

# Or using yarn
yarn install
```

#### **Step 3: Environment Configuration**

Create a `.env` file in the root directory:

```bash
# Copy example file
cp .env.example .env
```

Edit `.env` with your configuration:

```env
# Server Configuration
NODE_ENV=development
PORT=5000

# Database
MONGODB_URI=mongodb://localhost:27017/fashionhub
# Or MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/fashionhub

# JWT Secret (Generate a random string)
JWT_SECRET=your_super_secret_jwt_key_here_min_32_chars

# Email Configuration (for password reset)
EMAIL_HOST=smtp.gmail.com
EMAIL_PORT=587
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=FashionHub <noreply@fashionhub.com>

# Cloudinary (for image uploads)
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret

# News API (for blog)
VITE_NEWS_API_KEY=your_news_api_key

# Frontend URL
VITE_API_URL=http://localhost:5000
```

#### **Step 4: Database Setup**

**Option A: Local MongoDB**

```bash
# Start MongoDB service
mongod

# The app will automatically create collections
```

**Option B: MongoDB Atlas**

1. Create account at [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a cluster
3. Get connection string
4. Add to `.env` as `MONGODB_URI`

#### **Step 5: Seed Database (Optional)**

```bash
# Seed with sample data
npm run seed

# This will create:
# - Sample products
# - Categories
# - Admin user (admin@fashionhub.com / admin123)
```

#### **Step 6: Run Development Server**

```bash
# Start both frontend and backend
npm run dev

# Or run separately:
npm run dev:client  # Frontend only (http://localhost:5173)
npm run dev:server  # Backend only (http://localhost:5000)
```

#### **Step 7: Access the Application**

- **Frontend**: http://localhost:5173
- **Backend API**: http://localhost:5000
- **Admin Panel**: http://localhost:5173/admin
  - Email: `admin@fashionhub.com`
  - Password: `admin123`

### 🏗️ Build for Production

```bash
# Build the application
npm run build

# Start production server
npm start

# The app will be available at http://localhost:5000
```

## 📁 Project Structure

```
FashionFusion/
├── client/              # React frontend
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── pages/       # Page components
│   │   ├── hooks/       # Custom hooks
│   │   └── lib/         # Utilities
├── server/              # Express backend
│   ├── routes/          # API routes
│   ├── models/          # Database models
│   └── config/          # Configuration
└── shared/              # Shared types
```

## 🌟 Key Features Breakdown

### User Features

- Browse products by category
- Advanced search with filters
- Add to cart & wishlist
- Secure checkout
- Order tracking
- User profile management

### Admin Features

- Product management (CRUD)
- Order management
- User management
- Sales analytics
- Inventory tracking

### Additional Features

- Blog with rich content
- AI chatbot for customer support
- Email notifications
- Payment gateway integration
- Mobile-responsive design

## 📝 API Documentation

### Authentication

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/me` - Get current user

### Products

- `GET /api/products` - Get all products
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create product (Admin)
- `PUT /api/products/:id` - Update product (Admin)
- `DELETE /api/products/:id` - Delete product (Admin)

### Orders

- `GET /api/orders` - Get user orders
- `POST /api/orders` - Create new order
- `GET /api/orders/:id` - Get order details

## 🔒 Security Features

- JWT-based authentication
- Password hashing with bcrypt
- CORS protection
- Helmet.js security headers
- Input validation
- XSS protection
- Rate limiting

## 🎨 Design Philosophy

- **User-Centric**: Intuitive and easy to navigate
- **Modern**: Clean, contemporary design
- **Responsive**: Works on all devices
- **Fast**: Optimized performance
- **Accessible**: WCAG compliant

## 📈 Performance

- Lazy loading for images
- Code splitting
- Optimized bundle size
- Efficient database queries
- Caching strategies

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the **MIT License**.

## 🙏 Acknowledgments

- Built with ❤️ by **ARCHER**
- Inspired by modern e-commerce platforms
- Thanks to the open-source community
- Special thanks to all contributors

## 📞 Contact & Support

**ARCHER**

- GitHub: [@yasuo72](https://github.com/yasuo72)
- Report Issues: [GitHub Issues](https://github.com/yasuo72/fashionwear/issues)

## ⭐ Show Your Support

If you like this project, please give it a star on GitHub!

[![Star on GitHub](https://img.shields.io/github/stars/yasuo72/fashionwear?style=social)](https://github.com/yasuo72/fashionwear)

---

<div align="center">

**Crafted with passion and precision by ARCHER**

© 2024 FashionHub. All rights reserved.

</div>
#   E - C o m e r c e - S t o r e - V 2  
 