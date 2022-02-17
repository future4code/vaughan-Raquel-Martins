import { useEffect, useState } from "react";
import axios from "axios";
import { URL_BASE } from "../constants/BASE_URL";

export function useRequestList() {
  const [data, setData] = useState(undefined);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getTrips();
    },[]);

  
  const getTrips = () => {
    setLoading(true);
    axios
      .get(`${URL_BASE}/trips`)
      .then((res) => {
        setData(res.data.trips);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  };



 

  return [data, isLoading, error];
};
