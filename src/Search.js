import React, { useState } from "react";

function Search({ fetchData }) {
  const [name, setName] = useState("");
  const collectInputName = event => setName(event.target.value);
  console.log(name);

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Github Name"
          name="name"
          value={name}
          onChange={collectInputName}
        />
        <input
          type="button"
          value="Search name"
          onClick={() => fetchData(name)}
        />
      </form>
    </div>
  );
}

export default Search;
