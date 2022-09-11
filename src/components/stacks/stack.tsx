import * as React from 'react';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export function MyStack({ stackDirection, style, children }) {
	return (
		<Stack
			sx={{
				margin: 0,
				padding: 0,
			}}
			direction={{ xs: 'column', sm: 'column' }}
			spacing={{ xs: 1, sm: 1, md: 1 }}
			fontFamily="Roboto"
			divider={<Divider orientation="vertical" flexItem />}>
			{children}
		</Stack>
	);
}
