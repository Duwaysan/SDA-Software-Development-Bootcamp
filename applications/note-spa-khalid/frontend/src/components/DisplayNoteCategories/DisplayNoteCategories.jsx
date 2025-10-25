import { Link } from "react-router"

export default function DisplayNoteCategories({ category, submitFunction, formAction }) {
    return (
        <div className="toy-container">
          <div className="toy-info">
            <Link to={`/categories/${category.id}`}>
                <p> { category.name }</p>
            </Link>
            <div className="color-block"></div>
          </div>
          <form onSubmit={(evt) => submitFunction(evt, category.id)}>
            <button type="submit" className="btn submit">{formAction}</button>
          </form>
        </div>
    )
}