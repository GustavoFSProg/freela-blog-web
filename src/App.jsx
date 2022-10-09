import { useState } from 'react'
import api from './api'
import { useEffect } from 'react'
import { Player } from 'video-react'
import moment from 'moment'
import Header from './components/header/Header'
import './video.css'

function App() {
  const [posts, setPosts] = useState([])
  const [comments, setComments] = useState([])
  const [name, setName] = useState('')
  const [comm, setComm] = useState('')
  const id = localStorage.getItem('ID')

  function getDateWithoutTime(date) {
    return moment(date).format('DD-MM-YYYY')
  }

  async function getPosts() {
    const { data } = await api.get('/all')

    setPosts(data)
    return data
  }

  async function getComments() {
    const { data } = await api.get('/get-comments')

    setComments(data)
    return data
  }

  async function handleComments(e) {
    e.preventDefault()
    try {
      const data = { user_name: name, comments: comm }

      console.log(id)

      await api.post(`/register-coments/${id}`, data)
      alert('Comentario enviado com Sucesso!')

      getPosts()
      getComments()


      return data
    } catch (error) {
      alert('ERROR!', error)
    }

    return data
  }

  console.log(posts)

  useEffect(() => {
    getPosts()
    getComments()
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
      <Header />
      <br />
      <br />
      <br />
      {posts.map((item) => {
        {
          localStorage.setItem('ID', item.id)
        }
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
      <br />

      <div style={{ width: '38%' }}>
        <h2 style={{ marginLeft: '-20px' }}>Comentários:</h2>
        {comments.map((data) => {
          return (
            <div key={data.id} style={{ marginBottom: '38px' }}>
              <p>
                Nome: <strong style={{ marginLeft: '4px' }}>{data.user_name}</strong>
              </p>
              <p>{data.comments}</p>
            </div>
          )
        })}
        <br />
        <br />

        <form onSubmit={handleComments} style={{ display: 'flex', flexDirection: 'column' }}>
          Nome:{' '}
          <input
            type="text"
            style={{
              marginBottom: '20px',
              borderRadius: '5px',
              height: '24px',
            }}
            name="name"
            id="name"
            onChange={(e) => setName(e.target.value)}
          />
          Comentário:{' '}
          <textarea
            style={{
              marginBottom: '20px',
              borderRadius: '5px',
            }}
            cols="35"
            rows="15"
            name="comm"
            id="comm"
            onChange={(e) => setComm(e.target.value)}
          ></textarea>
          {/* <button type="submit" style={{ background: '#d9d9d9', height: '40px' }}>
            Enviar
          </button> */}

          {/* <button type="text" disabled={true} style={{ background: '#d9d9d9' }}>
            Enviar
          </button> */}
        </form>
      </div>
      <br />
      <br />
      <br />
    </div>
  )
}

export default App
