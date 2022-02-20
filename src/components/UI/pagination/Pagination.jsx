import React from 'react'
import { getPageCount, getPagesArray } from 'F:/dima/js practices/react/SPA REACT/first-app/src//utils/pages';

const Pagination = ({ totalPages, page, changePage }) => {
    let pagesArray = getPagesArray(totalPages)

    return (
        <div className='page__wrapper'>
            {
                pagesArray.map(p =>
                    <span
                        onClick={() => changePage(p)}
                        key={p}
                        className={
                            page === p
                                ? 'page page__current'
                                : 'page'}>{p}
                    </span>
                )
            }
        </div>
    )
}

export default Pagination