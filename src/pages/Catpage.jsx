import React, { useState, useEffect } from 'react';


const Catpage = () => {
  const [cats, setCats] = useState([]);
  const [text, setText] = useState('');
  const [searched, setSearched] = useState(false);

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

    setSearched(false);
    fetchCatData();
  }, []);

  const searchForCat = async () => {
    try {
      const res = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${text}&api_key=live_XuuAARbK4pXsO9ZDTgNl4or0gXoEClDtAu70TYlegAGbgFjuLVgE56h3gRDpF3ku`);
      const data = await res.json();
      setCats(data);
    } catch (error) {
      console.error(error);
    }
  };

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
      return <div><img src="no_preview.jpg" alt=""  className='md:h-72 w-full'/></div>;
    }
  };

  return (
    <>
      <section className="p-8 max-w-7xl mx-auto">
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
        
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3 my-10 lg:my-20">
          {!searched ? (
            cats.map((cat) => (
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
            <>
              {cats.map((cat) => (
                <div to={`/${cat.name}`} key={cat.id} className="bg-slate-700 p-4 rounded hover-bg-slate-600 transition-all duration-200">
                    <article>
                      {renderImage(cat)}
                      <h3 className="text-white text-lg font-bold mt-4">{cat.name}</h3>
                    <p className="text-slate-400">Temperament: {cat.temperament}</p>
                    <p className="text-slate-400">Description: {cat.description}</p>
                    <p className="text-slate-400">Origin: {cat.origin}</p>
                    </article>
                </div>
              ))}
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default Catpage;
