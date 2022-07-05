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
			<div className="shadow py-3 position-sticky z-10 bg-white top-0">
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
			</div>
			<div className="pt-5">{children}</div>
		</div>
	);
}
