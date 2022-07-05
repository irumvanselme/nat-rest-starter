import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import AuthLayout from "../layouts/auth-layout";
import { get } from "../utils/axios";

export function ReadArticle() {
	const router = useParams();
	const [article, setArticle] = useState({});

	useEffect(() => {
		(async function () {
			let { data } = await get(
				"http://localhost:8000/api/articles/" + router.id
			);

			setArticle(data);
		})();
	}, []);

	return (
		<AuthLayout>
			<div className="container">
				<hr />
				<h3 className="fw-bold t-primary">{article.title}</h3>

				<div>
					<div className="dropdown">
						<button
							className="btn btn-secondary dropdown-toggle"
							type="button"
							id="dropdownMenuButton1"
							data-bs-toggle="dropdown"
							aria-expanded="false"
						>
							Dropdown button
						</button>
						<ul
							className="dropdown-menu"
							aria-labelledby="dropdownMenuButton1"
						>
							<li>
								<a className="dropdown-item" href="#">
									Action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Another action
								</a>
							</li>
							<li>
								<a className="dropdown-item" href="#">
									Something else here
								</a>
							</li>
						</ul>
					</div>
				</div>
			</div>
		</AuthLayout>
	);
}
