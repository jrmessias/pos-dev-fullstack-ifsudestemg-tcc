import {Outlet} from "react-router-dom";
import LeftSidebar from "../pages/dashboard/LeftSidebar.js";
import RightSidebar from "../pages/dashboard/RightSidebar.js";
import Header from "../pages/dashboard/Header.js";
import usePersistedState from "../hooks/usePersistedState.js";

export default function LayoutSystem() {
    const [leftOpen, setLeftOpen] = usePersistedState("sidebar:left", true);
    const [rightOpen, setRightOpen] = usePersistedState("sidebar:right", true);
    const pathname = location.pathname;
    const type = pathname.substring(1);

    return <>
        <div className="min-h-screen bg-background">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"></div>
            <LeftSidebar leftOpen={leftOpen} setLeftOpen={setLeftOpen} type={type}/>
            <RightSidebar rightOpen={rightOpen} setRightOpen={setRightOpen} type={type}/>
            <Header leftOpen={leftOpen} rightOpen={rightOpen} type={type}/>
            <main
                className={`pt-16 min-h-screen transition-all duration-300 ${leftOpen ? 'ml-64' : 'ml-16'} ${rightOpen ? 'mr-72' : 'mr-12'}`}>
                <div className="p-6">
                    <div className="space-y-6">
                        <Outlet/>
                    </div>
                </div>
            </main>
        </div>
    </>
}
