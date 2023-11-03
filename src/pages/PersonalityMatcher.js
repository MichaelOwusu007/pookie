import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PersonalityMatcher = () => {
  const [keywords, setKeywords] = useState('');
  const [matchedDogs, setMatchedDogs] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!keywords) {
      // Do not fetch if no keywords are provided
      return;
    }

    try {
      // Fetch all dog breeds from the API
      const res = await fetch(`https://api.thedogapi.com/v1/breeds`);
      const allDogs = await res.json();

       console.log('User Input:', keywords);
    console.log('API Response:', allDogs);

      // Split user input into individual keywords
      const userKeywords = keywords
        .toLowerCase()
        .split(/[\s,]+/)
        .filter(keyword => keyword !== 'and');

      // Filter dog breeds based on temperament keywords provided by the user
      const filteredDogs = allDogs.filter((dog) => {
        const dogTemperament = dog.temperament.toLowerCase();

        // Check if all user keywords are present in dog's temperament
        return userKeywords.every(keyword => dogTemperament.includes(keyword));
      });

      // Sort filteredDogs based on number of matches in descending order
      filteredDogs.sort((a, b) => {
        const aMatches = userKeywords.filter(keyword => a.temperament.toLowerCase().includes(keyword)).length;
        const bMatches = userKeywords.filter(keyword => b.temperament.toLowerCase().includes(keyword)).length;
        return bMatches - aMatches;
      });

      // Set the top 3 matched dogs as the result
      setMatchedDogs(filteredDogs.slice(0, 3));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit} className="mb-8">
        <input
          type="text"
          value={keywords}
          onChange={(e) => setKeywords(e.target.value)}
          placeholder="Describe yourself with keywords (e.g., friendly, caring)"
          className="py-2 px-4 rounded shadow mr-2"
        />
        <button type="submit" className="bg-slate-700 py-2 px-6 rounded text-white hover:bg-slate-600 transition-all duration-200">
          Find Matching Dogs
        </button>
      </form>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
        {matchedDogs.map((dog) => (
          <div key={dog.id} className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200">
            <Link to={`/${dog.name}`} className="block">
              <article>
                <img
                  src={`https://cdn2.thedogapi.com/images/${dog.reference_image_id}.jpg`}
                  alt={dog.name}
                  className="rounded md:h-72 w-full object-cover"
                />
                <h3 className="text-white text-lg font-bold mt-4">{dog.name}</h3>
                <p className="text-slate-400">Bred For: {dog.bred_for}</p>
              </article>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PersonalityMatcher;


