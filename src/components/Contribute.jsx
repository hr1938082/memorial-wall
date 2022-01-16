import React from 'react'
import { CircularProgress, InputAdornment, TextField } from '@mui/material'
import { MdSearch } from 'react-icons/md'
import { Link } from 'react-router-dom'
import useContributeFunds from '../Hooks/useContributeFunds'

const Contribute = () => {
    const { Search, handleChangeSearch, SearchValue } = useContributeFunds();
    return (
        <div className='container-fluid'>
            <div className="row">
                <div className="col-12">
                    <TextField
                        label="Search"
                        fullWidth
                        value={Search}
                        onChange={handleChangeSearch}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">
                                    <MdSearch />
                                </InputAdornment>
                            ),
                        }}
                        variant="filled"
                    />
                </div>
            </div>
            <div className="row mt-3 text-center">
                <div className="col-lg-3 col-4">
                    Name
                </div>

                <div className="col-lg-3 col-4">
                    NickName
                </div>
                <div className="col-lg-3 col-4">
                    Age
                </div>
                <div className="col-lg-3 d-none d-lg-block col-4">
                    Location
                </div>
            </div>
            <div className="fundsrows">
                <div className="row m-0 mt-3 text-center">
                    {
                        SearchValue.isLoading ? (
                            <div className='d-flex justify-content-center'>
                                <CircularProgress />
                            </div>
                        ) : (
                            SearchValue.values.map((val, index) => {
                                return (
                                    <Link to={`/donation/${val.id}`} className=' funds-links' key={index}>
                                        <div className="col-lg-3 col-4">
                                            {val.first_name}
                                        </div>

                                        <div className="col-lg-3 col-4">
                                            {val.nick_name}
                                        </div>
                                        <div className="col-lg-3 col-4">
                                            {val.age}
                                        </div>
                                        <div className="col-lg-3 d-none d-lg-block col-4">
                                            {val.location}
                                        </div>
                                    </Link>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Contribute
