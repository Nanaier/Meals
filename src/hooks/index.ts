import { useState, useEffect } from "react";
import { GetAllMealsDTO } from "@/types/service";

interface PaginationState {
  currentPage: number;
  totalPages: number;
  currentItems: GetAllMealsDTO["meals"];
  goToPage: (page: number) => void;
  goToNextPage: () => void;
  goToPrevPage: () => void;
}

const usePagination = (
  itemsPerPage: number,
  data: GetAllMealsDTO
): PaginationState => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentItems, setCurrentItems] = useState<GetAllMealsDTO["meals"]>([]);

  useEffect(() => {
    if (data) {
      setTotalPages(Math.ceil(data.meals.length / itemsPerPage));
      setCurrentItems(data.meals.slice(0, itemsPerPage));
      setCurrentPage(1);
    }
  }, [data, itemsPerPage]);

  const goToPage = (page: number) => {
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    setCurrentItems(data.meals.slice(startIndex, endIndex));
    setCurrentPage(page);
  };

  const goToNextPage = () => {
    if (currentPage < totalPages) {
      goToPage(currentPage + 1);
    }
  };

  const goToPrevPage = () => {
    if (currentPage > 1) {
      goToPage(currentPage - 1);
    }
  };

  return {
    currentPage,
    totalPages,
    currentItems,
    goToPage,
    goToNextPage,
    goToPrevPage,
  };
};

export default usePagination;