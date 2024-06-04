export default function MyList() {
  const songs = [
    {
      id: "1",
      penyanyi: "Freddie Mercury",
      namaLagu: "Bohemian Rhapsody",
      band: "Queen",
      gambar: "queen.png",
    },
    {
      id: "2",
      penyanyi: "Kurt Cobain",
      namaLagu: "Smells Like Teen Spirit",
      band: "Nirvana",
      gambar: "nirvanaa.jpg",
    },
    {
      id: "3",
      penyanyi: "Chester Bennington",
      namaLagu: "In the End",
      band: "Linkin Park",
      gambar: "linkin.png",
    },
    {
      id: "4",
      penyanyi: "Mick Jagger",
      namaLagu: "Paint It Black",
      band: "The Rolling Stones",
      gambar: "the.jpg",
    },
    {
      id: "5",
      penyanyi: "Axl Rose",
      namaLagu: "Sweet Child O' Mine",
      band: "Guns N' Roses",
      gambar: "gs.jpg",
    },
    {
      id: "6",
      penyanyi: "Ahmad Dhani",
      namaLagu: "Kangen",
      band: "Dewa 19",
      gambar: "dw.jpg",
    },
    {
      id: "7",
      penyanyi: "Ariel",
      namaLagu: "Separuh Aku",
      band: "Noah",
      gambar: "noah.png",
    },
    {
      id: "8",
      penyanyi: "Bams",
      namaLagu: "Sahabat Sejati",
      band: "Samsons",
      gambar: "sam.jpg",
    },
    {
      id: "9",
      penyanyi: "Kaka",
      namaLagu: "Bento",
      band: "Slank",
      gambar: "sl.jpg",
    },
    {
      id: "10",
      penyanyi: "Bono",
      namaLagu: "With or Without You",
      band: "U2",
      gambar: "U2.jpg",
    },
  ];

  function handleClick(song) {
    alert(`Nama Penyanyi: ${song.penyanyi}\nBand: ${song.band}\nLagu: ${song.namaLagu}`);
  }

    return (
      <div className="my-list bg-gradient-to-r from-sky-500 to-teal-400"> {/* Improved background gradient */}
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
            {songs.map((song) => (
              <div key={song.id} className="song-item group relative rounded-lg shadow-lg overflow-hidden">
                <img
                  src={song.gambar}
                  alt={song.namaLagu}
                  className="w-full h-48 object-cover rounded-lg border border-gray-200 transition group-hover:scale-105 group-hover:filter grayscale-75 duration-300"
                />
                <div className="song-info absolute inset-0 bg-gradient-to-b from-transparent to-black/50 opacity-0 group-hover:opacity-100 transition duration-300 flex items-end justify-between px-4 py-4">
                  <div className="text-left">
                    <h3 className="text-2xl text-white font-semibold">{song.namaLagu}</h3>
                    <p className="text-base text-gray-300 mt-2">{song.penyanyi} - {song.band}</p>
                  </div>
                  <button
                    onClick={() => handleClick(song)}
                    className="px-6 py-3 text-white font-semibold rounded-full bg-teal-500 hover:bg-teal-600 transition-colors duration-300"
                  >
                    Lihat Selengkapnya
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }