import "./styles.css";
import bookImg from "../../assets/images/book.png";

export default function HomePage() {
  return (
    <section className="logo-container">
      <div className="home-cat-container">
        <img src={bookImg} alt="The Cat Collector Cat" />
      </div>
      <img src={bookImg} alt="Text reads: Cat Collector" />
    </section>
  )
}