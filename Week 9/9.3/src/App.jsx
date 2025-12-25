import { useState } from 'react'
import { Post } from './Post'
import { TodoDynamic } from './TodoDynamic'

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
  const [posts, setPosts] = useState([])
  // when the button is clicked, we will destructure the posts
  // and add the next post that the server has returned
  // function loadNextPost(){
  //   const newPostData = {
  //     // React needs unique id for lists
  //     id: Math.random(),
  //     userName:"Ayan Gupta",
  //     imageURL:"https://media.licdn.com/dms/image/v2/D4D03AQGdbYi0hmWOag/profile-displayphoto-scale_100_100/B4DZqw2g.bJ4Ac-/0/1763903675278?e=1766620800&v=beta&t=pJCqSE6EF3rWnp4MfyE4NMwPj6nzmxCIQpEs0UQyMVI",
  //     bio:"Associate Consultant @Oracle Corporation",
  //     time:"2h. Edited.",
  //     caption:"After your immense love on CP-31 sheet and Post Contest Discussions, we are here with another Fr with video solutions of past contests from our Youtube channel at sudsdfsdf..more",
  //     postImage:"https://media.licdn.com/dms/image/v2/D5622AQEfHrtmGrFekw/feedshare-shrink_800/B56Zr8TnXJIYAg-/0/1765169593039?e=1766620800&v=beta&t=EvUy1PlocHXd2mf-isH185nNiSUHHmi4MdBnYQIZSp4"
  //   }
  //   setPosts([...posts, newPostData])
  // }
  //
  //
  //
  //   // basically i can render the posts, as an array, if properly defined with props.
  //   // i'm getting the data i need to fill in (the props) from the posts array, and populating it using map inside the postsArray
  //
  //   // here is where the magic happens
  //   // we take the posts array of json 
  //   // and we map it, or make a new array that basically sends the props to Post component
  //   const postsArray = posts.map(post => <Post
  //     // just need to send key, not accept it in the props of Post.jsx gotchya
  //     key={post.id}
  //     userName={post.userName}
  //     imageURL={post.imageURL}
  //     bio={post.bio}
  //     time={post.time}
  //     postImage={post.postImage}
  //     />
  //   )
  //   return (
  //     <>
  //     <TodoDynamic></TodoDynamic>
  //     {/* <CountUp></CountUp> */}
  //     {/* <button onClick={loadNextPost}>Click to load next post</button> */}
  //     {/* since postsArray is filled with <Post ../> it gets rendered normally*/}
  //     {/* {postsArray} */}
  //     </>
  //   )
  // }
  //
  export default App;

// need functionality - when i click a button, a new post must be added 
// so i can make an array of Posts, and for each post i can render? 
// and when button is clicked i add an element to the post? 


// function ToggleButton() {
//   let [posts, setPosts] = useState([]);

//   function toggle(){
//     setPosts([...posts, <Post 
//       userName="Ayan Gupta"    
//       imageURL="https://media.licdn.com/dms/image/v2/D4D03AQGdbYi0hmWOag/profile-displayphoto-scale_100_100/B4DZqw2g.bJ4Ac-/0/1763903675278?e=1766620800&v=beta&t=pJCqSE6EF3rWnp4MfyE4NMwPj6nzmxCIQpEs0UQyMVI"
//       bio="Associate Consultant @Oracle Corporation"
//       time="2h. Edited."
//       caption="After your immense love on CP-31 sheet and Post Contest Discussions, we are here with another Fr with video solutions of past contests from our Youtube channel at sudsdfsdf..more"
//       postImage={"https://media.licdn.com/dms/image/v2/D5622AQEfHrtmGrFekw/feedshare-shrink_800/B56Zr8TnXJIYAg-/0/1765169593039?e=1766620800&v=beta&t=EvUy1PlocHXd2mf-isH185nNiSUHHmi4MdBnYQIZSp4"}
//       />
//     ])
//   }
//   return (
//     <div> 
//       <button onClick={toggle}>Click to Load Posts</button>
//     </div>
//   )
// }
// component accepts props - variables bascialy 
// const Profile = ({name}) => {} can be written like this as well 
// function Profile({ name }){
//   return (
//     <div style={{
//         width: "250px",              // Increased width slightly for breathing room
//         backgroundColor: "white",    // White background looks cleaner than gray
//         borderRadius: "10px",        // Slightly less round corners standard for cards
//         border: "1px solid #e0e0e0", // Subtle border
//         position: "relative",
//         fontFamily: "Arial, sans-serif", // CRITICAL: Makes it look modern instantly
//         overflow: "hidden",          // Clips the top green part corners
//         margin: "30px"
//     }}> 

//       {/* Top Green/Grey Banner */}
//       <div style={{
//           height: "60px", 
//           backgroundColor: "#aebdb0", // Adjusted color to match reference
//       }}></div>

//       {/* Profile Image */}
//       <img style={{
//           width: "70px", 
//           height: "70px", 
//           borderRadius: "50%",       // 50% makes it a perfect circle
//           border: "2px solid white", // Adds that "cutout" effect
//           position: "absolute", 
//           left: "50%", 
//           top: "60px",               // Aligned to bottom of banner
//           transform: "translate(-50%, -50%)"
//       }} src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsynwv-5qtogtOwJbIjaPFJUmHpzhxgqIAug&s"} />

//       {/* User Info Section */}
//       <div style={{
//           marginTop: "40px",         // Pushes text down so it doesn't hit image
//           textAlign: "center",       // This centers the text!
//           paddingBottom: "15px"
//       }}>
//         <div style={{fontWeight: "bold", fontSize: "18px"}}>{name}</div>
//         <div style={{color: "gray", fontSize: "12px", marginTop: "5px"}}>Full Stack Developer</div>
//       </div>

//       <hr style={{border: "0", borderTop: "1px solid #e0e0e0", margin: 0}} />

//       {/* Stats Section */}
//       <div style={{padding: "15px"}}>

//         {/* Row 1 */}
//         <div style={{display: "flex", justifyContent: "space-between", fontSize: "12px", marginBottom: "5px"}}>
//           <span style={{color: "gray"}}>Profile Views</span>
//           <span style={{color: "#0a66c2", fontWeight: "bold"}}>2,000</span>
//         </div>

//         {/* Row 2 */}
//         <div style={{display: "flex", justifyContent: "space-between", fontSize: "12px"}}>
//           <span style={{color: "gray"}}>Post Impressions</span>
//           <span style={{color: "#0a66c2", fontWeight: "bold"}}>1,432</span>
//         </div>

//       </div>
//     </div>
//   )
// }
