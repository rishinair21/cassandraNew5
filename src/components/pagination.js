import React from 'react'
import { Link } from 'gatsby'
import './style/pagination.scss'
import { pagination } from '../config/Functions'

function Pagination({ pageNumber, total, limit, linkSchema }) {
    console.log(total, limit)
    const lastPage = Math.ceil(total / limit)
    // const paginationArr = Array.from(Array(Math.ceil(total / limit)).keys())
    const paginationArr = pagination(pageNumber, lastPage)
    return (
        <div className="pagination-div">
            <div className="pagination-item">
                <ul>
                    {pageNumber > 1 && (
                        <Link to={`${linkSchema}/${pageNumber - 1}`}>
                            <li>Previous</li>
                        </Link>
                    )}

                    {paginationArr.length > 1 &&
                        paginationArr.map((item, index) => {
                            if (item !== '...') {
                                return (
                                    <Link to={`${linkSchema}/${item}`} key={index}>
                                        <li className={item === pageNumber ? 'active' : ''}>{item}</li>
                                    </Link>
                                )
                            }
                            return <li key={index}>{item}</li>
                        })}
                    {pageNumber < lastPage && (
                        <Link to={`${linkSchema}/${pageNumber + 1}`}>
                            <li>Next</li>
                        </Link>
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Pagination
