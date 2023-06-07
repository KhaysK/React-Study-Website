import React from "react";
import { usePagination } from "../../../hooks/usePagination";

function Pagination({ page, changePage, totalPage }) {
    let pagesArray = usePagination(totalPage);
    
    return (
        <div className="page_wrapper">
            {pagesArray.map((pageNum) => (
                <span
                    key={pageNum}
                    className={pageNum === page ? "page page_active" : "page"}
                    onClick={() => changePage(pageNum)}
                >
                    {pageNum}
                </span>
            ))}
        </div>
    );
}

export default Pagination;
