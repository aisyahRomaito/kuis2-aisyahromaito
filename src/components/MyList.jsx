import React from 'react';

export default function FoodList() {
  const regionalFoods = [
    {
      id: "1",
      nama: "Rendang",
      asal: "Sumatra Barat",
      gambar: "rendang.jpg",
    },
    {
      id: "2",
      nama: "Sate",
      asal: "Jawa Barat",
      gambar: "sate.jpg",
    },
    {
      id: "3",
      nama: "Sop",
      asal: "Yogyakarta",
      gambar: "sop.jpg",
    },
    {
      id: "4",
      nama: "Bakmi",
      asal: "Palembang",
      gambar: "bakmi.jpg",
    },
    {
      id: "5",
      nama: "Asinan",
      asal: "Bogor",
      gambar: "asinan.jpg",
    },
  ];

  const showInformation = (food) => {
    alert(`Nama Makanan: ${food.nama}\nAsalnya: ${food.asal}`);
  };

  const promptComment = () => {
    let comment = prompt("Masukkan komentar anda?");
    if (comment === null || comment.trim() === "") {
      alert("Komentar tidak boleh kosong!");
    } else {
      alert("Komentar: " + comment);
    }
  };

  const likeFood = () => {
    alert("Anda menyukai makanan ini");
  };

  return (
    <div className="container mx-auto p-8 bg-gray-100 min-h-screen">
      <div className="flex flex-wrap justify-center">
        {regionalFoods.map((food) => (
          <div key={food.id} className="max-w-xs w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-4">
            <div className="rounded overflow-hidden shadow-lg bg-white transform transition hover:-translate-y-2 hover:shadow-2xl">
              <img src={food.gambar} alt={food.nama} className="w-full h-48 object-cover"/>
              <div className="px-6 py-4 text-center">
                <div className="font-bold text-xl mb-2 text-gray-800">{food.nama}</div>
                <div className="flex justify-center space-x-2 mt-4">
                  <button 
                    onClick={() => showInformation(food)} 
                    className="bg-teal-500 text-white text-sm py-2 px-4 rounded-full hover:bg-teal-600 transition-colors duration-300"
                  >
                    Informasi
                  </button>
                  <button 
                    onClick={likeFood} 
                    className="bg-teal-500 text-white text-sm py-2 px-4 rounded-full hover:bg-teal-600 transition-colors duration-300"
                  >
                    Suka
                  </button>
                  <button 
                    onClick={promptComment} 
                    className="bg-teal-500 text-white text-sm py-2 px-4 rounded-full hover:bg-teal-600 transition-colors duration-300"
                  >
                    Komentar
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
