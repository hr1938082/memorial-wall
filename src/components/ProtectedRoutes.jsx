import { Route, Redirect } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...restProps }) => {
    const IsAuthenticated = true;
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