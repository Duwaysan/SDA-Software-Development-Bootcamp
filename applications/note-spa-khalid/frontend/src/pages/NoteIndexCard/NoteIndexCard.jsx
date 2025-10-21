import "./styles.css"
import bookImg from "../../assets/images/book.png";
import { Link } from "react-router";
export default function NoteIndexCard({note}) {
  return (
        <div className="cat-index-card">
            <Link to={`/notes/${note.id}`}>
            <div className="cat-index-card-content">
                <img id='card-img'src={bookImg} alt="red book" />
                <h2>{note.title}</h2>
                <p>   {`${note.description}`}</p>
                <p><small>{note.created_at.slice(0,10)}</small></p>
            </div>
            </Link>
        </div>
    )
}
