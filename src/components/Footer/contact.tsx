import * as React from 'react';
import Box from '@mui/material/Box';
import { BoxProps } from '../../styles/types';
import { theme } from '../../styles/typo.tsx';

export function Contact(props: BoxProps) {
	return (
		<div
			style={{
				fontFamily: theme.typography.fontFamily,
				padding: '10px',
				color: 'white',
				background: '#90bedeff',
				display: 'flex',
				flexWrap: 'nowrap',
				flexDirection: 'column',
				justifyContent: 'flex-end',
				alignItems: 'baseline',
				position: 'fixed',
				width: '100%',
			}}>
			{props.children}
			<div>Claire de Berny</div>
			<div>clde-ber@student.42.fr</div>
			<div>06 74 39 00 46</div>
		</div>
	);
}
