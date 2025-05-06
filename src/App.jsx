import { useState } from "react"

const App = () => {

  const [Likes, setLikes] = useState(0);
  const [Dislikes , setDislikes] = useState(0);

  function handleLike() {
    setLikes(Likes + 1);
  }

  function handleDislike() {
    setDislikes(Dislikes + 1);
  }


  return (
    <>
<button onClick={handleLike}>Like</button> {Likes}  :Likes

<br />

<button onClick={handleDislike}>Dislike</button> {Dislikes} :Dislike

    </>
  )

}

export default App


























