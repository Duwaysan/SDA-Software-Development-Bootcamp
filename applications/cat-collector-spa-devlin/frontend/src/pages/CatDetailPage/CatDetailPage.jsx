import "./styles.css"
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router";
import skaterCat from "../../assets/images/sk8r-boi-cat.svg";
import catCone from "../../assets/images/cat-cone.svg";
import catOniGirl from "../../assets/images/cat-onigiri.svg";
import kittyKabob from "../../assets/images/kitty-kabob.svg";
import FeedingForm from "../../components/Forms/FeedingForm";
import PhotoForm from "../../components/Forms/PhotoForm";

// APIs
import * as catAPI from "../../utilities/cat-api";
import * as feedingsAPI from "../../utilities/feeding-api";

// CONSTANTS
const MEALS = {
  'B': 'Breakfast',
  'L': 'Lunch',
  'D': 'Dinner',
}

export default function CatDetailPage() {
  const [catDetail, setCatDetail] = useState(null);
  const [catFeedings, setCatFeedings] = useState([])

  const { catId } = useParams();

  useEffect(() => {
    async function getCatDetail() {
      const catDetailData = await catAPI.detail(catId);
      setCatDetail(catDetailData);
      const catFeedData = await feedingsAPI.index(catId)
      console.log(catFeedData)
      setCatFeedings(catFeedData);
    }
    if (catId) getCatDetail()
  }, [catId])

  async function addPhoto(formData) {
    try {
      const updatedCat = await catAPI.createPhoto(catId, formData);
      console.log(updatedCat)
      setCatDetail(updatedCat);
    } catch (err) {
      console.log(err);
      setCatDetail({ ...catDetail })
    }
  }


  if (!catDetail) return <h3>Your cat details will display soon</h3>

  return (
    <section className="detail-cat-container">
      <div className="detail-cat-img">
        {catDetail.photo.url
          ? <img src={catDetail.photo.url} alt={`A photo of ${catDetail.name}`} className="usr-img" />
          : <img src={skaterCat} alt="A skater boy cat" />
        }
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
        <Link to={`/cats/edit/${catDetail.id}`} className="btn warn">Edit</Link>
        <Link to={`/cats/confirm_delete/${catDetail.id}`} className="btn danger">Delete</Link>
      </div>
      <section>
        <PhotoForm cat={catDetail} addPhoto={addPhoto} />
      </section>

      <div className="feedings-toy-container">
        <section className="feedings">
          <div className="subsection-title">
            <h2>Feedings</h2>
            <img src={catCone} alt="An ice cream cone cat" />
            <img src={catOniGirl} alt="A cat as onigiri" />
            <img src={kittyKabob} alt="A kabob of kittens" />
          </div>
          <h3>Add a Feeding</h3>
          <FeedingForm catDetail={catDetail} catFeedings={catFeedings} setCatFeedings={setCatFeedings} />
          {catFeedings.length > 0 ?
            <>
              <h3>Past Feedings</h3>
              <table>
                <thead>
                  <tr>
                    <th>Date</th>
                    <th>Meal</th>
                  </tr>
                </thead>
                <tbody>
                  {catFeedings.map((meal, ind) => (
                    <tr key={ind}>
                      <td>{meal.date}</td>
                      <td>{MEALS[meal.meal]}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </>
            :
            <div className="subsection-content">
              <p>⚠️ {catDetail.name} has not been fed!</p>
            </div>
          }
        </section>
      </div>
    </section>
  )
}
