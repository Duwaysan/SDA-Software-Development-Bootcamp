// IMPORTS
import "./styles.css";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import { useParams, Link } from "react-router";


// Assets
import bookImg from "../../assets/images/book.png";

// APIs
import * as noteAPI from "../../utilities/note-api";

export default function NoteFormPage({ createNote, editNote, deleteNote }) {
    const initialState = { title: "", description: "", created_at: "" }
    const [currNote, setCurrNote ] = useState(null)
    const [formData, setFormData] = useState(initialState);
    const { id } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        async function getAndSetDetail() {
            try {
                const note = await noteAPI.show(id);
                setCurrNote(note);
                setFormData(note)
            } catch (err) {
                console.log(err)
                setCurrNote(null)
                setFormData(initialState)
            }
        }
        if (editNote || deleteNote && id) getAndSetDetail()
        }, [id])
   
        
    function handleChange(evt) {
    //   const updatedData = { ...formData };
      setFormData({ ...formData, [evt.target.name]: evt.target.value })
    }
    
    async function handleSubmit(evt) {
      try {
        evt.preventDefault();
        const dataToSend = {...formData, created_at: new Date().toLocaleString()};
        const newNote = editNote ? await noteAPI.update(dataToSend, currNote.id) : await noteAPI.create(dataToSend);
        setFormData(initialState)
        
//   console.log("Create/Edit response:", newNote.id);
//   return; // or show an error instead of navigating

        navigate(`/notes/${newNote.id}`)
      } catch (err) {
        console.log(err);
      }
    }

     async function handleDelete(evt) {
        evt.preventDefault();
        const response = await noteAPI.deleteNote(currNote.id)
        if (response.success) {
            setFormData(initialState)
            navigate("/notes");
        }
    }
    if (deleteNote && !currNote) return <h1>Loading</h1>  
    if (deleteNote && currNote)  return (<>
        <div className="page-header">
            <h1>Delete Note?</h1>
            <img src={bookImg} alt="A red book" />
        </div>
        <h2>Are you sure you want to delete { currNote.title }?</h2>
        <form onSubmit={handleDelete}>
            <Link to={`/notes/${currNote.id}`} className="btn secondary">Cancel</Link>
            <button type="submit" className="btn danger">Yes - Delete!</button>
        </form>
    </>)

    if (editNote && !currNote)  return <h1>Loading</h1>
    if (createNote || editNote) return (<>
        <div className="page-header">
            {editNote ? <h1>Edit {currNote.title}'s Info</h1> : <h1>Add a Note</h1>}
            <img src={bookImg} alt="A red book" />
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
            <table>
                <tbody>
                    {!editNote &&
                        <tr>
                            <th><label htmlFor="id_title">Ttiel:</label></th>
                            <td><input value={formData.title} type="text" name="title" maxLength="100" required="" id="id_title" onChange={handleChange} /></td>
                        </tr>
                    }
                    <tr>
                        <th><label htmlFor="id_description">Description:</label></th>
                        <td>
                            <textarea value={formData.description} name="description" maxLength="2500" required="" id="id_description" onChange={handleChange}></textarea>
                        </td>
                    </tr>
                </tbody>
            </table>
            <button type="submit" className="btn end submit">Submit!</button>
        </form>
    </>)
}
