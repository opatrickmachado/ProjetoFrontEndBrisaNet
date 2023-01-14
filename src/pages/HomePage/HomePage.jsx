import { Outlet, Link } from "react-router-dom";
import { Logo, HeaderHome, MainHome } from "./HomePage.style";

function HomePage(props) {
    return (
        <>
            <HeaderHome>
                <nav>
                    <ul>
                        <li>
                            <Link to="/">
                                <Logo src="/logo.svg" />
                            </Link>
                        </li>
                    </ul>
                </nav>
            </HeaderHome>
            <MainHome>
                <Outlet />
            </MainHome>
        </>
    )
}

export default HomePage