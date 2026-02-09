export const API_URL = import.meta.env.VITE_API_URL;
const Api = async(endpoint,options = {})=>{
    const res = await fetch(`${API_URL}${endpoint}`,options);
    if(!res.ok){
        const errorMessage = await res.json().catch(()=>({}));
        throw new Error(errorMessage.message);
    }
    return await res.json();
};

export default Api;