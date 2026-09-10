import { motion } from "motion/react";

const stats = [
  { label: "Tasks completed", value: "24", change: "+18%" },
  { label: "Focus time", value: "6.4h", change: "+12%" },
  { label: "AI interactions", value: "87", change: "+24%" },
];

const tasks = [
  { title: "Finish product presentation", category: "Work", priority: "High" },
  { title: "Review project roadmap", category: "Planning", priority: "Medium" },
  { title: "Prepare tomorrow's tasks", category: "Personal", priority: "Low" },
];

const projects = [
  { name: "NEXORA Launch", progress: 78, tasks: "14/18" },
  { name: "Website Redesign", progress: 52, tasks: "8/15" },
  { name: "AI Research", progress: 34, tasks: "5/12" },
];

function Workspace() {
  return (
    <div className="workspace-page">
      {/* Sidebar */}
      <aside className="workspace-sidebar">
        <a href="/" className="workspace-logo">
          <span className="workspace-logo-icon">N</span>
          <span>NEXORA</span>
        </a>

        <nav className="workspace-nav">
          <a href="/workspace" className="workspace-nav-item active">
            <span>⌂</span>
            Dashboard
          </a>

          <a href="#tasks" className="workspace-nav-item">
            <span>✓</span>
            Tasks
          </a>

          <a href="#projects" className="workspace-nav-item">
            <span>◈</span>
            Projects
          </a>

          <a href="#ai" className="workspace-nav-item">
            <span>✦</span>
            AI Assistant
          </a>

          <a href="#analytics" className="workspace-nav-item">
            <span>◌</span>
            Analytics
          </a>
        </nav>

        <div className="workspace-sidebar-bottom">
          <a href="#settings" className="workspace-nav-item">
            <span>⚙</span>
            Settings
          </a>

          <div className="workspace-user">
            <div className="workspace-avatar">U</div>
            <div>
              <strong>Welcome back</strong>
              <small>Productivity mode</small>
            </div>
          </div>
        </div>
      </aside>

      {/* Main */}
      <main className="workspace-main">
        {/* Top bar */}
        <header className="workspace-header">
          <div>
            <span className="workspace-eyebrow">YOUR WORKSPACE</span>
            <h1>Good evening, creator.</h1>
            <p>Let's turn your ideas into meaningful progress.</p>
          </div>

          <div className="workspace-header-actions">
            <button className="workspace-icon-button" aria-label="Notifications">
              ♢
            </button>

            <button className="workspace-profile-button">
              <span className="workspace-avatar small">U</span>
              <span>My Workspace</span>
              <span>⌄</span>
            </button>
          </div>
        </header>

        {/* AI Assistant */}
        <motion.section
          className="ai-assistant-card"
          id="ai"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="ai-assistant-glow"></div>

          <div className="ai-assistant-content">
            <div className="ai-icon">
              <span>✦</span>
            </div>

            <div>
              <span className="ai-status">
                <span></span>
                AI ASSISTANT ONLINE
              </span>

              <h2>What can I help you accomplish?</h2>

              <p>
                Ask NEXORA to organize ideas, create tasks, summarize
                information, or plan your next project.
              </p>
            </div>
          </div>

          <div className="ai-input">
            <input
              type="text"
              placeholder="Ask NEXORA anything..."
              aria-label="Ask NEXORA anything"
            />

            <button aria-label="Send message">→</button>
          </div>

          <div className="ai-suggestions">
            <button>Plan my day</button>
            <button>Create a task list</button>
            <button>Summarize my projects</button>
          </div>
        </motion.section>

        {/* Stats */}
        <section className="workspace-stats" id="analytics">
          {stats.map((stat, index) => (
            <motion.article
              className="workspace-stat-card"
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <span>{stat.label}</span>

              <div className="stat-value-row">
                <strong>{stat.value}</strong>
                <small>{stat.change}</small>
              </div>

              <div className="stat-line">
                <span style={{ width: `${65 + index * 10}%` }}></span>
              </div>
            </motion.article>
          ))}
        </section>

        {/* Content Grid */}
        <section className="workspace-grid">
          {/* Tasks */}
          <motion.div
            className="workspace-panel tasks-panel"
            id="tasks"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="panel-header">
              <div>
                <span className="panel-label">TODAY</span>
                <h2>My Tasks</h2>
              </div>

              <button className="panel-action">+ Add task</button>
            </div>

            <div className="task-list">
              {tasks.map((task, index) => (
                <motion.div
                  className="task-item"
                  key={task.title}
                  whileHover={{ x: 4 }}
                >
                  <button className="task-check" aria-label={`Complete ${task.title}`}>
                    {index === 0 ? "✓" : ""}
                  </button>

                  <div className="task-info">
                    <strong>{task.title}</strong>
                    <span>{task.category}</span>
                  </div>

                  <span
                    className={`priority priority-${task.priority.toLowerCase()}`}
                  >
                    {task.priority}
                  </span>

                  <button className="task-more" aria-label="More options">
                    ···
                  </button>
                </motion.div>
              ))}
            </div>

            <button className="view-all-button">View all tasks →</button>
          </motion.div>

          {/* Projects */}
          <motion.div
            className="workspace-panel projects-panel"
            id="projects"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="panel-header">
              <div>
                <span className="panel-label">ACTIVE WORK</span>
                <h2>Projects</h2>
              </div>

              <button className="panel-action">View all</button>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <div className="project-item" key={project.name}>
                  <div className="project-top">
                    <strong>{project.name}</strong>
                    <span>{project.progress}%</span>
                  </div>

                  <div className="project-progress">
                    <span style={{ width: `${project.progress}%` }}></span>
                  </div>

                  <small>{project.tasks} tasks completed</small>
                </div>
              ))}
            </div>

            <button className="new-project-button">
              <span>+</span>
              Create new project
            </button>
          </motion.div>
        </section>

        {/* Quick Actions */}
        <motion.section
          className="quick-actions"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div>
            <span className="panel-label">QUICK ACTIONS</span>
            <h2>Make something happen.</h2>
          </div>

          <div className="quick-action-buttons">
            <button>
              <span>✦</span>
              Ask AI
            </button>

            <button>
              <span>✓</span>
              New Task
            </button>

            <button>
              <span>◈</span>
              New Project
            </button>

            <button>
              <span>◌</span>
              View Analytics
            </button>
          </div>
        </motion.section>
      </main>
    </div>
  );
}

export default Workspace;