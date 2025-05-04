import { useEffect, useState } from 'react';
import axios from 'axios';
import './NeosTable.css';

export default function NeosTable() {
  const [neoData, setNeoData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNEOData = async () => {
      try {
        setLoading(true);
        
        const response = await axios.get(
          `https://api.nasa.gov/neo/rest/v1/feed?start_date=2024-10-01&end_date=2024-10-07&api_key=coATMPEBhcmwlhG7aTxDWCKwKtRj9CvlHcL4Dc0F`
        );
        setNeoData(response.data.near_earth_objects);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching the NEO data:', error);
        setError('Failed to fetch NEO data.');
        setLoading(false);
      }
    };

    fetchNEOData();
  }, []);

  return (
    <div className='title'>
      <h1>Near-Earth Objects (NEOs)</h1>
      {loading && <p>Loading NEO data...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}

      {!loading && !error && (
        <table border="1" style={{ width: '100%', textAlign: 'center' }}>
          <thead>
            <tr>
              <th>Date</th>
              <th>Asteroid Name</th>
              <th>Close Approach Date</th>
              <th>Estimated Diameter (km)</th>
              <th>Velocity (km/h)</th>
              <th>Miss Distance (km)</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(neoData).map((date) => (
              neoData[date].map((asteroid) => (
                <tr key={asteroid.id}>
                  <td>{date}</td>
                  
                  {/* Highlight hazardous asteroids */}
                  <td style={{
                    fontWeight: asteroid.is_potentially_hazardous_asteroid ? 'bold' : 'normal',
                    color: asteroid.is_potentially_hazardous_asteroid ? 'red' : 'black'
                  }}>
                    {asteroid.name}
                  </td>

                  <td>{asteroid.close_approach_data[0]?.close_approach_date_full}</td>
                  <td>{asteroid.estimated_diameter.kilometers.estimated_diameter_max.toFixed(2)}</td>
                  <td>{parseFloat(asteroid.close_approach_data[0]?.relative_velocity.kilometers_per_hour).toFixed(2)}</td>
                  <td>{parseFloat(asteroid.close_approach_data[0]?.miss_distance.kilometers).toFixed(2)}</td>
                </tr>
              ))
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
