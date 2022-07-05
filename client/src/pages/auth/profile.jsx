import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { get } from "../../utils/axios";
import { getToken } from "../../utils/token";

export default function Profile() {
	const navigate = useNavigate();

	useEffect(() => {
		(async function () {
			try {
				let res = await get("/api/auth/profile", {
					headers: {
						Authorization: `Bearer ${getToken()}`,
					},
				});
				console.log(res.data);
			} catch (error) {
				navigate("/auth/login");
			}
		})();
	}, []);

	return <div className="container">Profile here</div>;
}
