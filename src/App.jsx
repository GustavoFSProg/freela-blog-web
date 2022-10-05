import { useState } from 'react'
import api from './api'
import { useEffect } from 'react'
import { Player } from 'video-react'
import moment from 'moment'

function App() {
  const [posts, setPosts] = useState([])

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  async function getPosts() {
    const { data } = await api.get('/all')

    setPosts(data)
    return data
  }

  console.log(posts)

  useEffect(() => {
    getPosts()
  }, [])

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {posts.map((item) => {
        return (
          <div
            key={item.id}
            style={{
              width: '50%',
            }}
          >
            <div style={{ width: '35%' }}>
              <Player>
                <source src={`https://freela-api-blog.herokuapp.com/files/${item.image}`} />

                {/* <source src={`http://localhost:5000/files/${item.image}`} /> */}
              </Player>
            </div>

            <p>
              <h2>{item.title}</h2>
            </p>

            <p>{item.text}</p>

            <p>Data: {getDateWithoutTime(item.createdAt)}</p>
          </div>
        )
      })}
    </div>
  )
}

export default App
