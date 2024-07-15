import { useEffect, useState } from "react";

function TakePosts() {
    
    const [ post, setPost ] = useState()

    

    let id = 1
    useEffect(() => {
        const changeNew = setInterval(() => {
            id++
            const fetchUserData = async () => {
                const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
                const userData = await response.json()
                setPost(userData)
            }

            fetchUserData()
            return () => setPost(null)

        },10000) 
        return () => {
            
            clearInterval(changeNew)
            console.log("Limpou")
            
        }


    },[])

    return (
        <div>
            {post ? (
                <div>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            ) : (
                <p>Carregando notícia</p>
            )}            
        </div>
    )
}
export default TakePosts