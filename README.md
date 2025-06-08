# 📰 CMS Dashboard with Supabase

🔗 **Live Demo:** [https://ecommwithsupabase.netlify.app/](https://ecommwithsupabase.netlify.app/)

This is a full-featured Content Management System (CMS) dashboard built using **React.js**, **Redux Toolkit**, **Supabase**, and **Chart.js**. The application allows administrators to manage blogs, track user statistics, and visualize key performance metrics through an interactive UI.

---

## 🔧 Tech Stack

- **Frontend:** React.js, React Router  
- **State Management:** Redux Toolkit + Redux Thunk  
- **Backend as a Service (BaaS):** Supabase (Database, Auth, Storage)  
- **Charts and Visualization:** Chart.js (via react-chartjs-2)  
- **Styling:** Inline CSS, Flexbox (Responsive Layout)  
- **API Testing:** Postman (for Supabase REST API endpoints)  

---

## ✨ Features Implemented

### ✅ Authentication
- User registration and login via Supabase Auth  
- Role-based dashboard (admin only access)  

### ✅ Blog Management
- Create, read, and list blogs  
- Upload blog images to Supabase Storage  
- Display blog creation stats per month (bar chart)  
- Blog table with title, author, and date  

### ✅ User Management
- Track total users, active users, and inactive users  
- Display users per month on a bar chart  
- Top authors section with blog count and profile image  
- Role-based metadata from Supabase `users` table  

### ✅ Dashboard Metrics
- Dynamic cards showing:  
  - Total Users  
  - Number of Blogs  
  - Active Users  
  - Inactive Users  
- Graphs:  
  - 📊 Blogs Created Per Month  
  - 📊 Users Registered Per Month  
- Top 5 Authors Table with:  
  - Profile Image  
  - Full Name  
  - Blog Count  

---

## 📊 Charts

Implemented using **Chart.js** (via `react-chartjs-2`):

- Blogs per Month (based on `created_at`)  
- Users per Month (based on `created_at`)  
- Data transformed dynamically for 12-month summary  
- Option to use fixed month labels or actual grouped month strings  

---

## 🧠 Supabase Details

- **Tables Used:**  
  - `users`: stores user data, `isActive`, `avatar_url`, and `created_at`  
  - `blogs`: stores blog entries with `author_id` and `created_at`  

- **Storage Bucket:**  
  - Used for storing blog images (bucket: `blogs`)  

- **Row-Level Security (RLS):**  
  - Enabled for all tables  

- **API Usage:**  
  - RESTful endpoints tested with Postman  
  - Client-side logic handled using Supabase JavaScript SDK  

---

## 🛠️ Project Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/RajeevSingh62/YourRepoName.git
   cd YourRepoName




