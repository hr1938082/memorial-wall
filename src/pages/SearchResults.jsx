import { CircularProgress } from '@mui/material';
import React from 'react'
import { Link } from 'react-router-dom'
import useSearchResult from '../Hooks/useSearchResult'

const SearchResults = () => {
    const { Results } = useSearchResult();
    return (
        <div className='searchResults'>
            <div className="mainWrapper">
                <div className="container-fluid">
                    <div className="row m-0 mb-4 text-center">
                        <div className="col-3">
                            Name
                        </div>
                        <div className="col-3">
                            Nick Name
                        </div>
                        <div className="col-3">
                            Age
                        </div>
                        <div className="col-3">
                            Location
                        </div>
                    </div>
                    {
                        Results.isLoading ? (
                            <div className='d-flex justify-content-center align-items-center' style={{ height: '400px', width: '100%' }}>
                                <CircularProgress />
                            </div>
                        ) : (
                            Results.value.map((val, index) => {
                                return (
                                    <div className="row m-0 mb-4 text-center" key={index}>
                                        <Link to="/" className='d-flex py-1 text-decoration-none searchHover'>
                                            <div className="col-3">
                                                {val.first_name}
                                            </div>
                                            <div className="col-3">
                                                {val.nick_name}
                                            </div>
                                            <div className="col-3">
                                                {val.age}
                                            </div>
                                            <div className="col-3">
                                                {val.address}
                                            </div>
                                        </Link>
                                    </div>
                                )
                            })
                        )
                    }
                </div>

            </div>
        </div>
    )
}

export default SearchResults
