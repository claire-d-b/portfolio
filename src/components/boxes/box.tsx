import * as React from 'react';
import Box from '@mui/material/Box';
import { BoxProps } from '../../styles/types';

export function BoxSx(props: BoxProps) {
	return (
		<Box
			sx={{
				height: 1,
			}}>
			{props.children}
		</Box>
	);
}
