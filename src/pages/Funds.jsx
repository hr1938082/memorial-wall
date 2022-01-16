import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Box, Tab, Tabs, Typography } from '@mui/material';
import StartFund from '../components/StartFund';
import Contribute from '../components/Contribute';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}
const Funds = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className="funds">
            <Box sx={{ boxShadow: "0 0 5px black", borderRadius: '20px', minWidth: '200px', width: '1000px', margin: '0 1rem' }}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                        <Tab label="Start Fund" {...a11yProps(0)} />
                        <Tab label="Contribute" {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <TabPanel value={value} index={0}>
                    <StartFund />
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <Contribute />
                </TabPanel>
            </Box>
        </div>
    );
}

export default Funds
