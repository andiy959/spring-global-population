import React, { useState } from "react";
import "./main.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

import { setCountry } from "../../actions/country";
import { connect } from "react-redux";

const Main = ({ setCountry }) => {
  const [state, setstate] = useState({
    country: "",
    continent: "",
    region: "",
    n: 0,
  });

  let { country, continent, region, n } = state;
  const history = useHistory();
  const url = "http://localhost:8080/population";

  let config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
    },
    params: {
      country: country,
      continent: continent,
      top: n,
    },
  };

  return (
    <div className="main">
      <div
        onClick={(e) => {
          axios.get(url + "/country/all").then((res) => {
            setCountry(res.data);
            history.push("/country");
          });
        }}
        className="card-panel"
      >
        <h5>World Countries</h5>
      </div>

      <div
        onClick={(e) => {
          if (continent !== "")
            axios.get(`${url}/country/continent`, config).then((res) => {
              setCountry(res.data);
              history.push("/country");
            });
        }}
        className="card-panel"
      >
        <h5>Countries in a Continent</h5>
        <div class="input-field">
          <input
            value={continent}
            onChange={(e) => setstate({ ...state, continent: e.target.value })}
            placeholder="Continent"
            type="text"
            class="validate"
          />
        </div>
      </div>
      <div
        onClick={(e) => {
          if (region !== "")
            axios.get(`${url}/country/continent`, config).then((res) => {
              setCountry(res.data);
              history.push("/country");
            });
        }}
        className="card-panel"
      >
        <h5>Countries in a Region</h5>
        <input
          value={region}
          onChange={(e) => setstate({ ...state, continent: e.target.value })}
          placeholder="Region"
          type="text"
          class="validate"
        />
      </div>
      <div
        onClick={(e) => {
          if (n !== 0)
            axios.get(`${url}/country/top`, config).then((res) => {
              setCountry(res.data);
              history.push("/country");
            });
        }}
        className="card-panel"
      >
        <h5>Top n Countries in the world</h5>
        <input
          value={n}
          onChange={(e) => setstate({ ...state, n: e.target.value })}
          placeholder="Top"
          type="number"
          class="validate"
        />
      </div>
      <div
        onClick={(e) => {
          if (n !== 0)
            axios.get(`${url}/country/continent/top`, config).then((res) => {
              setCountry(res.data);
              history.push("/country");
            });
        }}
        className="card-panel"
      >
        <h5>Top n Countries in the Continent</h5>
        <input
          value={continent}
          onChange={(e) => setstate({ ...state, continent: e.target.value })}
          placeholder="Continent"
          type="text"
          class="validate"
        />
        <input
          value={n}
          onChange={(e) => setstate({ ...state, n: e.target.value })}
          placeholder="Top"
          type="number"
          class="validate"
        />
      </div>
      <div className="card-panel">
        <h5>Top n Countries in the Region</h5>
      </div>
    </div>
  );
};

export default connect(null, { setCountry })(Main);
