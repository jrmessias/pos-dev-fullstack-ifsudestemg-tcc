import usePersistedState from "../../hooks/usePersistedState.js";
import HomeStudent from "./HomeStudent.js";
import HomeTeacher from "./HomeTeacher.js";

export default function Dashboard() {
    const [leftOpen] = usePersistedState("sidebar:left", true);
    const [rightOpen] = usePersistedState("sidebar:right", true);
    const pathname = location.pathname;
    const type = pathname.substring(1);
    let home;
    if (type === "teacher") {
        home = <HomeTeacher leftOpen={leftOpen} rightOpen={rightOpen} type={type}/>;
    } else {
        home = <HomeStudent leftOpen={leftOpen} rightOpen={rightOpen} type={type}/>;
    }

    return <>
        {home}
    </>
}
