import { useState } from "react";

const usePagination = () => {
  const [pagesCount, setPagesCount] = useState(0);

  const handleChangeElement = (
    event: React.ChangeEvent<unknown>,
    value: number,
  ) => {
    setPagesCount(value - 1);
  };

  return [pagesCount, handleChangeElement] as const;
};

export default usePagination;