import * as React from 'react';
import Box from '@mui/material/Box';
import { BoxProps } from '../../styles/types';
import { theme } from '../../styles/typo.tsx';

export function Body(props: BoxProps) {
	return (
		<Box
			sx={{
				fontFamily: theme.typography.fontFamily,
				width: '100%',
				height: '100%',
				margin: '0px',
				padding: '0px',
				color: 'white',
			}}>
			{props.children}
		</Box>
	);
}
