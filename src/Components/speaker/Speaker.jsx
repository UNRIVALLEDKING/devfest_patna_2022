import React from "react";
import { SpeakerList } from "./SpeakerList";
import git from "../../assets/Icons/git.svg";
import linkedin from "../../assets/Icons/linkedin.svg";
import twitter from "../../assets/Icons/twitter.svg";

function Speaker(props) {
  return (
    <>
      {SpeakerList.map((item, id) => {
        return (
          <div
            key={id}
            className="w-full mt-10 md:w-1/2 lg:w-1/4 pl-5 pr-5 mb-20 lg:pl-2 lg:pr-2"
          >
            <div className="bg-zinc-900 rounded-lg m-h-64 p-2 transform hover:translate-y-2 hover:shadow-xl transition duration-300">
              <figure className="mb-2 flex justify-center -mt-16 md:justify-center">
                <img
                  className="object-cover w-40  h-40 border-2 border-secondary rounded-full"
                  alt="Testimonial avatar"
                  src={item.image}
                />
              </figure>
              <div className="rounded-lg p-4  flex flex-col">
                <div>
                  <h5 className="text-white text-2xl font-bold leading-none">
                    Pankaj shrivastava
                  </h5>
                  <span className="text-xs text-gray-400 leading-none">
                    Full stack developer || wipro
                  </span>
                </div>

                <div className="flex justify-center mt-5">
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <a href={item.githubUrl} target="_blank" rel="noreferrer">
                      <img
                        src={git}
                        alt="github"
                        className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                      />
                    </a>
                  </button>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <a href={item.linkedinUrl} target="_blank" rel="noreferrer">
                      <img
                        src={linkedin}
                        alt="linkedin"
                        className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                      />
                    </a>
                  </button>
                  <button
                    type="button"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                    className="inline-block px-6 py-2.5 mb-2 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
                  >
                    <a href={item.twitterUrl} target="_blank" rel="noreferrer">
                      <img
                        src={twitter}
                        alt="twitter"
                        className="w-6 hover:-translate-y-1 transition-all ease-in-out"
                      />
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default Speaker;
