import { Link, useNavigate } from "react-router-dom";
import Button from "../../componets/button";
import FormControl from "../../componets/form-control";
import { post } from "../../utils/axios";
import { submithandler } from "../../utils/submithandler";
import { NotificationManager } from "react-notifications";

export default function Register() {
	let navigate = useNavigate();

	async function register(data) {
		try {
			let res = await post("/api/auth/register", data);
			console.log(res);

			NotificationManager.success("Loggein Successfully");

			navigate("/profile");
		} catch (e) {
			if (e.response.status === 400) {
				let message = Object.values(e.response.data)[0][0];
				NotificationManager.error(message);
			} else if (e.response.status === 404) {
				NotificationManager.error("Bad Credentials");
			}
		}
	}

	return (
		<div className="container d-flex flex-column vh-100 align-items-center">
			<h2 className="t-primary fw-bold mt-5">Hello. Have an account</h2>
			<div className={"mt-5 w-100"} style={{ maxWidth: 500 }}>
				<form onSubmit={submithandler(register)} autoComplete={"false"}>
					<FormControl label="Full Names" name={"fullNames"} />
					<FormControl label="Email" name={"email"} />
					<FormControl label="username" name={"username"} />
					<FormControl
						label="Password"
						type="password"
						name={"password"}
					/>
					<Button />
				</form>
			</div>
			<div className="mt-4">
				<Link to="/auth/login">
					<span className="t-primary">Already have an account</span>
				</Link>
			</div>
		</div>
	);
}
