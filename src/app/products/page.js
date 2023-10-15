'use client';
import Link from "next/link";
import react,{useState,useEffect} from "react";


const page = () => {
  const [term, setterm] = useState(["popular", "Popular"]);
  const [popularMovies, setpopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${term[0]}?api_key=fca8a4b893c170d5868618d48948fdf2`
    )
      .then((res) => res.json())
      .then((data) => setpopularMovies(data.results));
  }, [term]);

  return (
    <div>
      <section className="text-gray-600 body-font min-h-screen">
        <div className="w-full p-8 mx-auto">
          <div className="mx-auto flex flex-wrap w-auto my-2 justify-center items-center bg-white p-4 rounded">
            <span
              onClick={() => {
                setterm(["popular", "Popular"]);
                console.log(term);
              }}
              className="text-blue-900 font-bold text-xl m-2 cursor-pointer"
            >
              Popular
            </span>
            <span
              onClick={() => setterm(["top_rated", "Top Rated"])}
              className="text-blue-900 font-bold text-xl m-2 cursor-pointer"
            >
              Top Rated
            </span>
            <span
              onClick={() => setterm(["popular", "Trending"])}
              className="text-blue-900 font-bold text-xl m-2 cursor-pointer"
            >
              Trending
            </span>
            <span
              onClick={() => setterm(["upcoming", "Up Coming"])}
              className="text-blue-900 font-bold text-xl m-2 cursor-pointer"
            >
              Up Coming
            </span>
          </div>
          <div className="text-center w-full my-4">
            <span className="text-white font-bold text-xl">{term[1]}</span>
          </div>
          <div className="flex flex-wrap m-0 w-full justify-center items-center">
            {popularMovies.map((elem, index) => {
              return (
                <Link href={"/product/2"} key={index}>
                  <div className="bg-white shadow-md rounded-lg max-w-sm m-2">
                    <img
                      className="rounded-lg p-3"
                      src={`https://image.tmdb.org/t/p/original${
                        elem && elem.backdrop_path
                      }`}
                      alt="productimage"
                    />

                    <div className="px-4 pb-4">
                      <p>
                        <span className="text-black font-semibold text-xl tracking-tight ">
                          {(elem ? elem.overview : "").slice(0, 100) + "..."}
                        </span>
                      </p>
                      <div className="flex items-center my-4">
                        <svg
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <svg
                          className="w-5 h-5 text-yellow-300"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                        </svg>
                        <span className="  text-xs font-semibold mr-2 px-2.5 py-0.5 rounded bg-blue-200 text-blue-800 ml-3">
                          5.0
                        </span>
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-3xl font-bold  text-blue-700">
                          $599
                        </span>
                        <p className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">
                          Buy
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
