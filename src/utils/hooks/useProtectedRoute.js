import { useEffect } from 'react';



function useProtectedRoute({ children, userName, setUserName }) {

    useEffect(() => {
        // handle authen
    }, [input])

    return children;

}

export default useProtectedRoute;
