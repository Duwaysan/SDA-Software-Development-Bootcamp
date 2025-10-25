import "./styles.css"
import { useState } from "react";
import * as commentAPI from "../../utilities/comment-api"

export default function CommentForm({ noteDetail, noteComments, setNoteComments }) {
    // const today = new Date().toISOString().slice(0, 10);
    const initialState = { title: "", comment: "", note: noteDetail.id}
    const [formData, setFormData] = useState(initialState)

    function handleChange(evt) {
        const updatedData = { ...formData, [evt.target.name]: evt.target.value }
        setFormData(updatedData)
    }

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            const updatedComments = await commentAPI.create(formData, noteDetail.id);
            setNoteComments(updatedComments)
            setFormData(initialState);
        } catch (err) {
            console.log(err);
            setNoteComments([...noteComments])
        }
    }

    return (
        <form className="form-container" onSubmit={handleSubmit}>
            <p>
                <label htmlFor="id_title">Title:</label>
                <input value={formData.title} type="title" name="title" id='id_title' placeholder="Give it a Title" onChange={handleChange} />
            </p>
            <p>
                <label htmlFor="id_comment">Content:</label>
                <input value={formData.comment} type="comment" name="comment" id='id_comment' placeholder="" onChange={handleChange} />
            </p>
            <button type="submit" className="btn submit">Add Comment</button>
        </form>
    )
}