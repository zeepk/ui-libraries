import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Link from '@material-ui/core/Link';

export default function MaterialUI() {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			<AppBar position="static" style={{}}>
				<Toolbar>
					<Link
						href="https://material-ui.com/"
						style={{ margin: '0 30px 0 0' }}
						color="inherit"
						variant="h4"
					>
						MaterialUI
					</Link>
					<IconButton edge="start" color="inherit" aria-label="menu">
						<Button
							aria-controls="simple-menu"
							aria-haspopup="true"
							onClick={handleClick}
						>
							Open Menu
						</Button>
						<Menu
							id="simple-menu"
							anchorEl={anchorEl}
							keepMounted
							open={Boolean(anchorEl)}
							onClose={handleClose}
						>
							<MenuItem onClick={handleClose}>Profile</MenuItem>
							<MenuItem onClick={handleClose}>My account</MenuItem>
							<MenuItem onClick={handleClose}>Logout</MenuItem>
						</Menu>
					</IconButton>
					<Button style={{ margin: '0 15px 0 0' }} color="inherit">
						Login
					</Button>
					<Button style={{ margin: '0 15px 0 0' }} variant="contained">
						Calendar
					</Button>
					<Button
						style={{ margin: '0 15px 0 0' }}
						variant="contained"
						color="secondary"
					>
						Run Service
					</Button>
				</Toolbar>
			</AppBar>
			<p className="description">
				Easy to implement. Not much is built in, like opening/closing menus or
				active item highlighting. Hover default looks pretty bad, will need to
				override CSS for colors.
			</p>
		</div>
	);
}
