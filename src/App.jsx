import { useState } from 'react'
import api from './api'
import { useEffect } from 'react'
import { Player } from 'video-react'
import moment from 'moment'
import './video.css'

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
      <br />
      <br />
      <br />
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
                {/* <source src={`https://freela-api-blog.herokuapp.com/files/${item.image}`} /> */}

                <source src={`http://localhost:5000/files/${item.image}`} />
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
      <br />

      <div>
        <form style={{ display: 'flex', flexDirection: 'column' }}>
          Nome:{' '}
          <input
            type="text"
            style={{
              marginBottom: '20px',
              borderRadius: '5px',
              height: '24px',
            }}
          />
          Comentário:{' '}
          <textarea
            style={{
              marginBottom: '20px',
              borderRadius: '5px',
            }}
            cols="35"
            rows="15"
          ></textarea>
          <button type="submit" style={{ background: 'lihgtgray' }}>
            Enviar
          </button>
        </form>
        <br />
        <br />
        <br />
      </div>
    </div>
  )
}

export default App
