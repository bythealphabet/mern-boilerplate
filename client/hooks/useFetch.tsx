import React, { useState, useEffect } from "react";
import { abortFetch } from "../api/api-shop";

const controller = new AbortController();

export const useFetch = (api, dataObj, callAgain) => {
  const [fetchedData, setFetchedData] = useState();
  const [message, setMessage] = useState("");
  const [error, setError] = useState(false);

  useEffect(() => {
    callApiForMe(dataObj);
    return function cancel() {
      controller.abort();
    };
  }, [callAgain]);

  return [
    fetchedData,
    message,
    error,
    addToArray,
    updateArray,
    removeFromArray,
  ];

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  async function callApiForMe(obj) {
    try {
      const data = await api(dataObj);
      if (data.error) {
        setError(true);
        setMessage(data.error);
        return;
      }

      setError(false);
      setMessage(data.message);
      setFetchedData(data);
    } catch (err) {
      console.log("err:", err);
    }
  }

  function addToArray(obj) {
    setFetchedData((prev) => {
      return [...prev, obj];
    });
  }

  function updateArray(obj) {
    var updatedData = fetchedData.map((item, i) => {
      if (item._id == obj._id) {
        return { ...item, ...obj };
      }
      return item;
    });
    setFetchedData(updatedData);
  }

  function removeFromArray(id) {
    var updatedData = fetchedData;
    var index = updatedData.map((i) => i._id).indexOf(id);
    updatedData.splice(index, 1);
    setFetchedData(updatedData);
  }
};

export const usePost = () => {
  const [fetchedData, setFetchedData] = useState();
  const [message, setMessage] = useState("");
  const [succes, setSucces] = useState(false);
  const [error, setError] = useState(false);

  return [fetchedData, onSubmit, message, succes, error];

  ////////////////////////////////////////////////////////////////
  ////////////////////////////////////////////////////////////////

  async function onSubmit(api, dataObj, cb) {
    try {
      const data = await api(dataObj);

      if (data.error) {
        setError(true);
        setMessage(data.error);
        return;
      }
      setError(false);
      setSucces(true);
      setMessage(data.message);
      setFetchedData(data);
      return data;
    } catch (err) {
      console.log("err:", err);
    }
  }
};
