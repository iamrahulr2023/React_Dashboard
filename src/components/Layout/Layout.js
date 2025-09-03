
import React from 'react'
import {
  BarChart3,
  FileText,
  GitBranch,
  CreditCard,
  Shield,
  Settings,
  Upload,
  LayoutGrid
} from 'lucide-react';
import '../Dashboard/Dashboard.css';

import { Outlet } from 'react-router-dom';
const Layout = () => {
  return (
    <div>

      <aside className="sidebar">
        <div className="sidebar-header">
          <div className="logo-container">
            <div className="logo-icon">
              <BarChart3 />
            </div>
            <div className="logo-text">
              <h2>CollectPro</h2>
              <p>Collections Platform</p>
            </div>
          </div>
        </div>
        <nav className="nav-container">
          <div className="nav-menu">
            <div className="nav-item active">
              <LayoutGrid />
              <span >Dashboard</span>
            </div>
            <div className="nav-item">
              <Upload />
              <span>Data Import</span>
            </div>
            <div className="nav-item">
              <FileText />
              <span>Templates</span>
            </div>
            <div className="nav-item">
              <GitBranch />
              <span>Sequences</span>
            </div>
            <div className="nav-item">
              <BarChart3 />
              <span>Analytics</span>
            </div>
            <div className="nav-item">
              <CreditCard />
              <span>Payment Portal</span>
            </div>
            <div className="nav-item">
              <Shield />
              <span>Compliance</span>
            </div>
            <div className="nav-item">
              <Settings />
              <span>Settings</span>
            </div>
          </div>
          <div className="admin_con">
            <div className="admin_first">
              <div className="admin_icon">
                JD
              </div>
              <div className="admin_name">
                <p>John Doe</p>
                <p style={{ color: "grey", fontSize: "10px" }}>Admin</p>
              </div>
            </div>
          </div>

        </nav>

      </aside>
      <main>
        <Outlet />
      </main>

    </div>

  )
}

export default Layout