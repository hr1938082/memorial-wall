import { CircularProgress } from '@mui/material';
import * as React from 'react';
import usePricing from '../Hooks/usePricing';


const Pricing = () => {
    const pricing = usePricing();
    console.log(pricing.PricingValues.values);

    return (
        pricing.PricingValues.isLoading ? (
            <div className='d-flex justify-content-center align-items-center' style={{ height: "calc(100vh - 112px)" }}>
                <CircularProgress />
            </div>
        ) : (
            <div className="pricing">
                <div
                    className='mainWrapper'
                >
                    {
                        pricing.PricingValues.values.map((val, index) => {
                            return (
                                <div className="Card" key={index}>
                                    <div className="Card-inner">
                                        <div className="name">
                                            {val.name}
                                        </div>
                                        <div className="price">
                                            <div className="pr">
                                                <div className="pr2">
                                                    $ {val.price}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='des'>
                                            <p >
                                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil aperiam tempora
                                                impedit iusto beatae ex cum sed facilis aspernatur explicabo suscipit provident,
                                                quaerat, culpa vitae error placeat qui ipsum deserunt.
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        )
    );
}

export default Pricing