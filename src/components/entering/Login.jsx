import React from "react";
import { compose } from "redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

function Login() {
    return (
        <div>Login</div>
    )
}

export default compose(withAuthRedirect)(Login)