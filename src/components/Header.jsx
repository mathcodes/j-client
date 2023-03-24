export default function Header() {
  return (
    <div className="flex items-center justify-between px-4 py-6 bg-gray-800 sm:px-6 md:justify-start md:space-x-10">
      <div className="flex-1 min-w-0">
        <h2 className="text-2xl font-bold leading-7 text-white sm:truncate sm:text-3xl sm:tracking-tight">
          Back End Developer
        </h2>
      </div>
      <div className="flex mt-4 md:mt-0 md:ml-4">
        <a
          href="#about"
          className="inline-flex items-center px-3 py-2 text-sm font-semibold text-white rounded-md shadow-sm bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:bg-white/20"
        >
          About
        </a>
        <a
          href="#gallery"
          className="inline-flex items-center px-3 py-2 ml-3 text-sm font-semibold text-white rounded-md shadow-sm bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:bg-white/20"
        >
          Gallery
        </a>
        <a
          href="#contact"
          className="inline-flex items-center px-3 py-2 ml-3 text-sm font-semibold text-white rounded-md shadow-sm bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:bg-white/20"
        >
          Contact
        </a>
      </div>
    </div>
  );
}
