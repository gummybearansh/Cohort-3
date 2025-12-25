import { useState } from 'react';
import { Post } from './Post';
import { TodoDynamic } from './TodoDynamic';

function App() {
    // posts is an array of js objects
    // json basically that the server will return 
    // const [posts, setPosts] = useState([{
    //   userName:"Ayan Gupta",
    //   imageURL:"https://media.licdn.com/dms/image/v2/D4D03AQGdbYi0hmWOag/profile-displayphoto-scale_100_100/B4DZqw2g.bJ4Ac-/0/1763903675278?e=1766620800&v=beta&t=pJCqSE6EF3rWnp4MfyE4NMwPj6nzmxCIQpEs0UQyMVI",
    //   bio:"Associate Consultant @Oracle Corporation",
    //   time:"2h. Edited.",
    //   caption:"After your immense love on CP-31 sheet and Post Contest Discussions, we are here with another Fr with video solutions of past contests from our Youtube channel at sudsdfsdf..more",
    //   postImage:"https://media.licdn.com/dms/image/v2/D5622AQEfHrtmGrFekw/feedshare-shrink_800/B56Zr8TnXJIYAg-/0/1765169593039?e=1766620800&v=beta&t=EvUy1PlocHXd2mf-isH185nNiSUHHmi4MdBnYQIZSp4"
    // }])
    // can even make it an empty array, and when the button is clicked, the first object will enter this array, turn into <Post ..> component's props, and get rendered automatically
    const [posts, setPosts] = useState([]);
    // when the button is clicked, we will destructure the posts
    // and add the next post that the server has returned
    function loadNextPost() {
        const newPostData = {
            // React needs unique id for lists
            id: Math.random(),
            userName: "Ayan Gupta",
            imageURL: "https://media.licdn.com/dms/image/v2/D4D03AQGdbYi0hmWOag/profile-displayphoto-scale_100_100/B4DZqw2g.bJ4Ac-/0/1763903675278?e=1766620800&v=beta&t=pJCqSE6EF3rWnp4MfyE4NMwPj6nzmxCIQpEs0UQyMVI",
            bio: "Associate Consultant @Oracle Corporation",
            time: "2h. Edited.",
            caption: "After your immense love on CP-31 sheet and Post Contest Discussions, we are here with another Fr with video solutions of past contests from our Youtube channel at sudsdfsdf..more",
            postImage: "https://media.licdn.com/dms/image/v2/D5622AQEfHrtmGrFekw/feedshare-shrink_800/B56Zr8TnXJIYAg-/0/1765169593039?e=1766620800&v=beta&t=EvUy1PlocHXd2mf-isH185nNiSUHHmi4MdBnYQIZSp4"
        };
        setPosts([...posts, newPostData]);
    }



    // basically i can render the posts, as an array, if properly defined with props.
    // i'm getting the data i need to fill in (the props) from the posts array, and populating it using map inside the postsArray
    // here is where the magic happens
    // we take the posts array of json 
    // and we map it, or make a new array that basically sends the props to Post component
    const postsArray = posts.map(post => <Post
        // just need to send key, not accept it in the props of Post.jsx gotchya
        key={post.id}
        userName={post.userName}
        imageURL={post.imageURL}
        bio={post.bio}
        time={post.time}
        postImage={post.postImage} />
    );
    return (
        <>
            <TodoDynamic></TodoDynamic>
            {/* <CountUp></CountUp> */}
            {/* <button onClick={loadNextPost}>Click to load next post</button> */}
            {/* since postsArray is filled with <Post ../> it gets rendered normally*/}
            {/* {postsArray} */}
        </>
    );
}
export default App;

