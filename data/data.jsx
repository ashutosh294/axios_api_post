import React, { useEffect, useState } from "react";
import axios from "axios";
const POST_API = "https://jsonplaceholder.typicode.com/posts";

export function Data() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get(POST_API)
            .then(response => {
                
                
                setPosts(response.data);
                return response.json
            })
    }, []);

    return (
        <div className="App">
            
                    <div>

                   {posts.map((post) => (

                     <div key={post.id}>

    userid={post.userId}

    id={post.id}

    title={post.title}

    body={post.body}


  </div>

))}

</div>


                    {/* <div><ul><li>{posts.id}:{posts.userId}:{posts.title}:{posts.body}</li></ul></div> */}
              
        </div>
    )  
}



// using usequery


// import { useQuery } from "react-query"

// import axios from "axios"



// const fetchData = () => {

//     return axios.get(' https://jsonplaceholder.typicode.com/posts')

// }

// export const Data = () => {

//     const { data, isLoading } = useQuery('posts',fetchData)


//     return (

//         <>

//         <div>

//             {data.data.map((user,index) => (

//                 <div key = {index}>title = {user.title}</div>

//             ))}

//         </div>

//         </>

//     )

// }










// alternative method
// import react,{useState,useEffect} from "react"

// import axios from "axios"



// export function Data() {

//     const[post,setPost] = useState([])

//     const getRepo = () => {

//         axios.get('https://jsonplaceholder.typicode.com/posts')

//         .then((response) => {

            

//             const myRepo = response.data

//             setPost(myRepo)

//         })

//     }

//     useEffect(() => getRepo(),[])

//     return(

//         <div>

//         {post.map((posts,index) =>(

//             <div key = {index}>id = {posts.id}: title : {posts.title}</div>

//         ))}

//     </div>
//     )

// }
