import FormControl from "../../componets/form-control";
import Button from "../../componets/button";
import { submithandler } from "../../utils/submithandler";
import { post } from "../../utils/axios";
import cogoToast from "cogo-toast";

import { Link, useNavigate } from "react-router-dom";
import { setToken } from "../../utils/token";

export default function Login() {
    let navigate = useNavigate();

    async function login(data) {
        try {
            let res = await post("/api/auth/signin", data);

            setToken(res.data);

            cogoToast.success("Loggein Successfully");

            navigate("/profile");
        } catch (e) {
            if (e.response.status === 400) {
                let message = Object.values(e.response.data)[0][0];
                cogoToast.error(message);
            } else if (e.response.status === 404) {
                cogoToast.error("Bad Credentials");
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
                    <FormControl label="Email or Username" name={"login"} />
                    <FormControl
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
