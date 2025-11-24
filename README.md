# Libas Mitr 👕🛍️

**Libas Mitr** is a full‑stack **MERN e‑commerce app** for T‑shirts and clothing that provides a smooth shopping experience, an admin panel, secure checkout, and a modern **Virtual Try‑On (VTO)** feature allowing users to preview how clothes look on them.

> “Libas” = clothes | “Mitr” = friend — your friendly wardrobe on the web.

---

## ✨ Features

* **Product Catalog**: Browse T‑shirts by size, color, and category.
* **Search & Filters**: Smart filtering by size, price, and color.
* **Cart & Checkout**: Add, edit, and remove items from cart.
* **Payments**: Razorpay integration with success/failure callback.
* **Order Management**: Track orders from confirmation to delivery.
* **User Auth**: JWT‑based login/signup with password hashing.
* **Admin Dashboard**: Manage products, orders, and inventory.
* **Virtual Try‑On**: Upload your photo and preview clothes virtually.

---

## 🧱 Tech Stack

**Frontend**: React.js • Redux Toolkit • Tailwind CSS • React Router DOM

**Backend**: Node.js • Express.js • JWT Auth • Bcrypt

**Database**: MongoDB + Mongoose ORM

**Payments**: Razorpay SDK

**Cloud Storage**: Cloudinary for image hosting

**Virtual Try‑On (VTO)**: MediaPipe / BodyPix (client‑side) or third‑party API for external try‑on

---

## 📁 Project Structure

```
libas-mitr/
├─ client/              # React frontend
│  ├─ src/
│  │  ├─ components/    # Reusable UI components
│  │  ├─ pages/         # Screens (Home, Product, Cart, etc.)
│  │  ├─ redux/         # State management
│  │  ├─ utils/         # Helper functions
│  │  └─ assets/        # Static images
│  └─ package.json
├─ server/
│  ├─ config/           # DB connection, keys
│  ├─ controllers/      # API controllers
│  ├─ models/           # Mongoose models
│  ├─ routes/           # Express routes
│  ├─ middleware/       # Auth, error handlers
│  ├─ server.js         # Entry point
│  └─ package.json
└─ README.md
```

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-org/libas-mitr.git
cd libas-mitr
```

### 2️⃣ Install dependencies

```bash
cd server && npm install
cd ../client && npm install
```

### 3️⃣ Configure environment variables

Create a `.env` file in the **server/** folder:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/libasmitr
JWT_SECRET=your_jwt_secret
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
VTO_ENABLED=true
VTO_ADAPTER=basic   # basic | external
```

### 4️⃣ Run the servers

In one terminal:

```bash
cd server
npm run dev
```

In another terminal:

```bash
cd client
npm start
```

Frontend runs on: `http://localhost:3000`
Backend runs on: `http://localhost:5000`

---

## 👕 Virtual Try‑On (VTO)

Libas Mitr includes an optional **Virtual Try‑On** system that lets users upload a photo and preview selected T‑shirts.

### Modes

* **basic**: Client‑side overlay using MediaPipe/BodyPix.
* **external**: Uses external API for advanced visualization.

### Usage Flow

1. User selects a T‑shirt and clicks **Try‑On**.
2. Uploads a front‑facing photo.
3. The app renders an overlay preview.

> The feature is privacy‑focused — all uploaded photos are temporary and can be deleted anytime.

---

## 🧠 API Endpoints

| Method | Endpoint             | Description            |
| ------ | -------------------- | ---------------------- |
| GET    | `/api/products`      | Fetch all products     |
| GET    | `/api/products/:id`  | Get a single product   |
| POST   | `/api/auth/register` | Register new user      |
| POST   | `/api/auth/login`    | Login existing user    |
| POST   | `/api/orders`        | Create new order       |
| GET    | `/api/orders/:id`    | Get order by ID        |
| POST   | `/api/vto/try`       | Virtual Try‑On request |

---

## 🧪 Testing

```bash
npm run test
```

Run backend and frontend tests separately.

---

## 🚀 Deployment

* **Frontend**: Deploy React app on Netlify or Vercel.
* **Backend**: Deploy Express server on Render, Railway, or AWS.
* **Database**: Use MongoDB Atlas.
* **Image Hosting**: Cloudinary.
* **Environment Variables**: Configure all secrets in deployment platform.

---

## 🛣️ Roadmap

* [ ] Wishlist & Favorites
* [ ] Size Recommendation System
* [ ] 3D Try‑On Enhancement
* [ ] Multi‑Vendor Marketplace

---

## 🤝 Contributing

1. Fork the repo.
2. Create your feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to the branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

---

## 📜 License

MIT © 2025 Libas Mitr Team

---

## 💬 Credits

Developed with ❤️ by **Eskills Team**
Follow us for more — [eskillsweb.com](https://eskillsweb.com)
