export default function Header() {
  const name = "aisyah";

  return (
    <header className="flex justify-between items-center py-6 px-8 bg-white-800 text-teal-500 shadow-lg rounded-lg">
      <div className="flex items-center">
        <h1 className="text-xl font-bold mr-4 text-stroke-1 stroke-white">
          <span className="text-5xl font-bold"> Daftar Makanan</span>
        </h1>
        <h2 className="text-1xl font-semibold">
          {name ? `Hai ${name}` : "Tanpa Nama"}
        </h2>
      </div>
    </header>
  );
}
