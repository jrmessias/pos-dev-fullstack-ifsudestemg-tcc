import LeftSidebar from "./LeftSidebar.js";
import usePersistedState from "../../hooks/usePersistedState.js";
import RightSidebar from "./RightSidebar.js";
import Header from "./Header.js";
import HomeStudent from "./HomeStudent.js";
import HomeTeacher from "./HomeTeacher.js";

export default function Dashboard() {
    const [leftOpen, setLeftOpen] = usePersistedState("sidebar:left", true);
    const [rightOpen, setRightOpen] = usePersistedState("sidebar:right", true);
    const pathname = location.pathname;
    const type = pathname.substring(1);
    let home;
    if (type === "teacher") {
        home = <HomeTeacher leftOpen={leftOpen} rightOpen={rightOpen} type={type}/>;
    } else {
        home = <HomeStudent leftOpen={leftOpen} rightOpen={rightOpen} type={type}/>;
    }

    return (
        <div className="min-h-screen bg-background">
            <div className="fixed inset-0 bg-background/80 backdrop-blur-sm z-30 lg:hidden"></div>
            <LeftSidebar leftOpen={leftOpen} setLeftOpen={setLeftOpen} type={type}/>
            <RightSidebar rightOpen={rightOpen} setRightOpen={setRightOpen} type={type}/>
            <Header leftOpen={leftOpen} rightOpen={rightOpen} type={type}/>
            {home}
        </div>
    );
}
