import { useEffect, useState } from "react";
import axios from "axios";
const UseEffectAPI = () => {
  var [posts, setPost] = useState([]);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((res) =>{
        setPost(res.data);
        console.log(posts);
      })
      .catch((err) => console.log("Couldn't read the API", err));
  }, []);
  return (
    <div>
      <h1>This is useEffect example with API</h1>
      <h2>
        we are going to fetch data from JSON placeholder and display the data
      </h2>
      <ol>
      {posts.map((post)=>(
      
      <li key={post.id}>{post.title}</li>
      
    ))}
    </ol>
      
      
      <button onClick={()=>{console.log("Button Clicked!!!")}}>hello</button>
    
    </div>
  );
}
export default UseEffectAPI;
