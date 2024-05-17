
const SearchItems = ({search ,setSearch}) => {
   

    return (
        <div  className="container text-center">
            <form className="searchForm" onSubmit={(e) => e.preventDefault()} >
              
                <input
                    type="text"
                    value={search}
                    id="search"
                    role="searchbox"
                    placeholder='Search Item'
                    onChange={(e) => setSearch(e.target.value)}
                />
                <span> </span>  <span></span> <label htmlFor='search'>Search</label>
            </form>
        </div>
    );
};

export default SearchItems;
