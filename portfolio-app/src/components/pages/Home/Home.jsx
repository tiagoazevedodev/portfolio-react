import "../../../global.css";
import "./Home.css";
import myAvatar from "../../../assets/foto-portfolio.png"

export const Home = () => {
  return (
    <main className="home-page">
      <section className="about-section">
        <div className="about-div">  
          <h1 id="name-title">Hi, I'm Tiago </h1>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias modi iste, obcaecati possimus ipsum inventore placeat. Provident aut facilis nobis harum optio iste architecto. Dolorum nemo et reprehenderit dolore quia!</span>
        </div>
        <img src={myAvatar} />
      </section>
    </main>
  )
}
