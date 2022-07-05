import FormControl from "../../componets/form-control";
import Button from "../../componets/button";
import { submithandler } from "../../utils/submithandler";
import { post } from "../../utils/axios";

import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../utils/token";
import { validate } from "../../utils/validator";
import { useState } from "react";

import { NotificationManager } from "react-notifications";
import AuthLayout from "../../layouts/auth-layout";

export default function Login() {
	let navigate = useNavigate();

	const [errors, setErrors] = useState({});

	async function login(data) {
		try {
			let [passes, info] = validate(data, {
				login: "required",
				password: "required",
			});

			if (!passes) {
				setErrors(info);
				return;
			}

			setErrors({});

			let res = await post("/api/auth/signin", data);

			setToken(res.data);

			NotificationManager.success("Loggein Successfully", "Success");

			navigate("/profile");
		} catch (e) {
			if (e.response.status === 400) {
				let message = Object.values(e.response.data)[0][0];
				NotificationManager.error(message);
			} else if (e.response.status === 404 || e.response.status === 403) {
				NotificationManager.error(
					"Check your email or Password",
					"Invalid Credentials"
				);
			}
		}
	}

	return (
		<div className="container d-flex flex-column vh-100 align-items-center">
			<h2 className="t-primary fw-bold mt-5">
				Welcome Back, Log in Here
			</h2>
			<div className={"mt-5 w-100"} style={{ maxWidth: 500 }}>
				<form onSubmit={submithandler(login)}>
					<FormControl
						errors={errors.login}
						label="Email or Username"
						name={"login"}
					/>
					<FormControl
						errors={errors.password}
						label="Password"
						type="password"
						name={"password"}
					/>
					<Button />
				</form>
			</div>
			<div className="mt-4">
				<Link to="/auth/register">
					<span className="t-primary">Don't have an account</span>
				</Link>
			</div>
		</div>
	);
}
