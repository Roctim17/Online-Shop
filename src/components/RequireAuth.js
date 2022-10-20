
import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../redux/slice/authSlice';

const RequireAuth = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    if(isLoggedIn){
        return children
    }
   return null
};
export const RequireAuthOut = ({children}) => {
    const isLoggedIn = useSelector(selectIsLoggedIn)

    if(!isLoggedIn){
        return children
    }
   return null
};

export default RequireAuth;