# SalesHub CRM

A modern, full-stack Customer Relationship Management (CRM) system built with the MERN stack, designed to help sales teams manage leads, track deals, and improve sales productivity through an intuitive workflow.

## 🎯 Project Overview

**SalesHub CRM** is a comprehensive sales management platform that enables teams to:
- Manage leads and contacts efficiently
- Track deals through customizable pipeline stages
- Visualize sales data with real-time dashboards
- Import leads in bulk via Excel files
- Monitor sales performance with analytics

## 🚀 Features

### Core Features

- **Lead Management**: Add, view, and manage sales leads with detailed information
- **Contact Management**: Centralized contact directory with search and filtering
- **Deal Tracking**: Track deals through pipeline stages (New → Qualified → Deal → Won/Lost)
- **Kanban Pipeline**: Visual Kanban board for intuitive deal management
- **Sales Dashboard**: Real-time analytics with charts and metrics
- **Excel Import**: Bulk import leads from Excel/CSV files
- **Secure Authentication**: JWT-based authentication system
- **User-Friendly UI**: Modern, responsive design with Tailwind CSS

### Pipeline Stages

1. **New Leads** - Fresh leads that need qualification
2. **Qualified** - Leads that have been vetted and are ready for conversion
3. **Deals** - Active deals in progress
4. **Won** - Successfully closed deals
5. **Lost** - Deals that didn't close

## 🛠️ Technology Stack

### Frontend
- **React.js** - UI library
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Chart.js** - Data visualization
- **Axios** - HTTP client

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **JWT** - Authentication tokens
- **Multer** - File upload handling
- **XLSX** - Excel file processing

### Database
- **In-Memory Storage** - For demo purposes (easily replaceable with MongoDB)

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- **Node.js** (v14 or higher)
- **npm** (v6 or higher)

## 🔧 Installation & Setup

### 1. Clone the Repository

```bash
git clone <repository-url>
cd Sales_Project
```

### 2. Install Frontend Dependencies

```bash
npm install
```

### 3. Install Backend Dependencies

```bash
cd backend
npm install
cd ..
```

### 4. Environment Variables (Optional)

For production use, create a `.env` file in the `backend` directory:

```env
JWT_SECRET=your-secret-key-here
PORT=5000
```

**Note**: For demo purposes, the app works without environment variables using default values.

## 🚀 Running the Application

### Start Backend Server

Open a terminal and run:

```bash
cd backend
npm run dev
```

The backend server will start on `http://localhost:5000`

### Start Frontend Development Server

Open another terminal and run:

```bash
npm run dev
```

The frontend will be available at `http://localhost:5173` (or another port if 5173 is busy)

## 📖 Usage Guide

### Getting Started

1. **Sign Up / Login**: Create an account or login with your email
2. **Welcome Screen**: Choose how to add leads:
   - Manual entry via form
   - Excel file upload
3. **Dashboard**: View your sales metrics and pipeline overview
4. **Leads**: Add new leads manually
5. **Deals**: Manage your pipeline using the Kanban board
6. **Contacts**: Browse and search all your contacts

### Adding Leads

**Manual Entry**:
- Navigate to `/dashboard/leads`
- Fill in the form with lead details (name, company, stage)
- Submit to add the lead

**Excel Import**:
- Go to Welcome page after login
- Upload an Excel file with columns: `name`, `company`, `email`, `stage`
- Leads will be automatically imported

### Managing Deals

1. Navigate to `/dashboard/deals`
2. View your pipeline in Kanban format
3. Move leads through stages: New → Qualified → Deal
4. Mark deals as Won or Lost from the Deals column

### Viewing Contacts

- Navigate to `/dashboard/contacts`
- Search contacts by name, email, or company
- View contact details and current pipeline stage

## 📁 Project Structure

```
Sales_Project/
├── backend/
│   ├── controllers/     # Request handlers
│   ├── middleware/      # Auth middleware
│   ├── models/          # Data models
│   ├── routes/          # API routes
│   ├── uploads/         # Uploaded files
│   └── server.js         # Express server
├── src/
│   ├── components/      # React components
│   ├── context/         # React context providers
│   ├── pages/           # Page components
│   ├── config/          # Configuration files
│   └── App.jsx          # Main app component
└── README.md
```

## 🔐 Authentication

The application uses JWT (JSON Web Tokens) for authentication:
- Tokens are stored in localStorage
- Protected routes require valid authentication
- Tokens expire after 1 day

## 📊 API Endpoints

### Authentication
- `POST /api/auth/login` - User login/signup

### Leads
- `GET /api/leads` - Get all leads for authenticated user
- `POST /api/leads` - Create a new lead
- `PATCH /api/leads/:id` - Update lead stage
- `POST /api/leads/upload` - Upload leads from Excel file

### Contact
- `POST /api/contact` - Submit contact form

## 🎨 User Flow

1. **Add Lead** → Create a new lead (manually or via Excel)
2. **View Dashboard** → See pipeline metrics and analytics
3. **Move Through Pipeline** → Progress lead: New → Qualified → Deal
4. **Close Deal** → Mark as Won or Lost

## 🚧 Demo Mode

This application runs in **demo mode** with in-memory storage. All data is stored temporarily and will be lost when the server restarts. For production use, integrate with MongoDB or another database.

## 📝 Notes

- The application is designed for demonstration purposes
- MongoDB integration is available but disabled in demo mode
- Excel upload supports `.xlsx` and `.csv` formats
- All API endpoints require authentication except login/signup

## 🤝 Contributing

This is a college project demonstration. For improvements or suggestions, please contact the development team.

## 📄 License

This project is created for educational purposes.

---

**Built with ❤️ using the MERN Stack**
