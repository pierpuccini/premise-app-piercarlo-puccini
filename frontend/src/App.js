import React, { useEffect, useState } from "react";
import { Search } from "./components/Search/Search";
import { Table } from "./components/Table/Table";
import styled from 'styled-components'

const P = styled.p``;

const Loading = styled(P)``;
const Error = styled(P)`
  color: red;
`;

/* TODO: Implement call to action component in order to make the search field look more like the MET page */
const App = () => {
  const [queryStatus, setQueryStatus] = useState({ loading: false });
  const [searchValue, setSearchValue] = useState();
  const [objects, setObjects] = useState();

  useEffect(() => {
    if (searchValue) {
      const [specificKey, value] = searchValue.includes(':') ? searchValue.split(':') : ['q', searchValue];
      setQueryStatus({ loading: true })
      fetchInfo(specificKey, value);
    }
  }, [searchValue]);

  const fetchInfo = async (specificKey, value) => {
    try {
      const url = new URL('http://localhost:3030/search')
      const params = { [specificKey]: value };
      url.search = new URLSearchParams(params).toString();
      const response = await fetch(url);
      const info = await response.json();
      setObjects(info.objects);
      setQueryStatus({ loading: false })
    } catch (error) {
      setQueryStatus({ loading: false, error })
    }
  };

  return (
    <>
      <Search setSearchValue={setSearchValue} />
      {queryStatus.loading && <Loading>
        Loading
      </Loading>}
      {queryStatus.error && <Error>
        {queryStatus.error}
      </Error>}
      {objects && <Table items={objects} />}
    </>
  );
}

export default App;
