import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate';
import {useDispatch,useSelector } from 'react-redux';
import {MovieAction,MoviePage} from "../redux/action/MovieAction"
const PaginationComponent = () => {

    const [pageCount, setpageCount] = useState(0)

    const dispatch=useDispatch()
    const pages=useSelector((state)=> state.pageCount)
    useEffect(() => {
        setpageCount(pages)
    }, [pages])
    //get current page
    const getPage = async (page) => {
        dispatch(MoviePage(page))
      window.scroll(0,0);
    }



    const handlePageClick = (data) => {
        getPage(data.selected + 1)
    }
    return (
        <ReactPaginate
            breakLabel="..."
            nextLabel="التالى"
            onPageChange={handlePageClick}
            marginPagesDisplayed={1}
            pageRangeDisplayed={1}
            pageCount={pageCount}
            previousLabel="السابق"
            containerClassName={"pagination justify-content-center p-3"}
            pageClassName={"page-item"}
            pageLinkClassName={"page-link"}
            previousClassName={"page-item"}
            nextClassName={"page-item"}
            previousLinkClassName={"page-link"}
            nextLinkClassName={"page-link"}
            breakClassName={"page-item"}
            breakLinkClassName={"page-link"}
            activeClassName={"active"}
        />
    )
}

export default PaginationComponent
