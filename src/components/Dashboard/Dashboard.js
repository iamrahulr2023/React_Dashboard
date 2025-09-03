
import React from 'react';
import {
  FileText,
  DollarSign,
  Users,
  TrendingUp,
  Clock,
  Mail,
  MessageSquare,
  Phone,
  Upload,
  Plus,
  BarChart,
  ArrowRight,
  TrendingDown,

} from 'lucide-react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <>


      <main style={{ width: "1350px", marginLeft: "200px", position: "absolute", top: "0px" }} className="main-content">
        <div className="dash_top">
          <div className="dash">
            <span style={{ fontSize: "20px" }}>Dashboard</span>
            <p>Overview of your collections performance</p>
          </div>
          <div className="buttons">
            <button style={{ fontSize: "13px", color: "black", fontWeight: "500" }} >Export Report</button>
            <button style={{ fontSize: "13px", color: "white" }}>New Campaign</button>
          </div>
        </div>

        <div className="fourboxes">
          <div className="boxes">
            <div className="text_con">
              <p style={{ color: "black" }} className="text">Total Outstanding</p>
              <div className="icon">
                <DollarSign color='grey' />
              </div>
            </div>
            <div className="price_con">
              <span className="price">$2,345,678</span>
              <p className="month positive"><TrendingUp size={10} /> +12.5% from last month</p>
            </div>
          </div>

          <div className="boxes">
            <div className="text_con">
              <p style={{ color: "black" }} className="text">Active Campaigns</p>
              <div className="icon">
                <Users color='grey' />
              </div>
            </div>
            <div className="price_con">
              <span className="price">24</span>
              <p className="month positive"><TrendingUp size={10} /> +3 from last month</p>
            </div>
          </div>

          <div className="boxes">
            <div className="text_con">
              <p style={{ color: "black" }} className="text">Collections Rate</p>
              <div className="icon">
                <TrendingUp color='grey' />
              </div>
            </div>
            <div className="price_con">
              <span className="price">68%</span>
              <p className="month positive"><TrendingUp size={10} /> +5.2% from last month</p>
            </div>
          </div>

          <div className="boxes">
            <div className="text_con">
              <p style={{ color: "black" }} className="text">Avg. Days to Pay</p>
              <div className="icon">
                <Clock color='grey' />
              </div>
            </div>
            <div className="price_con">
              <span className="price">12.3</span>
              <p className="month negative"><TrendingDown size={10} /> -2.1 from last month</p>
            </div>
          </div>
        </div>

        <div className="performance_activity">
          <div style={{ width: "620px", height: "317px" }} className="performance">
            <p style={{ fontWeight: "400", fontSize: "14px" }} className="performance-title">Channel Performance</p>

            <div className="per_box1">
              <div className="first">
                <div className="channel-icon email">
                  <Mail size={5} />
                </div>
                <div className="per_text_con">
                  <p className="per_text">Email</p>
                  <p className="sends">1250 sent</p>
                </div>
              </div>
              <div className="per_percentage_con">
                <p className="percentage">18.7%</p>
                <p className="per_res">response rate</p>
              </div>
            </div>

            <div className="per_box1">
              <div className="first">
                <div className="channel-icon sms">
                  <MessageSquare />
                </div>
                <div className="per_text_con">
                  <p className="per_text">SMS</p>
                  <p className="sends">680 sent</p>
                </div>
              </div>
              <div className="per_percentage_con">
                <p className="percentage">22.9%</p>
                <p className="per_res">response rate</p>
              </div>
            </div>

            <div className="per_box1">
              <div className="first">
                <div className="channel-icon voice">
                  <Phone />
                </div>
                <div className="per_text_con">
                  <p className="per_text">Voice</p>
                  <p className="sends">320 sent</p>
                </div>
              </div>
              <div className="per_percentage_con">
                <p className="percentage">27.8%</p>
                <p className="per_res">response rate</p>
              </div>
            </div>
          </div>

          <div style={{ width: "620px", height: "317px", marginRight: "100px" }} className="recent_activity">
            <div className="rec_all">
              <p style={{ fontWeight: "400", fontSize: "14px" }}>Recent Activity</p>
              <button className="view-all-btn">
                View All
                <ArrowRight />
              </button>
            </div>

            <div className="con_box">
              <div className="left">
                <p className="rec_text">Payment received</p>
                <p className="rec_subtext">Smith Corp</p>
              </div>
              <div className="right">
                <p className="rec_price">$1,250</p>
                <p className="rec_time">2m ago</p>
              </div>
            </div>

            <div className="con_box">
              <div className="left">
                <p className="rec_text">Email sequence completed</p>
                <p className="rec_subtext">Johnson LLC</p>
              </div>
              <div className="right">
                <p className="rec_time">15m ago</p>
              </div>
            </div>

            <div className="con_box">
              <div className="left">
                <p className="rec_text">New import processed</p>
                <p className="rec_subtext">450 records</p>
              </div>
              <div className="right">
                <p className="rec_time">1h ago</p>
              </div>
            </div>

            <div className="con_box">
              <div className="left">
                <p className="rec_text">Campaign started</p>
                <p className="rec_subtext">Anderson Inc</p>
              </div>
              <div className="right">
                <p className="rec_time">2h ago</p>
              </div>
            </div>
          </div>
        </div>

        <div className="quick_actions">
          <p className="quick_text">Quick Actions</p>

          <div className="four_boxes_qick">
            <div className="quick_box">
              <div className="quick-action-icon upload">
                <Upload />
              </div>
              <p>Import Data</p>
            </div>

            <div className="quick_box">
              <div className="quick-action-icon template">
                <FileText />
              </div>
              <p>New Template</p>
            </div>

            <div className="quick_box">
              <div className="quick-action-icon campaign">
                <Plus />
              </div>
              <p>Create Campaign</p>
            </div>

            <div className="quick_box">
              <div className="quick-action-icon reports">
                <BarChart />
              </div>
              <p>View Reports</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
