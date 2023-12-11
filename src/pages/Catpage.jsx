// Import necessary dependencies
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

// Define the Catpage functional component
const Catpage = () => {
  // State variables for storing cat data, search input, and search status
  const [cats, setCats] = useState([]);
  const [text, setText] = useState('');
  const [searched, setSearched] = useState(false);

  // Fetch cat data from the API on component mount
  useEffect(() => {
    const fetchCatData = async () => {
      try {
        const res = await fetch(`https://api.thecatapi.com/v1/breeds?api_key=live_XuuAARbK4pXsO9ZDTgNl4or0gXoEClDtAu70TYlegAGbgFjuLVgE56h3gRDpF3ku`);
        const data = await res.json();
        setCats(data);
      } catch (error) {
        console.error(error);
      }
    };

    // Set search status to false and fetch cat data
    setSearched(false);
    fetchCatData();
  }, []);

  // Function to search for cats based on user input
  const searchForCat = async () => {
    try {
      const res = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${text}&api_key=live_XuuAARbK4pXsO9ZDTgNl4or0gXoEClDtAu70TYlegAGbgFjuLVgE56h3gRDpF3ku`);
      const data = await res.json();
      setCats(data);
    } catch (error) {
      console.error(error);
    }
  };

  // Function to render cat images with conditional check for existence
  const renderImage = (cat) => {
    if (cat.image && cat.image.url) {
      return (
        <img
          src={cat.image.url}
          alt={cat.name}
          loading="lazy"
          className="rounded md:h-72 w-full object-cover"
        />
      );
    } else {
      // If there's no image, return null
      return null;
    }
  };

  // JSX structure for the Catpage component
  return (
    <>
      {/* Header section with a link to the home page */}
      <section className="p-8 max-w-7xl mx-auto">
        <Link to='/' className='' >
          <button className='font-bold cursor-pointer text-[18px] lg:text-xl text-pink-500  -left-4 lg:top-10 lg:left-14 -top-4 relative'>
            POOKIE
            <div className='absolute left-5 top-4 py-1 px-2 bg-black rounded text-base text-white'>Home</div>
          </button>
        </Link>
        {/* Search form and title */}
        <div className="text-center">
          <h1 className="flex items-center justify-center text-center px-5 mb-8 text-3xl font-bold lg:text-5xl text-white righteous">
            <p>Pookie: The Right Cat Is Here</p>
          </h1>
          <form onSubmit={(e) => {
            e.preventDefault();
            searchForCat();
            setSearched(true);
          }} className="max-w-xl mx-auto" autoComplete="off">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a cat / breed" 
              className="py-2 px-4 rounded shadow w-full bg-slate-400 text-white placeholder-white"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </div>
        {/* Display cat cards based on search results */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
          {!searched ? (
            // Map over cats, filter out those without images, and display cat cards
            cats
              .filter((cat) => cat.image && cat.image.url)
              .map((cat) => (
                <div to={`/${cat.name}`} key={cat.id} className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200">
                  <article>
                    {renderImage(cat)}
                    <h3 className="text-white text-lg font-bold mt-4">{cat.name}</h3>
                    <p className="text-slate-400">Temperament: {cat.temperament}</p>
                    <p className="text-slate-400">Description: {cat.description.slice(0, 100)}{ cat.description.length > 100 ? '...' : '' }</p>
                    <p className="text-slate-400">Origin: {cat.origin}</p>
                  </article>
                </div>
              ))
          ) : (
            // Map over cats, filter out those without images, and display cat cards
            cats
              .filter((cat) => cat.image && cat.image.url)
              .map((cat) => (
                <div to={`/${cat.name}`} key={cat.id} className="bg-slate-700 p-4 rounded hover-bg-slate-600 transition-all duration-200">
                  <article>
                    {renderImage(cat)}
                    <h3 className="text-white text-lg font-bold mt-4">{cat.name}</h3>
                    <p className="text-slate-400">Temperament: {cat.temperament}</p>
                    <p className="text-slate-400">Description: {cat.description}</p>
                    <p className="text-slate-400">Origin: {cat.origin}</p>
                  </article>
                </div>
              ))
          )}
        </div>
      </section>
    </>
  );
};

// Export the Catpage component as the default export
export default Catpage;

