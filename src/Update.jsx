import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import api from './api'
import Header from './components/header/Header'

import './video.css'

function Update() {
  const [title, setTitle] = useState('')
  const [text, setText] = useState('')
  const [autor, setAutor] = useState('')
  const [image, setImage] = useState([])

  const navigate = useNavigate()

  const idItem = localStorage.getItem('ID')

  async function registerVideo(e) {
    e.preventDefault()
    try {
      const data = new FormData()

      data.append('title', title)
      data.append('text', text)
      data.append('autor', autor)
      data.append('image', image)

      await api.put(`/update/${idItem}`, data)

      navigate('/')

      return alert('Cadastro Editado com sucesso!')
    } catch (error) {
      console.log(error)
      return alert(`Deu erro no front ${error}`)
    }
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100vw',
      }}
    >
      <Header />
      <br />
      <br />
      <br />

      <h2>UPDATE DE POST</h2>
      <br />
      {/* {`ID: ${idItem}`} */}
      <div style={{ width: '38%' }}>
        <form onSubmit={registerVideo} style={{ display: 'flex', flexDirection: 'column' }}>
          Video:
          <input
            type="file"
            style={{
              marginBottom: '20px',
              borderRadius: '5px',
              height: '24px',
            }}
            name="image"
            id="image"
            onChange={(e) => setImage(e.target.files[0])}
          />
          Autor:
          <input
            type="text"
            style={{
              marginBottom: '20px',
              borderRadius: '5px',
              height: '24px',
            }}
            name="autor"
            id="autor"
            value={autor}
            onChange={(e) => setAutor(e.target.value)}
          />
          Titulo:
          <input
            type="text"
            style={{
              marginBottom: '20px',
              borderRadius: '5px',
              height: '24px',
            }}
            name="title"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          Texto:
          <textarea
            style={{
              marginBottom: '20px',
              borderRadius: '5px',
            }}
            cols="35"
            rows="15"
            name="text"
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
          ></textarea>
          <button disabled={true} type="submit" style={{ background: '#d9d9d9', height: '40px' }}>
            Editar
          </button>
        </form>
      </div>
    </div>
  )
}

export default Update
