import { Link } from "react-router-dom";

export default function BlogPost({ post }) {
    return (
        <div>
            <div className="card p-3">
                <h4 className="fw-bold">{post.title}</h4>
                <p>{post.body}</p>
                <div>
                    <span className="text-info">
                        By {post.creator.fullNames}
                    </span>
                </div>
                <div className="mt-2">
                    <Link to={"/post/" + post.id}>
                        <button className="btn btn-sm btn-primary">
                            Read More
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
}
