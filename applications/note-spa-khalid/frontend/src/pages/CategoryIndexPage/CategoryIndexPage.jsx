// IMPORTS
import "./styles.css";
import { useState, useEffect } from "react"
import { Link } from "react-router";

// APIs
import * as categoryAPI from "../../utilities/category-api";

export default function CategoryIndexPage() {
    const [allCategories, setAllCategories] = useState([])

    useEffect(() => {
        async function getAllCategories() {
          try {
            const categories = await categoryAPI.index();
            setAllCategories(categories);
          } catch (err) {
            console.log(err);
            setAllCategories([]);
          }
        }
        getAllCategories();
    }, [])

    return (<>
        <section className="page-header">
            <h1>All Notes Categories</h1>
    
        </section>

        <section className="toy-index-card-container">
        {allCategories.map(category => (
          <div key={category.id} className="toy-index-card" >
            <div className="toy-index-card-bg" ></div>
            <Link to={`/categories/${category.id}`}>
              <div className="toy-index-card-content">
                <h2>{ category.name }</h2>
                <p> { category.description } </p>
              </div>
            </Link>
          </div>
        ))}
        </section>
    </>)
}