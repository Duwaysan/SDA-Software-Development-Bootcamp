// imports
import './styles.css';
import { useState } from "react";
import { useNavigate, Link } from "react-router";

// APIs
import * as usersAPI from "../../utilities/users-api";

export default function Navbar({ user, setUser }) {
    const navigate = useNavigate();

    // will refresh state and set us back to home without a user
    function handleLogout() {
        usersAPI.logout()
        setUser(null);
        navigate("/")
    }

    if (user) {
        return (
            <>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/notes">All Notes</Link></li>
                <li><Link to="/notes/new">New Note</Link></li>
                <li><Link to="/categories/new">Add a Category</Link></li>
                <li><Link to="/categories">All Categories</Link></li>
                <form id="logout-form" onSubmit={handleLogout}>
                    <button type="submit">Log out</button>
                </form>
            </>
        )
    }

    if (!user)
        return (
            <>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/home">Home</Link></li>
                <li><Link to="/signup">SignUp</Link></li>
            </>
        )

}