import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
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
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

const Pricing = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className="pricing">
            <Box
                sx={{ bgcolor: 'background.paper', display: 'flex', height: 462 }}
                className='mainWrapper'
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider' }}
                >
                    <Tab label="Walls" {...a11yProps(0)} />
                    <Tab label="Memorial" {...a11yProps(1)} />
                    <Tab label="Reoccuring" {...a11yProps(2)} />
                    <Tab label="All" {...a11yProps(3)} />
                </Tabs>
                <TabPanel value={value} index={0}>
                    <ul>
                        <li>Wall $1.11</li>
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={1}>
                    <ul>
                        <li>Memorial $1.11</li>

                    </ul>
                </TabPanel>
                <TabPanel value={value} index={2}>
                    <ul>
                        <li>Flowers $1.11</li>
                        <li>Video $1.11</li>
                        <li>Toys $1.11</li>
                        <li>Alturnative Gifts $1.11</li>
                    </ul>
                </TabPanel>
                <TabPanel value={value} index={3}>
                    <ul>
                        <li>Memorial $1.11</li>
                        <li>Wall $1.11</li>
                        <li>Flowers $1.11</li>
                        <li>Video $1.11</li>
                        <li>Toys $1.11</li>
                        <li>Alturnative Gifts $1.11</li>
                    </ul>
                </TabPanel>
            </Box>
        </div>
    );
}

export default Pricing