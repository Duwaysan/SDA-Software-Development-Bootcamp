import "./styles.css"
import bookImg from "../../assets/images/book.png";
import { Link } from "react-router";
export default function NoteIndexCard({note}) {
  return (
        <div className="cat-index-card">
            <Link to={`/notes/${note.id}`}>
            <div className="cat-index-card-content">
                {note.photo?.url
                        ? <img src={note.photo.url} alt={`A photo of ${note.name}`} className="usr-img" />
                        : <img src={bookImg} alt="red book" />
                    }
                {/* <img id='card-img'src={bookImg} alt="red book" /> */}
                <h2>{note.title}</h2>
                <p>   {`${note.description}`}</p>
                <p><small>{note.created_at.slice(0,10)}</small></p>
            </div>
            </Link>
        </div>
    )
}
