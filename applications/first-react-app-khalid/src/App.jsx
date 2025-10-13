import "./App.css";
import { useState } from "react";

const App = () => {
    const [isDarkMode, setIsDarkMode] = useState("dark")
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [hasPets, setHasPets] = useState(false);
    const [age, setAge] = useState(0);
    return (
        <body>
            
        </body>
    )
}

export default App;