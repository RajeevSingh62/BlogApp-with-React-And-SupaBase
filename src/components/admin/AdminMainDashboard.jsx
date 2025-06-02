import React from "react";
import { data } from "react-router-dom";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
import { useSelector } from "react-redux";
const AdminMainDashboard = () => {
  const userdetails = useSelector((state) => state.users);
  console.log("dashboard userdetails", userdetails);
  const totalUsers = userdetails?.users?.length || 0;
  console.log("total users", totalUsers);

  const activeUsers =
    userdetails?.users?.filter((user) => user.isactive === true).length || 0;

  console.log("active users", activeUsers);
  const inactiveUsers =
    userdetails?.users?.filter((user) => user.isactive === false).length || 0;

  const totalBlogs = useSelector((state) => state.blogs.blogs);
  console.log("total blogs", totalBlogs);
  const totalBlogsCount = totalBlogs?.length || 0;
  console.log("total blogs count", totalBlogsCount);

  const cardData = [
    { title: "Number Of Blogs", value: totalBlogsCount },
    { title: "Active User", value: activeUsers },
    { title: "Inactive User", value: inactiveUsers },
    { title: "Total User", value: totalUsers },
  ];

  // Register Chart.js parts
  ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

  const blogData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Blogs per Months",
        data: [12, 19, 3, 5, 2, 3, 7, 4, 6, 8, 9, 10], // ✅ 12 values
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderRadius: 5,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Blogs Posted Per Month",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  //user per month chart data
  const userData = {
    labels: [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ],
    datasets: [
      {
        label: "Users per Month",
        data: [10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65], // Example data
        backgroundColor: "rgba(153, 102, 255, 0.6)",
        borderRadius: 5,
      },
    ],
  };
  const userOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Users Added Per Month",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };
  const topAuthors = [
    {
      id: 1,
      full_name: "Rajeev Singh",
      profile_image_url: "https://i.pravatar.cc/40?img=1",
      blog_count: 18,
    },
    {
      id: 2,
      full_name: "Aarav Mehta",
      profile_image_url: "https://i.pravatar.cc/40?img=2",
      blog_count: 15,
    },
    {
      id: 3,
      full_name: "Sneha Kapoor",
      profile_image_url: "https://i.pravatar.cc/40?img=3",
      blog_count: 12,
    },
    {
      id: 4,
      full_name: "Dev Sharma",
      profile_image_url: "https://i.pravatar.cc/40?img=4",
      blog_count: 10,
    },
    {
      id: 5,
      full_name: "Isha Verma",
      profile_image_url: "https://i.pravatar.cc/40?img=5",
      blog_count: 9,
    },
  ];

  return (
    <div
      style={{
        padding: "10px",
        height: "auto",
        background: "#f5f7fa",
        overflowy: "auto",
      }}
    >
      {/* ✅ Stats Cards */}
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        {cardData.map((card, i) => (
          <div
            key={i}
            style={{
              flex: 1,
              background: "white",
              padding: "20px",
              borderRadius: "12px",
              boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
              textAlign: "center",
            }}
          >
            <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
              {card.title}
            </h3>
            <p
              style={{ fontSize: "24px", fontWeight: "bold", color: "#2c3e50" }}
            >
              {card.value}
            </p>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        {/* blogs per month Chart Section */}
        <div
          style={{
            width: "50%",
            padding: "10px",

            background: "#f5f7fa",
            overflowY: "auto",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Bar data={blogData} options={options} />
        </div>
        {/* users per month Chart Section */}
        <div
          style={{
            width: "50%",
            margin: "0 auto",
            padding: "20px",
            background: "f5f7fa",
            borderRadius: "12px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Bar data={userData} options={userOptions} />
        </div>
      </div>
    
      <div style={{ display: "flex", gap: "20px", marginBottom: "30px" }}>
        {/* latest blogs posted  */}
        <div
          style={{
            gap: "20px",
            marginBottom: "30px",
            background: "#f5f7fa",
            width: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <h3
            style={{
              marginBottom: "15px",
              textAlign: "center",
              marginBottom: "4px",
              padding: "2px",
            }}
          >
            Recent Blogs
          </h3>

          <table style={{ width: "100%", borderCollapse: "collapse" }}>
            <thead>
              <tr style={{ background: "#f0f0f0", textAlign: "left" }}>
                <th style={{ padding: "12px" }}>sr.no</th>
                <th style={{ padding: "12px" }}>Title</th>
                <th style={{ padding: "12px" }}>Author</th>
                <th style={{ padding: "12px" }}>Date</th>
              </tr>
            </thead>
            <tbody>
              {totalBlogs?.slice(0, 6).map((blog, index) => (
                <tr key={index} style={{ borderBottom: "1px solid #e0e0e0" }}>
                  <td style={{ padding: "12px" }}>{index + 1}</td>
                  <td style={{ padding: "12px" }}>{blog.title}</td>
                  <td style={{ padding: "12px" }}>
                    {blog.author_id.full_name}
                  </td>
                  <td style={{ padding: "12px" }}>
                    {new Date(blog.created_at).toLocaleDateString()}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {/* top author table */}
      <div  style={{
            gap: "20px",
            marginBottom: "30px",
            background: "#f5f7fa",
            width: "50%",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}>
        <h3 style={{
              marginBottom: "15px",
              textAlign: "center",
              marginBottom: "4px",
              padding: "2px",
            }}>Top Authors</h3>
        <table style={{ width: "100%", borderCollapse: "collapse" }}>
          <thead style={{ background: "#f0f0f0" }}>
            <tr>
              <th style={{ padding: "12px" }}>#</th>
              <th style={{ padding: "12px" }}>Profile</th>
              <th style={{ padding: "12px" }}>Author Name</th>
              <th style={{ padding: "12px" }}>Total Blogs</th>
            </tr>
          </thead>
          <tbody>
            {topAuthors.map((author, index) => (
              <tr
                key={author.id}
                style={{ textAlign: "center", borderBottom: "1px solid #ccc" }}
              >
                <td style={{ padding: "12px" }}>{index + 1}</td>
                <td style={{ padding: "12px" }}>
                  <img
                    src={author.profile_image_url}
                    alt={author.full_name}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </td>
                <td style={{ padding: "10px" }}>{author.full_name}</td>
                <td style={{ padding: "10px" }}>{author.blog_count}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
     
    
    </div>
  );
};

export default AdminMainDashboard;
