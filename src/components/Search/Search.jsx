const Search = () => {
  return (
    <div className="flex items-center">
      <input
        type="text"
        placeholder="Search..."
        className="px-4 py-2 border border-gray-300 rounded-l focus:outline-none focus:ring focus:border-blue-500"
      />
      <button
        type="button"
        className="bg-blue-500 text-white px-4 py-2 rounded-r hover:bg-blue-600 focus:outline-none focus:ring focus:border-blue-700"
      >
        Search
      </button>
    </div>
  );
};

export default Search;
