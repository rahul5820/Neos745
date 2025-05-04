import './Home.css';

const Home = () => {
    return (
        <div className="home-container">
            <header>
                <h1>Welcome to the Orrery</h1>
                <p>Your real-time view of near-Earth objects</p>
                <img src="src/Images/orerry.jpeg" alt="Orrery Illustration" className="header-image" />
            </header>

            <section className="intro">
                <h2>What is an Orrery?</h2>
                <p>
                    An Orrery is a mechanical model that illustrates the relative positions and motions of planets and moons in our solar system. Our digital Orrery brings that model to life, 
                    allowing you to track and visualize near-Earth objects (NEOs) in real-time.
                </p>
                <img src="src/Images/orerry1.jpeg" alt="Orrery Model" className="section-image" />
            </section>

            <section className="features">
                <h2>Explore Near-Earth Objects</h2>
                <p>
                    Using data from NASA's Near-Earth Object Program, we provide up-to-date information on the asteroids and comets that pass close to Earth. Track the trajectory of these objects, 
                    learn about their size, speed, and the date of their closest approach.
                </p>
                <img src="src/Images/neodata.jpg" alt="NEO Data" className="section-image" />
            </section>

            <section className="interactive">
                <h2>Interactive 3D Model</h2>
                <p>
                    Our interactive Orrery allows you to visualize the orbits of NEOs in 3D space. See the current position of each object relative to Earth and other planets, 
                    and explore their paths through the solar system.
                </p>
                <img src="src/Images/interactive.jpeg" alt="Interactive 3D Model" className="section-image" />
            </section>

            <footer>
                <p>Stay updated on the latest near-Earth objects and their potential impact on our planet.</p>
                {/* <img src="src/Images/space.jpeg" alt="Space" className="footer-image" /> */}
            </footer>
        </div>
    );
};

export default Home;
