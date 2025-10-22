import "./styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import bookImg from "../../assets/images/book.png";
import { Link } from "react-router";

// APIs
import * as noteAPI from "../../utilities/note-api"


export default function NoteDetailPage() {
	const [noteDetail, setNoteDetail] = useState(null);
	const { id } = useParams();

	useEffect(() => {
		async function getAndSetDetail() {
			try {
				console.log('Line 18: ', id)
				const note = await noteAPI.show(id);
				setNoteDetail(note);
			} catch (err) {
				console.log(err);
				setNoteDetail(null);
			}
		}
		if (id) getAndSetDetail()
	}, [id])

	if (!noteDetail) return <h3>Your note details will display soon</h3>

	return (
		<section className="detail-cat-container">
			<div className="detail-cat-img">
				<img src={bookImg} alt="book" />
			</div>
			<div className="cat-details">
				<h1>{`Title: ${noteDetail.title}`}</h1>
				<h2>{`Description: ${noteDetail.description} `}</h2>
				<p>{noteDetail.created_at.slice(0,10)}</p>
			</div>
			<div className="cat-actions">
				<Link to={`/notes/edit/${noteDetail.id}`} className="btn warn">Edit</Link>
				<Link to={`/notes/confirm_delete/${noteDetail.id}`} className="btn danger">Delete</Link>
			</div>
		</section>
	)
}
