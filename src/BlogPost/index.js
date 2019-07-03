// we would NOT want to make this a STATEFUL component; this will just be responsible
// for rendering shit
import React from "react";
// import Button from "../Button";

function BlogPost({title, author, post, index, handleDeletePost}) {
    // note how we can take advantage of DESTRUCTURING (that way we can save a bit on typing); in other
    // words, if we chose NOT to destructure, we would have had to type props.post.title, props.post.author, etc
    // but with destructuring, it gives us the ability to call on posts straight out of the box from the params

    // another bonus of destructuring is that you can CLEARLY see what all is being passed in as a prop from the parent
    return(
        <li>
        {/* a key has to be unique within a list */}

        {/* <h3>{post.title}</h3>
        <h4>{post.author}</h4>
        <p>{post.post}</p> */}
        <h3>{title}</h3>
        <h4>{author}</h4>
        <p>{post}</p>

        {/* <button onClick={this.handleDeletePost(index)}>Delete</button> */}
        {/* we CAN'T use the code above because that would INSTANTIATE handleDeletePost everytime
            this p tag (technically component) is rendered */}
        <button onClick={()=>handleDeletePost(index)}>Delete</button>
        {/* since we are using destructuring, and since we're passing in handleDeletePost,
            we just need to get rid of the "this." that was in front of handleDeletePost;
            remember, we DONT want to invoke hDP up in the params; if we WANTED to leave
            props as is, we could've  just replace "this." to "props."  */}
    </li>
    )
}

export default BlogPost;
