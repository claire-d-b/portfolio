import * as React from 'react';
import Box from '@mui/material/Box';
import { BoxProps } from '../../styles/types';

export function Main(props: BoxProps) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'stretch',
				padding: 0,
				margin: 0,
				height: '100%',
				width: '100%',
				backgroundColor: 'transparent',
				justifyContent: 'center',
			}}>
			{props.children}
		</Box>
	);
}
