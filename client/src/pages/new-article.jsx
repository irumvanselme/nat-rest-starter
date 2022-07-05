import { NotificationManager } from "react-notifications";
import { useNavigate } from "react-router-dom";
import Button from "../componets/button";
import FormControl from "../componets/form-control";
import AuthLayout from "../layouts/auth-layout";
import { post } from "../utils/axios";
import { submithandler } from "../utils/submithandler";
import { getToken } from "../utils/token";

export default function NewArticle() {
	let navigate = useNavigate();

	const createArticle = async (data) => {
		try {
			await post("/api/articles", data, {
				headers: {
					Authorization: `Bearer ${getToken()}`,
				},
			});

			NotificationManager.success("Created the Article");

			navigate("/");
		} catch (e) {
			NotificationManager.error("Failed to create the article");
		}
	};

	return (
		<AuthLayout>
			<div className="container">
				<h1>Create a New Article</h1>
				<form onSubmit={submithandler(createArticle)}>
					<div style={{ maxWidth: 700 }} className="mt-5 mb-5">
						<FormControl name="title" label="Title" />
						<FormControl
							textarea
							name="summary"
							label="Text Sumary"
							placeholder="Post Sumary"
						/>
						<FormControl
							textarea
							rows={20}
							name="body"
							label="Text Body"
							placeholder="Post Body"
						/>
						<Button title="Create" />
					</div>
				</form>
			</div>
		</AuthLayout>
	);
}
