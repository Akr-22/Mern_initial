import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token , setToken] = useState(localStorage.getItem("token"));
    const [user,setUser]=useState("");
    const [services,setServices]=useState("")

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
            const response = await fetch("http://localhost:5000/api/auth/user",{
                method:"GET",
                headers:{
                    Authorization:`Bearer ${token}`,
                },
            })
            if(response.ok){
                const data=await response.json();
                setUser(data.userData);
            }else{
                console.log("error fetching user data");
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
        <AuthContext.Provider value={{ isLoggedIn ,storeTokenInLS , LogoutUser , user, services}}>
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