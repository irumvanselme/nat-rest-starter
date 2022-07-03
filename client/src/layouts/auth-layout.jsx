import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { getToken } from "../utils/token";

export default function AuthLayout({ children }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState({});

    useEffect(() => {
        let token = getToken();

        if (token == null) {
            setIsLoggedIn(false);
            return;
        }

        setUser(jwtDecode(token).user);

        setIsLoggedIn(true);
    }, []);

    return (
        <div>
            <div className="container d-flex justify-content-between my-5  align-items-center">
                <div>
                    <Link to={"/"} className="text-decoration-none">
                        <h1 className="t-primary fw-bold text-decoration-none">
                            School Blog
                        </h1>
                    </Link>
                </div>
                <div className="d-flex align-items-center">
                    {isLoggedIn ? (
                        <>
                            <div>
                                <Link to={"/new-article"}>
                                    <button className="btn btn-primary">
                                        New Post
                                    </button>
                                </Link>
                            </div>
                            <div className="mx-5">{user.username}</div>
                        </>
                    ) : (
                        <>
                            <div className="mr-1 px-2">
                                <a
                                    className="btn btn-primary"
                                    href="/auth/login"
                                >
                                    Login
                                </a>
                            </div>
                            <div className="px-2">
                                <a
                                    className="btn btn-outline-primary"
                                    href="/auth/register"
                                >
                                    Register
                                </a>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <div>{children}</div>
        </div>
    );
}
