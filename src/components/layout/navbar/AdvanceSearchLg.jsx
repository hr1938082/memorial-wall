import React from 'react';
import useAdvanceSearch from '../../../Hooks/useAdvanceSearch'

const AdvanceSearchLg = () => {
    const { SearchValues, handleChange, selectValues, handleChangeState, onSubmit } = useAdvanceSearch();
    return (
        <div className='AdvanceSearchLg'>
            <div className="col-lg-2 px-1">
                <div className="mb-3">
                    <input type="text" className=' form-control' name='id' value={SearchValues.id} onChange={handleChange} placeholder='Account No.' />
                </div>
                <div className="mb-3 d-grid">
                    <input type="button" className='btn btn-primary' value="Search" onClick={onSubmit} />
                </div>
            </div>
            <div className="col-lg-10 d-flex flex-wrap">
                <div className="col-lg-2 px-1">
                    <div className="mb-3">
                        <input type="text" className=' form-control' placeholder='First Name' value={SearchValues.first_name} name='first_name' onChange={handleChange} />
                    </div>
                </div>
                <div className="col-lg-2 px-1">
                    <div className="mb-3">
                        <input type="text" className=' form-control' placeholder='Last Name' value={SearchValues.last_name} name='last_name' onChange={handleChange} />
                    </div>
                </div>
                <div className="col-lg-2 px-1">
                    <div className="mb-3">
                        <input type="text" className=' form-control' placeholder='Nick Name' value={SearchValues.nick_name} name='nick_name' onChange={handleChange} />
                    </div>
                </div>
                <div className="col-lg-2 px-1">
                    <div className="mb-3">
                        <input type="date" className=' form-control' name='birthday' value={SearchValues.birthday} onChange={handleChange} />
                    </div>
                </div>
                <div className="col-lg-2 px-1">
                    <div className="mb-3">
                        <select className='form-control text-capitalize' name='memorial_for' value={SearchValues.memorial_for} onChange={handleChange}>
                            <option value="" disabled>Wall For</option>
                            <option value="Pet">Pet</option>
                            <option value="Individual">Individual</option>
                            <option value="Others">Others</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-2 px-1">
                    <div className="mb-3">
                        <select className='form-control text-capitalize' name='state' value={SearchValues.state} onChange={(e) => { handleChange(e); handleChangeState(e); }}>
                            <option value="" disabled>State</option>
                            {
                                selectValues.state.map((val, index) => {
                                    return (
                                        <option value={val.id} key={index}>{val.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="col-lg-2 px-1">
                    <div className="mb-3">
                        <select className='form-control' name='city' value={SearchValues.city} onChange={handleChange}>
                            <option value="" disabled>City</option>
                            {
                                selectValues.city.map((val, index) => {
                                    return (
                                        <option value={val.id} key={index}>{val.name}</option>
                                    )
                                })
                            }
                        </select>
                    </div>
                </div>
                <div className="col-lg-2 px-1">
                    <div className="mb-3">
                        <select className='form-control' name='wall' value={SearchValues.wall} onChange={handleChange}>
                            <option value="community">Community Wall</option>
                            <option value="new">New Wall</option>
                            <option value="existing">Existing Wall</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-8 px-1">
                    <div className="mb-3 d-grid">
                        <input type="button" className='btn btn-primary' value="Search" onClick={onSubmit} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AdvanceSearchLg
