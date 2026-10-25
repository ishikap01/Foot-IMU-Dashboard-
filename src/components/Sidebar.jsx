
import {
  Activity,
  BarChart3,
  CircleHelp,
  Footprints,
  History,
  LayoutDashboard,
  Settings,
  SlidersHorizontal,
} from "lucide-react";

const items = [
  { label: "Dashboard", icon: LayoutDashboard, active: true },
  { label: "Calibration", icon: SlidersHorizontal },
  { label: "Record Trial", icon: Activity },
  { label: "Gait Analysis", icon: BarChart3 },
  { label: "Trial History", icon: History },
  { label: "Settings", icon: Settings },
  { label: "Help", icon: CircleHelp },
];

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-brand">
        <div className="brand-mark">
          <Footprints size={28} strokeWidth={2.4} />
        </div>
        <div>
          <div className="sidebar-title">FOOT IMU</div>
          <div className="sidebar-subtitle">Gait Analysis</div>
        </div>
      </div>

      <nav className="sidebar-nav">
        {items.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            className={`nav-item ${active ? "active" : ""}`}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </nav>

      <div className="system-status">
        <div className="system-status-title">SYSTEM STATUS</div>
        {[
          "Sensor Connected",
          "Data Streaming",
          "Calibration Ready",
          "Analysis Ready",
        ].map((status) => (
          <div className="system-row" key={status}>
            <span className="system-dot" />
            <span>{status}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default Sidebar;
