import * as React from 'react';
import { BottomNavigation, BottomNavigationAction } from '@mui/material';
import AttachFileIcon from '@mui/icons-material/AttachFile';
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import GrassIcon from '@mui/icons-material/Grass';
import { Link } from 'react-router-dom';

export function LabelBottomNavigation() {
	const [value, setValue] = React.useState('recents');

	const handleChange = (event: React.SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<BottomNavigation
			sx={{
				position: 'fixed',
				bottom: '0px',
				width: '100%',
			}}
			value={value}
			onChange={handleChange}>
			<BottomNavigationAction
				label="Home"
				value="Home"
				icon={<HomeIcon />}
				href="/"
			/>
			<BottomNavigationAction
				label="About me"
				value="About me"
				icon={<PersonIcon />}
				href="#AboutMe"
			/>
			<BottomNavigationAction
				label="Pillars"
				value="Pillars"
				icon={<GrassIcon />}
				href="#Pillars"
			/>
			<BottomNavigationAction
				label="Projects"
				value="Projects"
				icon={<AttachFileIcon />}
				href="#Projects"
			/>
		</BottomNavigation>
	);
}
