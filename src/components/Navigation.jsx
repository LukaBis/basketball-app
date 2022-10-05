import React, { useState, useEffect } from 'react';
import { Typography } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import HomeIcon from '@mui/icons-material/Home';
import ArticleIcon from '@mui/icons-material/Article';
import SearchIcon from '@mui/icons-material/Search';
import DetailsIcon from '@mui/icons-material/Details';
import '../css/navigation.css';

function Navigation() {

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const detectWidth = () => {
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', detectWidth);

        return () => {
            window.removeEventListener('resize', detectWidth)
        }
    }, [windowWidth])

    return (
        <>
            <div className="navigation-top">
                <Typography 
                    className='logo'
                    variant='h3'>
                    <span>B</span>Ball
                </Typography>

                { windowWidth < 730 && 
                    <FilterListIcon className="filter-icon" />
                }

                { windowWidth >= 730 && 
                    <ul className='desktop-nav'>
                        <li className='active-link'>
                            <HomeIcon />
                            <Typography paragraph={true}>HOME</Typography>
                        </li>
                        <li>
                            <ArticleIcon />
                            <Typography paragraph={true}>NEWS</Typography>
                        </li>
                        <li>
                            <SearchIcon />
                            <Typography paragraph={true}>SEARCH</Typography>
                        </li>
                        <li>
                            <DetailsIcon />
                            <Typography paragraph={true}>DETAILS</Typography>
                        </li>
                    </ul>
                }
            </div>
            { windowWidth < 730 &&  
                <div className='navigation-options-mobile'>
                    <div className='nav-option'>
                        <HomeIcon />
                        <Typography paragraph={true}>HOME</Typography>
                    </div>
                    <div className='nav-option'>
                        <ArticleIcon />
                        <Typography paragraph={true}>NEWS</Typography>
                    </div>
                    <div className='nav-option'>
                        <SearchIcon />
                        <Typography paragraph={true}>SEARCH</Typography>
                    </div>
                    <div className='nav-option'>
                        <DetailsIcon />
                        <Typography paragraph={true}>DETAILS</Typography>
                    </div>
                </div>
            }
        </>
  )
}

export default Navigation;