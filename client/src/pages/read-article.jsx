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
            </div>
        </AuthLayout>
    );
}
