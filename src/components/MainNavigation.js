import { Link } from "react-router-dom";
import { PATHS } from "../const/paths";

const MainNavigation = () => {
    let {START, STORY, ABOUT, CONTACT} = PATHS

    return <nav>
                <ul>
                    <li>
                        <Link to={START} >start</Link>
                    </li>
                    <li>
                        <Link to={STORY}>opowieść</Link>
                    </li>
                    <li>
                        <Link to={ABOUT}>o projekcie</Link>
                    </li>
                    <li>
                        <Link to={CONTACT}>kontakt</Link>
                    </li>
                </ul>
            </nav>
}

export default MainNavigation