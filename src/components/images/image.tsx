import { Avatar } from '@mui/material';
import * as React from 'react';
import profilpic from '../../pages/images/clairedb.jpeg';

export function ImageAvatars() {
	return (
		<div style={{ padding: '10px' }}>
			<Avatar
				alt="clairedb"
				src={profilpic}
				sx={{
					width: '200px',
					height: '200px',
					margin: '0px',
					border: '2px solid white',
				}}
			/>
		</div>
	);
}
