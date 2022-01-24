import { useQuery } from "react-query";

import axios from "axios";

export const Data = () => {
  const { data, isFetching } = useQuery("posts", () => {
    return axios.get(" https://jsonplaceholder.typicode.com/posts");
  });

  if (isFetching) {
    return <h2> Data is getting fetched </h2>;
  }

  return (
    <>
      <div>
        {data.data.map((post, index) => (
          <div key={index}>userId = {post.userId}</div>
        ))}
      </div>
    </>
  );
};





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
