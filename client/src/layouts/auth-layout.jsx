import jwtDecode from "jwt-decode";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getToken, removeToken } from "../utils/token";

export default function AuthLayout({ children }) {
	const [isLoggedIn, setIsLoggedIn] = useState(false);
	const [user, setUser] = useState({});

	const navigate = useNavigate();

	useEffect(() => {
		let token = getToken();

		if (token == null) {
			setIsLoggedIn(false);
			return;
		}

		setUser(jwtDecode(token).user);

		setIsLoggedIn(true);
	}, []);

	const logout = () => {
		removeToken();
		window.location.href = "/auth/login";
	};

	return (
		<div className="vh-100 d-flex flex-column">
			<div className="shadow-sm py-3 position-sticky z-10 bg-white top-0">
				<div className="container d-flex justify-content-between align-items-center">
					<div>
						<Link to={"/"} className="text-decoration-none">
							<h3 className="t-primary fw-bold text-decoration-none">
								Application name
							</h3>
						</Link>
					</div>
					<div className="d-flex align-items-center">
						{isLoggedIn ? (
							<>
								<div className="pr-5 bg-red-500">
									<Link to={"/new-article"}>
										<button className="btn btn-primary">
											New Post
										</button>
									</Link>
								</div>
								<div className="dropdown">
									<div
										className="dropdown-toggle px-5"
										type="button"
										id="dropdownMenuButton1"
										data-bs-toggle="dropdown"
										aria-expanded="false"
									>
										{user.username}
									</div>
									<ul
										className="dropdown-menu bg-white"
										aria-labelledby="dropdownMenuButton1"
									>
										<li>
											<Link
												to={"/profile"}
												className="dropdown-item"
												href="#"
											>
												Profile
											</Link>
										</li>
										<li>
											<a
												className="dropdown-item"
												href="#"
												onClick={logout}
											>
												Log out
											</a>
										</li>
									</ul>
								</div>
							</>
						) : (
							<>
								<div className="mr-1 px-2">
									<Link
										className="btn btn-primary"
										to="/auth/login"
									>
										Login
									</Link>
								</div>
								<div className="px-2">
									<Link
										className="btn btn-outline-primary"
										to="/auth/register"
									>
										Register
									</Link>
								</div>
							</>
						)}
					</div>
				</div>
			</div>
			<div
				className="pt-5"
				style={{
					background: "#fafafa",
					flexGrow: 1,
				}}
			>
				{children}
			</div>
		</div>
	);
}
