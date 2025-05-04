import { useEffect, useState } from 'react';
import axios from 'axios';
import PlotAsteroidOrbits from './PlotAsteroidOrbits'; // Import the orbit plotting component

export default function PHAVisualization() {
  const [hazardousAsteroids, setHazardousAsteroids] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Add loading state

  useEffect(() => {
    const fetchPHAData = async () => {
      try {
        // Fetch data from NASA API using axios
        const response = await axios.get(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-10-01&end_date=2024-10-07&api_key=MyNeos/src/Components/NeosTable.jsx`
        );
        
        const neoData = response.data.near_earth_objects;
        let phaList = [];

        // Loop through dates and gather hazardous asteroids
        Object.keys(neoData).forEach((date) => {
          neoData[date].forEach((asteroid) => {
            if (asteroid.is_potentially_hazardous_asteroid) {
              phaList.push({
                name: asteroid.name,
                orbit: asteroid.orbital_data, // Collect orbital data
                diameter: asteroid.estimated_diameter.kilometers.estimated_diameter_max, // Max diameter
                missDistance: asteroid.close_approach_data[0].miss_distance.kilometers, // Miss distance in km
                velocity: asteroid.close_approach_data[0].relative_velocity.kilometers_per_hour // Velocity in km/h
              });
            }
          });
        });

        setHazardousAsteroids(phaList);
        setIsLoading(false); // Set loading to false after data is fetched
      } catch (error) {
        console.error('Error fetching PHA data:', error);
        setIsLoading(false);
      }
    };

    fetchPHAData();
  }, []);

  return (
    <div>
      <h1>Potentially Hazardous Asteroids (PHAs)</h1>
      {isLoading ? (
        <p>Loading data...</p>
      ) : hazardousAsteroids.length > 0 ? (
        <>
          <PlotAsteroidOrbits asteroidData={hazardousAsteroids} />

          {/* Render the table with data */}
          <table border="1" style={{ marginTop: '20px', width: '100%' }}>
            <thead>
              <tr>
                <th>Asteroid Name</th>
                <th>Orbit Details</th>
                <th>Estimated Diameter (km)</th>
                <th>Miss Distance (km)</th>
                <th>Velocity (km/h)</th>
              </tr>
            </thead>
            <tbody>
              {hazardousAsteroids.map((asteroid, index) => (
                <tr key={index}>
                  <td>{asteroid.name}</td>
                  <td>{`Semi-Major Axis: ${asteroid.orbit.semi_major_axis} AU, Eccentricity: ${asteroid.orbit.eccentricity}`}</td>
                  <td>{asteroid.diameter}</td>
                  <td>{asteroid.missDistance}</td>
                  <td>{asteroid.velocity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </>
      ) : (
        <p>No potentially hazardous asteroids found during this time period.</p>
      )}
    </div>
  );
}
