import "./styles.css"
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import * as catAPI from "../../utilities/cat-api";
import skaterCat from "../../assets/images/sk8r-boi-cat.svg";

export default function CatDetailPage() {
  const [catDetail, setCatDetail] = useState(null);
  const { catId } = useParams();

  useEffect(() => {
    async function getCatDetail() {
      const catDetailData = await catAPI.detail(catId);
      setCatDetail(catDetailData);
    }
    if (catId) getCatDetail()
  }, [catId])


  if (!catDetail) return <h3>Your cat details will display soon</h3>

  return (
    <section className="detail-cat-container">
      <div className="detail-cat-img">
        <img src={skaterCat} alt="A skater boy cat" />
      </div>
      <div className="cat-details">
        <h1>{catDetail.name}</h1>
        <h2>{catDetail.age > 0
          ? `A ${catDetail.age} year old ${catDetail.breed}`
          : `A ${catDetail.breed} kitten.`}
        </h2>
        <p>{catDetail.description}</p>
      </div>
      <div className="cat-actions">
        <Link to={`/cats/edit/${catDetail.id}`} class="btn warn">Edit</Link>
        <Link to={`/cats/confirm_delete/${catDetail.id}`} class="btn danger">Delete</Link>
      </div>
    </section>
  )
}
