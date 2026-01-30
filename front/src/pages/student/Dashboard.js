import LeftSidebar from "./LeftSidebar.js";
import usePersistedState from "../../hooks/usePersistedState.js";
import RightSidebar from "./RightSidebar.js";
import Header from "./Header.js";
import Content from "./Content.js";

export default function StudentDashboard() {
    const [leftOpen, setLeftOpen] = usePersistedState("sidebar:left", true);
    const [rightOpen, setRightOpen] = usePersistedState("sidebar:right", true);

    return (
        <div className="min-h-screen bg-background">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"></div>
            <LeftSidebar leftOpen={leftOpen} setLeftOpen={setLeftOpen}/>
            <RightSidebar rightOpen={rightOpen} setRightOpen={setRightOpen}/>
            <Header leftOpen={leftOpen} rightOpen={rightOpen}/>
            <Content leftOpen={leftOpen} rightOpen={rightOpen}/>
        </div>
    );
}
