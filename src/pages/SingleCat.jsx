import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SingleCat = () => {
  const [cat, setCat] = useState({});
  const { name } = useParams();

  useEffect(() => {
    const fetchSingleCatData = async () => {
      try {
        const res = await fetch(`https://api.thecatapi.com/v1/breeds/search?q=${name}&api_key=live_XuuAARbK4pXsO9ZDTgNl4or0gXoEClDtAu70TYlegAGbgFjuLVgE56h3gRDpF3ku`);
        const data = await res.json();
        setCat(data[0]);
      } catch (error) {
        console.error(error);
      }
    };

    if (name) {
      fetchSingleCatData();
    }
  }, [name]);

  return (
    <>
      <section className="max-w-5xl mx-auto flex items-center justify-center h-screen">
        <div className="grid grid-cols-1 gap-8 p-8 md:grid-cols-2 md:place-items-center">
          <article>
            {cat.image && cat.image.url && (
              <img
                src={cat.image.url}
                alt={cat.name}
              />
            )}
          </article>
          <article>
            <h1 className="text-3xl font-bold text-white mb-8 lg:text-5xl">
              {cat.name}
            </h1>
            {cat.description && (
              <p className="text-slate-400 mb-8 text-sm lg:text-base leading-loose lg:leading-relaxed">
                {cat.description}
              </p>
            )}

            <ul className="text-sm text-slate-400 leading-loose lg:text-base lg:leading-relaxed">
                <li>
                <span className="font-bold text-slate-200">Bred For:</span> {cat.bred_for}
              </li>
              <li>
                <span className="font-bold text-slate-200">Height:</span> {cat.height?.metric} cm
              </li>
              <li>
                <span className="font-bold text-slate-200">Weight:</span> {cat.weight?.metric} kgs
              </li>
              <li>
                <span className="font-bold text-slate-200">Breed Group:</span> {cat.breed_group}
              </li>
              <li>
                <span className="font-bold text-slate-200">Lifespan:</span> {cat.life_span}
              </li>
              <li>
                <span className="font-bold text-slate-200">Temperament:</span> {cat.temperament}
              </li>
            </ul>
            <Link
              to="/"
              className="inline-block bg-slate-600 py-2 px-6 rounded mt-8 text-white hover:bg-slate-500 transition-all duration-200"
            >
              &larr; Back
            </Link>
          </article>
        </div>
      </section>
    </>
  );
};

export default SingleCat;
