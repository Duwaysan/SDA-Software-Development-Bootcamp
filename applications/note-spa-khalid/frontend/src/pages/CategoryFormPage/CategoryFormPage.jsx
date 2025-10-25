// IMPORTS
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useParams, Link } from "react-router";
import nerdCat from "../../assets/images/book.png";

// APIs
import * as categoryAPI from "../../utilities/category-api";

export default function CategoryFormPage({ createCategory, editCategory, deleteCategory }) {
    const initialState = { name: "", description: "" }
    const [currCategory, setCurrCategory] = useState(null);
    const [formData, setFormData] = useState(initialState);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        if (editCategory && id || deleteCategory && id) getAndSetDetail()
        async function getAndSetDetail() {
          try {
              const categoryDetail = await categoryAPI.show(id);
              setFormData({ name: category.name, description: category.description })
              setCurrCategory(categoryDetail);
          } catch (err) {
              console.log(err);
              setFormData(initialState);
              setCurrCategory(null);
          }
        }
    }, [id])

    function handleChange(evt) {
        const updatedData = { ...formData };
        setFormData({ ...updatedData, [evt.target.name]: evt.target.value })
    }

    async function handleSubmit(evt) {
        try {
            evt.preventDefault();
            const newCategory = editCategory ? await categoryAPI.update(currCategory.id, formData) : await categoryAPI.create(formData);
            setFormData(initialState)
            navigate(`/categories/${newCategory.id}`)
        } catch (err) {
            console.log(err);
        }
    }

    async function handleDelete(evt) {
        try {
          evt.preventDefault();
          const response = await categoryAPI.deleteCategory(currCategory.id)
          if (response.success) {
            setFormData(initialState)
            navigate("/categories");
          }
        } catch (err) {
            console.log(err);
        }
    }

    
    if (deleteCategory && !currCategory) return <h1>Loading</h1>    
    if (deleteCategory && currCategory)  return (<>
        <div className="page-header">
            <h1>Delete Category?</h1>
            <img src={nerdCat} alt="A cat using a computer" />
        </div>
        <h2>Are you sure you want to delete { currCategory.name }?</h2>
        <form onSubmit={handleDelete}>
            <Link to={`/categories/${currCategory.id}`} className="btn secondary">Cancel</Link>
            <button type="submit" className="btn danger">Yes - Delete!</button>
        </form>
    </>)

    if (editCategory && !currCategory)  return <h1>Loading</h1>
    if (createCategory || editCategory) return (<>
        <div className="page-header">
            {editCategory ? <h1>Edit {currCategory.name}'s Info</h1> : <h1>Add a Category</h1>}
            <img src={nerdCat} alt="A cat using a computer" />
        </div>
        <form className="form-container" onSubmit={handleSubmit}>
            <table>
                <tbody>
                  <tr>
                    <th><label htmlFor="id_name">Name:</label></th>
                    <td><input value={formData.name} type="text" name="name" minLength="3" maxLength="50" required id="id_name" onChange={handleChange}/></td>
                  </tr>
                  <tr>
                    <th><label htmlFor="id_color">Description:</label></th>
                    <td><input value={formData.description} type="text" name="description" maxLength="20" required id="id_color" onChange={handleChange}/></td>
                  </tr>
                </tbody>
            </table>
            <button type="submit" className="btn end submit">Submit!</button>
        </form>
    </>)
}