import "./styles.css"
import bookImg from "../../assets/images/book.png";
import diary from "../../assets/images/diary.png";
import { useState } from "react";
import NoteIndexCard from "../NoteIndexCard/NoteIndexCard";
import { useEffect } from "react";
import * as noteAPI from "../../utilities/note-api"

export default function NoteIndexPage() {
  const [allNotes, setAllNotes] = useState([])
  const displayAllNotes = allNotes.map((n,idx)=>(
    <NoteIndexCard key={idx} note={n}/>
  ))

  useEffect(function() {
    async function getAllNotes() {
        const allNoteData = await noteAPI.index()
        console.log(allNoteData,"line 25 - noteIndexPage")
        setAllNotes(allNoteData)
    }
    if (allNotes.length === 0) getAllNotes()
  },[])
  return (<>

      <section className="page-header">
            <h1>Cat List</h1>
            <img src={bookImg} alt="Book" />
            <img src={diary} alt="Diary" />
        </section>
        <section className="card-container">
            {displayAllNotes}
        </section>
    </>)
}
