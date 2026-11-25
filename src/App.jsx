import React from "react";
import Navbar from "./Navbar";
import "./App.css";
function App() {
const stats = [
{ title: "Total Projects",value:"24" },
{ title: "Total Tasks",value:"1,248" },
{ title: "Active Members",value:"18" },
{ title: "Pending Tasks",value:"96" }
  ];
const tasks = [
{
name: "Homepage UI Design",
project: "Project Landing",
category: "UI",
status: "Completed"
},
{
name: "Website Development",
project: "Search To Find",
category: "Dev",
status: "In Progress"
}
  ];
const projects = [
{
name: "Project Landing",
type: "UI Development",
progress: "75%",
color: "purple"
},
{
name: "Search To Find",
type: "Web Application",
progress: "60%",
color: "blue"
}
  ];
return (
<div className="dashboard">
<Navbar/>
<main className="main-content">
<header className="topbar">
<input
type="text"
placeholder="Search projects,tasks,orteam..."/>
<div className="profile">
<div className="avatar">T</div>
<span>Thiya</span>
</div>
</header>
<section className="welcome">
<h1>Welcome back,Thiya</h1>
<p>Here's what's happening with your projects today.</p>
</section>
<section className="stats-container">
{stats.map((item, index) => (
<div className="stat-card" key={index}>
<div>
<p>{item.title}</p>
<h2>{item.value}</h2> 
</div> </div>
))}
</section>
<section className="content-grid">
<div className="panel">
<div className="panel-header">
<h2>Recent Tasks</h2>
</div>
<table>
<thead>
<tr>
<th>Task</th>
<th>Project</th>
<th>Category</th>
<th>Status</th>
</tr>
</thead>
<tbody>
{tasks.map((task, index) => (<tr key={index}>
<td>
<input type="checkbox"/>
{task.name}
</td>
<td>{task.project}</td>
<td>{task.category}</td>
<td>
<span className={`status ${task.status.replace(" ", "-").toLowerCase()}`}>
{task.status}
</span>
</td>
</tr>
))}
</tbody>
</table>
</div>
<div className="panel">
<div className="panel-header">
<h2>Active Projects</h2>
</div>
{projects.map((project, index) => (
<div className="project-item" key={index}>
<div className={`project-icon ${project.color}`}>
{project.name.charAt(0)}
</div>
<div className="project-details">
<h4>{project.name}</h4>
<p>{project.type}</p>
</div>
<span className="progress">
{project.progress}
</span>
</div>
))}
</div>
</section>
</main>
</div>
);
}
export default App;