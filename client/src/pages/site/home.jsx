import { useEffect } from "react";
import { useState } from "react";
import BlogPost from "../../componets/blog-post";
import AuthLayout from "../../layouts/auth-layout";
import { get } from "../../utils/axios";

export default function Home() {
	const [posts, setPosts] = useState([]);

	useEffect(() => {
		(async function () {
			let { data } = await get("http://localhost:8000/api/articles");
			setPosts(data);
		})();
	}, []);

	return (
		<div className="container mt-5">
			<h1>Recent Posts</h1>
			<div className="row row-cols-md-2 row-cols-sm-1 row-cols-lg-4 g-3">
				{posts.map((post, i) => (
					<BlogPost key={i} post={post} />
				))}
			</div>
		</div>
	);
}
