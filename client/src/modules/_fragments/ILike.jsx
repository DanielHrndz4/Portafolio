import React from 'react'

export default function ILike() {
  return (
    <div className='my-auto'>
      <div className='flex flex-row'>
        <div className="w-auto flex flex-row m-2 text-white">
          <div className="bg-white hover:scale-105 hover:cursor-pointer ease-in-out duration-200 font-bold text-Cbackground p-2 rounded-full content-center text-center">
            <img
              src={`/images/aboutme/videogame.png`}
              className="w-[24px] inline mr-2"
              alt="videogame"
            />
            Play Videogames
          </div>
        </div>

        <div className="w-auto flex flex-row m-2 text-white">
          <div className="bg-white hover:scale-105 hover:cursor-pointer ease-in-out duration-200 font-bold text-Cbackground p-2 rounded-full content-center text-center">
            <img
              src={`/images/aboutme/music.png`}
              className="w-[24px] inline mr-2"
              alt="videogame"
            />
            Listeing to Music
          </div>
        </div>
      </div>

      <div className='flex flex-row'>
      <div className="w-auto flex flex-row m-2 text-white">
        <div className="bg-white hover:scale-105 hover:cursor-pointer ease-in-out duration-200 font-bold text-Cbackground p-2 rounded-full content-center text-center">
          <img
            src={`/images/aboutme/money.png`}
            className="w-[24px] inline mr-2"
            alt="videogame"
          />
          Earn Money
        </div>
      </div>

      <div className="w-auto flex flex-row m-2 text-white">
        <div className="bg-white hover:scale-105 hover:cursor-pointer ease-in-out duration-200 font-bold text-Cbackground p-2 rounded-full content-center text-center">
          <img
            src={`/images/aboutme/movie.png`}
            className="w-[24px] inline mr-2"
            alt="videogame"
          />
          Watch Movies
        </div>
      </div>
      </div>
    </div>
  );
}