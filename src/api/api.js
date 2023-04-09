import axios from "axios";

export const getChatResponse = async(message,product) => {
    try{
        const resp = await axios.get(`https://1289prakash.com/api/chat?message=${message}&product=${product}`)
        if(resp.status === 200){
            return resp.data.data
        }
        return "server not reachable"
    }catch(err){
        return "server not reachable"
    }
}