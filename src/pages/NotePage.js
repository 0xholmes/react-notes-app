import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import { ReactComponent as ArrowLeft } from "../assets/arrow-left.svg"

const NotePage = ({ match }) => {
  const noteId = match.params.id

  const [note, setNote] = useState(null)

  useEffect(() => {
    getNote()
  }, [noteId])

  const getNote = async () => {
    const res = await fetch(`http://localhost:5000/notes/${noteId}`)
    const data = await res.json()
    setNote(data)
  }

  return (
    <div className="note">
      <div className="note-header">
        <h3>
          <Link to="/">
            <ArrowLeft />
          </Link>
        </h3>
      </div>

      <textarea value={note?.body}></textarea>
    </div>
  )
}

export default NotePage
