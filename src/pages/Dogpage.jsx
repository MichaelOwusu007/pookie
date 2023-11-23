
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";



const Dogpage = () => {
  const [dogs, setDogs] = useState([]);
  const [text, setText] = useState('');
  const [searched, setSearched] = useState(false);

  useEffect(() => {
    const fetchDogData = async () => {
      try {
        const res = await fetch(`https://api.thedogapi.com/v1/breeds?api_key=live_o3tfoB3fKnu0680SVIn7XZWOF9sg6KejkUely8ppoGMf3MTQkRZP6ZAuXvuT21SL`);
        const data = await res.json();
        setDogs(data);
      } catch (error) {
        console.error(error);
      }
    };

    setSearched(false);
    fetchDogData();
  }, []);

  const searchForDog = async () => {
    try {
      const res = await fetch(`https://api.thedogapi.com/v1/breeds/search?q=${text}&api_key=live_o3tfoB3fKnu0680SVIn7XZWOF9sg6KejkUely8ppoGMf3MTQkRZP6ZAuXvuT21SL`);
      const data = await res.json();
      setDogs(data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    searchForDog();
    setSearched(true);
  };

  return (
    <>
      <section className="p-8 max-w-7xl mx-auto">
           <Link to='/' className='' >
       <button className='font-bold cursor-pointer text-[18px] lg:text-xl text-pink-500  -left-4 lg:top-10 lg:left-14 -top-4 relative'>
        POOKIE
       <div className='absolute left-5 top-4 py-1 px-2 bg-black rounded text-base text-white'>Home</div>
        </button>
       </Link>
        <div className="text-center">
       
          <h1 className="flex items-center justify-center text-center px-5 mb-8 text-3xl font-bold lg:text-5xl text-white righteous">
            Pookie: The Right Dog Is Here
          </h1>
          
          <form onSubmit={handleSubmit} className="max-w-xl mx-auto" autoComplete="off">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search for a dog / breed"
              className="py-2 px-4 rounded shadow w-full bg-slate-400 text-white placeholder-white"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </form>
        </div>
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
          {!searched ? (
            dogs.map((dog) => (
              <Link to={`/${dog.name}`} key={dog.id} className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200">
                  <article>
                    <img
                      src={dog.image.url}
                      alt={dog.name}
                      loading="lazy"
                      className="rounded md:h-72 w-full object-cover"
                    />
                    <h3 className="text-white text-lg font-bold mt-4">{dog.name}</h3>
                    <p className="text-slate-400">Bred For: {dog.bred_for}</p>
                  </article>
              </Link>
            ))
          ) : (
            <>
              {dogs.map((dog) => (
                <Link to={`/${dog.name}`} key={dog.id} className="bg-slate-700 p-4 rounded hover:bg-slate-600 transition-all duration-200">
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
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Dogpage;