import axios from 'axios'

const instance = axios.create({
    baseURL:  "http://localhost:3001",
});

export const setToken = (token) =>{
    instance.defaults.headers.common['Authorization'] = "Bearer "+token;
    localStorage.setItem("TOKEN", token)
}

const token = localStorage.getItem("TOKEN")
if(token)
    setToken(token)

export const signin = async (email, password) => {
    try{
        const res = await instance.post("/users/signin",{
            email, password
        })
        setToken(res.data.token)
        console.log(res)
        return res
    } catch(e){
        console.log(e)
    }
}

export const getPosts = async () =>{
    try{
        const res = await instance.get("/posts")
        console.log(res)
        return res.data
    } catch(e){
        console.log(e)
        throw e;
    }
}