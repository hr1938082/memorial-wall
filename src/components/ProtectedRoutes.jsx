import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { UserContext } from "../Context/UserContext";

const ProtectedRoutes = ({ component: Component, ...restProps }) => {
    const { User } = useContext(UserContext);
    const IsAuthenticated = User.isAuthenticated;
    return (
        <Route
            {...restProps}
            render={(props) => {
                return (
                    IsAuthenticated === true ? (
                        <Component {...props} />
                    ) : (
                        <Redirect to="/login" />
                    )
                )
            }}
        />
    );
}

export default ProtectedRoutes