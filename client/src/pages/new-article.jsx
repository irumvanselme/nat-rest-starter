import { useState } from "react";
import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import Button from "../componets/button";
import FormControl from "../componets/form-control";
import AuthLayout from "../layouts/auth-layout";
import { post } from "../utils/axios";
import { submithandler } from "../utils/submithandler";
import { getToken } from "../utils/token";
import { validate } from "../utils/validator";

export default function NewArticle() {
	let navigate = useNavigate();

	const [errors, setErrors] = useState({});

	const createArticle = async (data) => {
		try {
			let [passes, info] = validate(data, {
				title: "required|min:3",
				body: "required|min:20",
				summary: "required|min:10",
			});

			if (!passes) {
				setErrors(info);
				return;
			}

			await post("/api/articles", data, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			});

			NotificationManager.success("Created the Article", "Success");

			navigate("/");
		} catch (e) {
			NotificationManager.error("Failed to create the article", "Error");
		}
	};

	return (
		<div className="container">
			<h1>Create a New Article</h1>
			<form onSubmit={submithandler(createArticle)}>
				<div style={{ maxWidth: 700 }} className="mt-5 mb-5">
					<FormControl
						name="title"
						errors={errors.title}
						label="Title"
					/>
					<FormControl
						textarea
						errors={errors.summary}
						name="summary"
						label="Text Sumary"
						placeholder="Post Sumary"
					/>
					<FormControl
						textarea
						errors={errors.body}
						rows={20}
						name="body"
						label="Text Body"
						placeholder="Post Body"
					/>
					<Button title="Create" />
				</div>
			</form>
		</div>
	);
}
