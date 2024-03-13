import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { logout } from "../../redux/AuthReducer";
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';


export default function BasicMenu(props) {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (<div>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            {props.name}
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={() => {
                handleClose()
                navigate('/profile/change')
            }}>Change profile</MenuItem>

            <MenuItem onClick={() => {
                handleClose()
                dispatch(logout())
            }}>Logout</MenuItem>
        </Menu>
    </div>
    );
}
