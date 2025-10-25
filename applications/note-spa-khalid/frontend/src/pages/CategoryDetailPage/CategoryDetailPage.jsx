// IMPORTS
import "./styles.css";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router";

// APIs
import * as categoryAPI from "../../utilities/category-api";

export default function CategoryDetailPage() {
    const [categoryDetail, setCategoryDetail] = useState(null);
    const { id } = useParams();

    useEffect(() => { 
        async function getAndSetDetail() {
          try {
            const category = await categoryAPI.show(id);
            setCategoryDetail(category);
          } catch (err) {
            console.log(err);
            setCategoryDetail(null);
          }
        }
        getAndSetDetail()
    }, [id])

    if (!categoryDetail) return <h3>Your category details will display soon</h3>

  return (<>
    <div className="toy-detail-card" >
      <div className="toy-detail-card-content">
        <h2>{ categoryDetail.name }</h2>
        <p>Description: { categoryDetail.description } </p>
      </div>
    </div>
    <div className="toy-actions">
      <Link to={`/categories/edit/${categoryDetail.id}`} className="btn warn">Edit</Link>
      <Link to={`/categories/confirm_delete/${categoryDetail.id}`} className="btn danger">Delete</Link>
    </div>
  </>)
}