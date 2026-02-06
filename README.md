# MERN Stack Todo App

A modern, responsive todo application built with the MERN stack (MongoDB, Express.js, React, Node.js) and MongoDB Atlas for cloud database hosting. Features advanced React design with styled-components and Framer Motion animations.

## Features

- ✅ Modern UI with styled-components and CSS-in-JS
- ✅ Smooth animations with Framer Motion
- ✅ Glassmorphism design with backdrop filters
- ✅ Add, edit, and delete todos
- ✅ Mark todos as complete/incomplete with visual feedback
- ✅ Real-time search functionality
- ✅ Filter by completion status
- ✅ Responsive design for all devices
- ✅ Smooth animations and micro-interactions
- ✅ MongoDB Atlas integration

## Project Structure

```
mern-todo-app/
├── backend/
│   ├── models/
│   │   └── Todo.js              # Mongoose model
│   ├── routes/
│   │   └── todos.js             # API routes
│   ├── .env                     # Environment variables
│   ├── package.json
│   └── server.js                # Express server
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── styles/
│   │   │   │   ├── GlobalStyles.js    # Global styled-components
│   │   │   │   └── StyledComponents.js # Component styles
│   │   │   ├── TodoItem.jsx     # Individual todo component
│   │   │   ├── TodoList.jsx     # Todo list component
│   │   │   └── SearchBar.jsx    # Search and filter component
│   │   ├── App.jsx              # Main app component with animations
│   │   ├── main.jsx             # React entry point
│   │   └── index.css            # Base CSS and animations
│   ├── .env                     # Frontend environment variables
│   ├── package.json
│   ├── index.html
│   └── vite.config.js
└── README.md
```

## Setup Instructions

### 1. MongoDB Atlas Setup

1. Create a [MongoDB Atlas](https://www.mongodb.com/atlas) account
2. Create a new project and cluster (M0 Sandbox is free)
3. Configure Network Access (add your IP or 0.0.0.0/0)
4. Create a database user with read/write permissions
5. Get your connection string from "Connect" → "Connect your application"

### 2. Backend Setup

```bash
cd backend
npm install
```

Update the `.env` file with your MongoDB connection string:
```
MONGODB_URI=mongodb+srv://your_username:your_password@cluster.mongodb.net/todo_app?retryWrites=true&w=majority
PORT=5000
```

Start the backend server:
```bash
npm run dev
```

### 3. Frontend Setup

```bash
cd frontend
npm install
```

Start the frontend development server:
```bash
npm run dev
```

The application will be available at:
- Frontend: http://localhost:3000
- Backend API: http://localhost:5000

## API Endpoints

- `GET /api/todos` - Get all todos
- `POST /api/todos` - Create a new todo
- `PUT /api/todos/:id` - Toggle todo completion
- `DELETE /api/todos/:id` - Delete a todo
- `GET /api/todos/search/:query` - Search todos

## Technologies Used

### Backend
- Node.js
- Express.js
- MongoDB with Mongoose
- CORS
- dotenv

### Frontend
- React 18
- Vite
- **styled-components** (CSS-in-JS)
- **Framer Motion** (Animations)
- Axios
- Modern CSS with custom properties

### Database
- MongoDB Atlas (Cloud-hosted MongoDB)

## Design Features

### Modern UI/UX
- **Glassmorphism**: Frosted glass effect with backdrop filters
- **Gradient Backgrounds**: Beautiful purple-blue gradient
- **Smooth Animations**: Framer Motion spring animations
- **Micro-interactions**: Hover effects, scale transforms, transitions
- **Responsive Design**: Mobile-first approach with media queries

### Component Architecture
- **Styled Components**: Component-scoped styling
- **CSS-in-JS**: Dynamic styling based on props
- **Reusable Components**: Modular, maintainable code
- **Animation Variants**: Staggered animations for smooth UX

### Visual States
- **Completed Todos**: Green gradient background with left border
- **Active Todos**: Clean white cards with shadows
- **Hover Effects**: Scale transforms and shadow changes
- **Loading States**: Custom spinner animations
- **Empty States**: Illustrative SVG with helpful messages

## Advanced Features

### Search & Filter
- Real-time search as you type
- Filter by: All, Active, Completed
- Combined search and filter functionality
- Instant UI updates

### Animations
- Staggered container animations
- Spring-based item animations
- Smooth page transitions
- Loading spinners
- Hover and click feedback

### Responsive Design
- Mobile-first approach
- Flexible layouts
- Touch-friendly interactions
- Optimized for all screen sizes

## Deployment

### Backend Deployment
- Deploy to Vercel, Heroku, or Railway
- Set environment variables in deployment platform
- Ensure MongoDB Atlas network access allows deployment IP

### Frontend Deployment
- Deploy to Vercel, Netlify, or GitHub Pages
- Update `VITE_API_URL` in production environment

## Performance Optimizations

- Lazy loading with React Suspense
- Optimized re-renders with proper state management
- Efficient animations with Framer Motion
- Component-scoped styles to prevent CSS conflicts
- Minimal bundle size with Vite optimization

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

MIT License - feel free to use this project for learning or commercial purposes.
