function Search({ search, setSearch, handleSearch }) {
  return (
    <div className="search-engine">
      <input
        type="text"
        id=""
        placeholder="Enter city name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={handleSearch}>
        Search
      </button>
    </div>
  );
}

export default Search;
