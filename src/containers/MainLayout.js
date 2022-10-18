import MainNavigation from "../components/MainNavigation"
import { Outlet } from "react-router-dom";

const MainLayout = () => {
    return  <div>
                <MainNavigation />
                <Outlet />
            </div>
}

export default MainLayout