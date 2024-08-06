import { useState, useEffect } from "react";

const useOnlineStatus = ()=> {
    const [onlineStatus,setOnlineStatus] = useState(true);
    // useEffect((
    // )=>{
        window.addEventListener("offline", (event) => {
            setOnlineStatus(false);
        });
        window.addEventListener("online", (event) => {
            setOnlineStatus(true);
        });
    // },[])
    
    return onlineStatus;
}
export default useOnlineStatus;











//finalize the contract when writing Hook- what will be the input, what will be the output