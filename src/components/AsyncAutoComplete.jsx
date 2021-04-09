import axios from "axios";
import React, { Fragment, useState } from "react";
import { AsyncTypeahead } from "react-bootstrap-typeahead";
import { BASE_URL_GITHUB } from "../config/constant";
// Another way:  import * as Constants from "../config/constant";  USE:  Constants.BASE_URL_GITHUB
import HttpHandler from "../core/HttpHandler";

const AsyncAutoComplete = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const handleSearch = (query) => {
    setIsLoading(true);

    const SEARCH_URI = `${BASE_URL_GITHUB}/search/users`;

    axios
      .get(`${SEARCH_URI}?q=${query}+in:login&page=1&per_page=50`)
      .then((response) => {
        const options = response.data.items.map((i) => ({
          avatar_url: i.avatar_url,
          id: i.id,
          login: i.login,
        }));

        setOptions(options);
        setIsLoading(false);
      });
  };

  // Bypass client-side filtering by returning `true`. Results are already
  // filtered by the search endpoint, so no need to do it again.
  const filterBy = () => true;

  return (
    <AsyncTypeahead
      filterBy={filterBy}
      id="async-example"
      isLoading={isLoading}
      labelKey="login"
      multiple
      minLength={1}
      onSearch={handleSearch}
      options={options}
      placeholder="Search for a Github user..."
      renderMenuItemChildren={(option, props) => (
        <Fragment>
          <img
            alt={option.login}
            src={option.avatar_url}
            style={{
              height: "24px",
              marginRight: "10px",
              width: "24px",
            }}
          />
          <span>{option.login}</span>
        </Fragment>
      )}
    />
  );
};

export default HttpHandler(AsyncAutoComplete);
