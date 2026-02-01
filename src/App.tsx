"use client";
import { useState } from "react";


export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const photos = [
  "geena-andy.jpg",
  "geena-andy-2.jpg",
  "geena-andy-3.jpg",
  "geena-andy-4.jpg",
];

  const getNoButtonText = () => {
    const phrases = [
      "No",
      "Are you sure?",
      "What if I asked really nicely?",
      "Pretty please",
      "With a Lobster",
      "What about Crabs",
      "PLEASE POOKIE",
      "But :*(",
      "I am going to die",
      "Yep im dead",
      "ok ur talking to andy's ghost",
      "please BBBBBBBB",
      ":((((",
      "PRETTY PLEASE",
      "My MUMMY",
      "No :((((((((((((((((",
    ];

    return phrases[Math.min(noCount, phrases.length - 1)];
  };

  return (
    <div className="-mt-16 flex h-screen flex-col items-center justify-center">
      {yesPressed ? (
        <>
          <div className="mt-4 flex flex-wrap items-center justify-center gap-4 max-w-6xl px-4">
            {/* Left photos */}
            {photos.slice(0, Math.ceil(photos.length / 2)).map((img, i) => (
              <div
                key={img}
                className={`bg-white p-2 pb-8 shadow-lg w-[200px] rotate-[-3deg]`}
              >
                <img
                  src={`${import.meta.env.BASE_URL}${img}`}
                  alt="memory"
                  className="w-full h-[400px] object-cover rounded-sm"
                />
              </div>
            ))}

            {/* Center GIF */}
            <img
              src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif"
              alt="Bear kiss"
              className="w-[200px] mx-6"
            />

            {/* Right photos */}
            {photos.slice(Math.ceil(photos.length / 2)).map((img) => (
              <div
                key={img}
                className="bg-white p-2 pb-8 shadow-lg w-[200px] rotate-[3deg]"
              >
                <img
                  src={`${import.meta.env.BASE_URL}${img}`}
                  alt="memory"
                  className="w-full h-[400px] object-cover rounded-sm"
                />
              </div>
            ))}
          </div>

          <div className="my-4 text-4xl font-bold text-center">Yayyyy LOVE U!!! 💖</div>

          <p className="text-lg opacity-80 text-center px-6">
            Can’t wait to make memories with you, Baby Geena — Andy
          </p>
        </>
      ) : (
        <>
          <img
            className="h-[200px]"
            src="https://gifdb.com/images/high/cute-love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="my-4 text-4xl">Will you be my Valentine?</h1>
          <div className="flex items-center">
            <button
              className={`mr-4 rounded bg-green-500 px-4 py-2 font-bold text-white hover:bg-green-700`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Yes
            </button>
            <button
              onClick={handleNoClick}
              className=" rounded bg-red-500 px-4 py-2 font-bold text-white hover:bg-red-700"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
