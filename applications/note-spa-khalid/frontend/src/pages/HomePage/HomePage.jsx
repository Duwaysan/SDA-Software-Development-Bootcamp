import "./styles.css";
import logo_books from "../../assets/images/notelogo.png";

export default function HomePage() {
  return (
    <section className="logo-container">
      <div className="home-note-container">
        <img src={logo_books} alt="The note app logo" />
      </div>
      {/* <img src={bookImg} alt="Text reads: Cat Collector" /> */}
    </section>
  )
}