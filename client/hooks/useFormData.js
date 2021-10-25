import React, { useState, useEffect } from "react";

const useFromData = (formObj, obj) => {
  const [inputData, setInputData] = useState({ ...formObj });

  useEffect(() => {
    setInputData({ ...formObj, ...obj });
  }, [obj]);

  const onInputChange = (name) => async (value, img) => {
    if (img && name) {
      if (!value[0]) {
        await setInputData((prev) => ({ ...prev, [name]: "" }));
        return;
      }
      await setInputData((prev) => ({ ...prev, [name]: value[0] }));
      return;
    }

    if (img) {
      await setInputData((prev) => ({ ...prev, ...value }));
      return;
    }

    setInputData({ ...inputData, [name]: value });
  };

  return [inputData, onInputChange];
};

export default useFromData;
