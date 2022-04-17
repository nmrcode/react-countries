import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IoArrowBack } from "react-icons/io5";
import axios from "axios";
import { searchByCountry } from "../configAPI";
import Button from "../components/Button/Button";
import Info from "../components/Info/Info";
import * as PropTypes from "prop-types";
import Spinner from "./Spinner";

function View(props) {
  return (
    <>
      <Button onClick={props.onClick}>
        <IoArrowBack /> Back
      </Button>
      {props.country && <Info {...props.country} />}
    </>
  );
}

const Details = () => {
  const { name } = useParams();
  const navigate = useNavigate();
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(null);

  useEffect(() => {
    setLoading(true);
    axios
      .get(searchByCountry(name))
      .then(({ data }) => {
        setCountry(data[0]);
      })
      .finally(() => setLoading(false));
  }, [name]);

  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <View onClick={() => navigate(-1)} country={country} />
      )}
    </div>
  );
};

export default Details;
