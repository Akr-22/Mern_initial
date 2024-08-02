import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token , setToken] = useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");
    const [isLoading, setIsLoading]= useState(true);
    const [services,setServices]=useState([]);
    const authorizationToken = `Bearer ${token}`

    const API = import.meta.env.VITE_APP_URI_API;

    const storeTokenInLS =(serverToken) =>{
        setToken(serverToken);
        return localStorage.setItem("token",serverToken);
    };


    let isLoggedIn = !!token;

    // logout functionality
    const LogoutUser = () =>{
        setToken("");
        return localStorage.removeItem("token");
    };

    //jwt authentication =to get the current logged in user
    const userAuthentication= async()=>{
        try {
            setIsLoading(true);
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization: authorizationToken,
                },
            })
            if(response.ok){
                const data=await response.json();
                setUser(data.userData);
                setIsLoading(false);
            }else{
                console.log("error fetching user data");
                setIsLoading(false);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(()=>{
        userAuthentication();
    },[]);

    ///to fetch the services data from the database
    
    const getServices = async() =>{
        try {
            const response = await fetch("http://localhost:5000/api/data/service",{
                method:"GET",
            })

            if(response.ok){
                const data = await response.json();
                setServices(data.msg);
            }
        } catch (error) {
            console.log(`services frontend error :${error}`);
        }
    }
    
    
    
    useEffect(()=>{
        getServices();
        userAuthentication();
    },[]);



    return(
        <AuthContext.Provider value={{ isLoggedIn ,storeTokenInLS , LogoutUser , user, services,authorizationToken,isLoading,API}}>
            {children}
        </AuthContext.Provider>
    ) ;
};

export const useAuth =() =>{
    const authContextValue = useContext(AuthContext); 
    if(!authContextValue){
        throw new Error("useAuth used outside of the provider")
    }
    return authContextValue; 
}