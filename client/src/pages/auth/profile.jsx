import { useEffect } from "react";
import { get } from "../../utils/axios";
import { getToken } from "../../utils/token";

export default function Profile() {
	useEffect(() => {
		(async function () {
			let res = await get("/api/auth/profile", {
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			});
			console.log(res.data);
		})();
	}, []);

	return <div>Profile here</div>;
}
