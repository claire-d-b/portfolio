import * as React from 'react';
import Box from '@mui/material/Box';
import { BoxProps } from '../../styles/types';
import { theme } from '../../styles/typo.tsx';

export function Div(props: BoxProps) {
	return (
		<Box
			sx={{
				fontFamily: theme.typography.fontFamily,
				padding: '8px',
				margin: 0,
				color: 'white',
				display: 'flex',
				justifyContent: 'center',
				backgroundColor: 'transparent',
			}}>
			{props.children}
		</Box>
	);
}
