import "./styles.css";
import { useState, useEffect } from "react";
import { useParams } from "react-router";
import { Link } from "react-router";

// Forms
import AddPhotoForm from "../AddPhotoForm/AddPhotoForm.jsx";
import CommentForm from "../CommentForm/CommentForm.jsx";
import DisplayNoteCategories from "../../components/DisplayNoteCategories/DisplayNoteCategories.jsx";

// Assets
import bookImg from "../../assets/images/book.png";

// APIs
import * as noteAPI from "../../utilities/note-api"
import * as commentsAPI from "../../utilities/comment-api";
import * as categoriesAPI from "../../utilities/category-api";





export default function NoteDetailPage() {
	const [noteComments, setNoteComments] = useState([]);
	const [noteDetail, setNoteDetail] = useState(null);
	const [categoriesNoteHas, setCategoriesNoteHas] = useState([]);
	const [categoriesNoteDoesntHave, setCategoriesNoteDoesntHave] = useState([]);
	const { id } = useParams();

	useEffect(() => {
		async function getAndSetDetail() {
			const noteDetailData = await noteAPI.show(id);
			setNoteDetail(noteDetailData.note);
			setNoteComments(noteDetailData.comments);
			setCategoriesNoteHas(noteDetailData.noteCategoriesiesNoteHas);
			setCategoriesNoteDoesntHave(noteDetailData.categoriesNoteDoesntHave);
		}
		if (id) getAndSetDetail()
	}, [id])


	async function handleAddCategory(evt, categoryId) {
		try {
			evt.preventDefault()
			const categoryData = await noteAPI.addCategoryToNote(noteDetail.id, categoryId);
			setCategoriesNoteHas(categoryData.categoriesNoteHas);
			setCategoriesNoteDoesNotHave(categoryData.categoriesNoteDoesntHave);
		} catch (err) {
			console.log(err);
			setCategoriesNoteHas([...categoriesNoteHas]);
			setCategoriesNoteDoesNotHave([...categoriesNoteDoesntHave]);
		}
	}

	const noteCategories = categoriesNoteHas.map(category => (
		console.log("Category in noteCategories:", category),
		<DisplayNoteCategories key={category.id} category={category} submitFunction={handleAddCategory} formAction="Give Category" />
	))


	{
		categoriesNoteHas.map(category => (
			<div key={category.id} className="toy-container">
				<div className="toy-info">
					<div className="color-block" ></div>
					<Link to={`/categories/${category.id}`}>
						<p>A  {category.name}</p>
					</Link>
				</div>

				<form onSubmit={handleAddCategory}>
					<button type="submit" className="btn submit">Give Category</button>
				</form>

			</div>
		))
	}
	async function handleRemoveCategory(evt, categoryId) {
		try {
			evt.preventDefault()
			const categoryData = await noteAPI.removeCategoryFromNote(noteDetail.id, categoryId);
			setCategoriesNoteHas(categoryData.categoriesNoteHas);
			setCategoriesNoteDoesNotHave(categoryData.categoriesNoteDoesntHave);
		} catch (err) {
			console.log(err);
			setCategoriesNoteHas([...categoriesNoteHas]);
			setCategoriesNoteDoesNotHave([...categoriesNoteDoesntHave]);
		}
	}
	
const noNoteCategories = categoriesNoteHas.map(category => (
  <DisplayNoteCategories key={category.id} category={category} submitFunction={handleRemoveCategory} formAction="Take Category" />
))
  { noNoteCategories.length > 0 
    ? { noNoteCategories }
    : <p class="all-toys"> already has all the available categories 🥳</p>
  }
	async function addPhoto(noteId, formData) {
		try {
			const updatedNote = await noteAPI.addPhoto(noteId, formData);
			setNoteDetail(updatedNote);
		} catch (err) {
			console.log(err);
			setNoteDetail({ ...noteDetail })
		}
	}
	if (!noteDetail) return <h3>Your note details will display soon</h3>

	return (<>
		<section className="detail-cat-container">
			<div className="detail-cat-img">
				{noteDetail.photo?.url
					? <img src={noteDetail.photo.url} alt={`A photo of ${noteDetail.name}`} className="usr-img" />
					: <img src={bookImg} alt="A skater boy note" />
				}
			</div>
			<div className="cat-details">
				<h1>{`Title: ${noteDetail.title}`}</h1>
				<h2>{`Description: ${noteDetail.description} `}</h2>
				<p>{noteDetail.created_at.slice(0, 10)}</p>
			</div>
			<div className="cat-actions">
				<Link to={`/notes/edit/${noteDetail.id}`} className="btn warn">Edit</Link>
				<Link to={`/notes/confirm_delete/${noteDetail.id}`} className="btn danger">Delete</Link>
			</div>

		</section>
		<div className="feedings-toy-container">
			<section className="feedings">
				<div className="subsection-title">
					<h2>Comments</h2>
				</div>
				<h3>Add a Comment</h3>
				<CommentForm noteDetail={noteDetail} noteComments={noteComments} setNoteComments={setNoteComments} />
				{noteComments.length > 0
					?
					<table>
						<thead>
							<tr>
								<th>Title</th>
								<th>Comment</th>
								<th>Date</th>
							</tr>
						</thead>
						<tbody>
							{noteComments.map((cmnt, ind) => (
								<tr key={ind}>
									<td>{cmnt.title}</td>
									<td>{cmnt.comment}</td>
									<td>{cmnt.created_at.slice(0, 10)}</td>
									{/* <td>{meal.date}</td>
								<td>{MEALS[meal.meal]}</td> */}
								</tr>
							))}
						</tbody>
					</table>
					:
					<div className="subsection-content">
						<p>⚠️ {noteDetail.title} has no comments!</p>
					</div>
				}
			</section>
		</div>
		<section class="toys">
			<div class="subsection-title">
				<h2>Categories</h2>
			</div>
			<h3>Available Categories</h3>
			<div className="subsection-content">
				{allCategories.map(category => (
					<div key={category.id} className="toy-container">
						<div className="toy-info">
							<div className="color-block" ></div>
							<Link to={`/categorys/${category.id}`}>
								<p>A {category.name}</p>
							</Link>
						</div>
					</div>
				))}
			</div>
			{categoriesNoteHas.length > 0
				? catCategories
				: <p className="no-toys">{noteDetail.name} doesn't have any categories!</p>
			}
		</section>

		<section>
			<AddPhotoForm note={noteDetail} addPhoto={addPhoto} />

		</section>

	</>
	)
}
