import  {  useState } from 'react';
import './PlanetSlab.css';

// Import images
import mercury from './mmercury.jpg'; // Adjust paths based on your structure
import venus from './venus.jpg';
import earth from './eearth.jpg';
import mars from './mrs.jpg';
import jupiter from './jjupiter.jpg';
import saturn from './ssaturn.jpg'; 
import uranus from './uuaranus.jpg';





const PlanetSlab = () => {

//   let API= "https://api.api-ninjas.com/v1/planets?name=Neptune";
//   const FetchAPIData =async(url)=>{

//     try {
//       const  res= await fetch(url)
//       const data= await res.json()
//       console.log(data)

      
//     } catch (error) {
//       console.log(error)
      
//     }
//   }

// useEffect(()=>{
//   FetchAPIData(API);
// },[API]);


  const [currentIndex, setCurrentIndex] = useState(0);


  const planets = [
    {
      name: 'Mercury',
      img: mercury,
      description: 'Distance: 211,780,087 Kilometers from Earth. The smallest planet and closest to the Sun.',
      closeApproach: 'N/A',
    },
    {
      name: 'Venus',
      img: venus,
      description: 'Distance: 200.05 million km from Earth. The hottest planet with a thick atmosphere.',
      closeApproach: 'August 12, 2023',
    },
    {
      name: 'Earth',
      img: earth,
      description: 'The only planet known to support life.',
      closeApproach: 'April 13, 2029',
    },
    {
      name: 'Mars',
      img: mars,
      description:
        'The red planet with the tallest volcano. Distance: about 140 million miles. Atmosphere: CO2, Nitrogen, Argon, Oxygen, CO.',
      closeApproach: 'May 31',
    },
    {
      name: 'Jupiter',
      img: jupiter,
      description:
        'The largest planet with a massive storm. Atmosphere: Hydrogen, Helium, Water, Methane.',
      closeApproach: 'December 6, 2024',
    },
    {
      name: 'Saturn',
      img: saturn,
      description:
        'Known for its stunning ring system. Atmosphere: Hydrogen, Helium, Methane, Ammonia.',
      closeApproach: 'September 7-8, 2024',
    },
    {
      name: 'Uranus',
      img: uranus,
      description: 'An ice giant with a tilted axis. Distance: 1.6 billion miles (2.6 billion km) from Earth.',
      closeApproach: 'N/A',
    },
  ];

  const totalCards = planets.length;

  const nextSlide = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="slider">
      <div className="cards" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {planets.map((planet, index) => (
          <div className="card" key={index}>
            <img src={planet.img} alt={planet.name} />
            <div className="card-content">
              <h2 className="card-title">{planet.name}</h2>
              <p className="card-description">{planet.description}</p>
              <p>Close Approach Dates: {planet.closeApproach}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="slider-buttons">
        <button className="slider-button" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="slider-button" onClick={nextSlide}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default PlanetSlab;
