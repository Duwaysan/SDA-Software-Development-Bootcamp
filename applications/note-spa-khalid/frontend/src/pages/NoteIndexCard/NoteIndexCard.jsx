import "./styles.css"
import bookImg from "../../assets/images/book.png";
export default function NoteIndexCard({note}) {
  return (
        <div className="cat-index-card">
            <div className="cat-index-card-content">
                <img id='card-img'src={bookImg} alt="red book" />
                <h2>{note.name}</h2>
                <p>A {note.age > 0 ? `${note.age} year old ${note.breed}` : `A ${note.breed} kitten.`}</p>
                <p><small>{note.description}</small></p>
            </div>
        </div>
    )
}
