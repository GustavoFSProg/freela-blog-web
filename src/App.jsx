import { useState } from 'react'
import api from './api'
import { useEffect } from 'react'
import { Player } from 'video-react'



function App() {
  const [posts, setPosts] = useState([])

async  function getPosts() {
  const { data } = await api.get('/all')
  
  setPosts(data)
}
  
  console.log(posts)
  
  useEffect(() => {
    getPosts()
  },[])

  return (
    <div style={{
      display: 'flex', flexDirection: 'column',
      justifyContent: 'center', alignItems: 'center'
    }}>
      {posts.map(item => {
        return (

          <div key={item.id} style={{
            width: '50%',
          }}>
            <div style={{width:'35%'}}>
            <Player >
              <source src={`https://freela-api-blog.herokuapp.com/files/${item.image}`} />
              </Player>
              </div >

          <p>
            {item.title}
          </p>

          <p>
            {item.text}
          </p>

          </div>
        )


      })}
    </div>
  )
}

export default App
