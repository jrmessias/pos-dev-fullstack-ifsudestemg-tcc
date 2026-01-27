import { NavLink } from "react-router-dom";
import { menuItems } from "../data";

export default function Sidebar({ collapsed }) {
    return (
        <aside className={`fixed top-0 left-0 h-screen bg-card border-r transition-all ${collapsed ? "w-20" : "w-64"}`}>
            <div className="h-16 flex items-center justify-center font-bold border-b">
                {collapsed ? "EG" : "EduGame"}
            </div>

            <nav className="p-2 space-y-1">
                {menuItems.map((item, i) => (
                    <NavLink
                        key={i}
                        to={item.path}
                        className={({ isActive }) =>
                            `block px-3 py-2 rounded-lg transition ${
                                isActive ? "bg-primary text-white" : "hover:bg-muted"
                            }`
                        }
                    >
                        {collapsed ? item.label[0] : item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
}
