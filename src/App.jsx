import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';  // Assuming you have SearchBar component
import Gallery from './components/Gallery';      // Assuming you have Gallery component

function App() {
  const [searchQuery, setSearchQuery] = useState('');  // State for the search query
  const [photos, setPhotos] = useState([]);            // State to store fetched photos

  // Fetch photos from Unsplash API whenever searchQuery changes
  useEffect(() => {
    if (searchQuery) {
      const fetchPhotos = async () => {
        try {
          const response = await axios.get(`https://api.unsplash.com/search/photos`, {
            params: { query: searchQuery, client_id: 'YOUR_ACCESS_KEY' } // Unsplash API key needed
          });
          setPhotos(response.data.results);
        } catch (error) {
          console.error("Error fetching photos:", error);
        }
      };
      fetchPhotos();
    } else {
      setPhotos([]); // Clear photos when searchQuery is empty
    }
  }, [searchQuery]);  // Dependency array ensures the effect runs when searchQuery changes

  // Function to handle search input from the SearchBar component
  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  return (
    <div className="App">
      <h1>Photo Gallery</h1>
      <SearchBar onSearch={handleSearch} />  {/* Pass the handleSearch function to SearchBar */}
      <Gallery photos={photos} />            {/* Pass the fetched photos to Gallery component */}
    </div>
  );
}

export default App;
