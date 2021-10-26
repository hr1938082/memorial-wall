import { useState } from "react"
import { Route, Redirect, useHistory } from "react-router-dom";

const ProtectedRoutes = ({ component: Component, ...restProps }) => {
    const history = useHistory();
    const [IsAuthenticated, setIsAuthenticated] = useState(true);
    const path = restProps.path
    return (
        <Route
            {...restProps}
            render={(props) => {
                return (
                    IsAuthenticated === true ? (
                        path === '/login' ? history.goBack() : <Component {...props} />
                    ) : (
                        <Redirect to="/login" />
                    )
                )
            }}
        />
    );
}

export default ProtectedRoutes