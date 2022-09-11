import GroupsIcon from '@mui/icons-material/Groups';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import ViewInArIcon from '@mui/icons-material/ViewInAr';
import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';
import { svgOne } from '../svg/component1.tsx';
import { svgTwo } from '../svg/component2.tsx';
import { svgThree } from '../svg/component3.tsx';
import { theme } from '../../styles/typo.tsx';

export function ActionClick(props) {
	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				alignContent: 'center',
			}}>
			<div
				className="svg"
				style={{
					display: 'none',
				}}>
				{props.value()}
			</div>
			<a
				className="link"
				color="#90bedeff"
				style={{
					visibility: 'hidden',
					color: 'white',
					textAlign: 'left',
					padding: '10px',
					fontFamily: theme.typography.fontFamily,
					textDecoration: 'none',
				}}
				href={props.reference}>
				Clone repository
			</a>
		</div>
	);
}

export function MyGrid2() {
	const titles = [
		{
			key: 'Push swap',
			icon: (
				<EqualizerIcon
					sx={{
						color: 'white',
					}}
				/>
			),
			content:
				'That project deals with sorting algorithm. Aim is to find the best way to sort numbers by handling operations in two separate stacks...',
			value: svgThree,
			reference: 'https://github.com/claire-d-b/push_swap.git',
		},
		{
			key: 'Philosophers',
			icon: (
				<GroupsIcon
					sx={{
						color: 'white',
					}}
				/>
			),
			content:
				'Philo is about creating an agorithm so that running tasks can share ressources without exiting...',
			value: svgOne,
			reference: 'https://github.com/claire-d-b/philosophers.git',
		},
		{
			key: 'Cub3D',
			icon: (
				<ViewInArIcon
					sx={{
						color: 'white',
					}}
				/>
			),
			content:
				'It is a graphics one based on raycasting algorithm. I am using a C graphics library to serve C++ code. Fixed point numbers are used in calculations...',
			value: svgTwo,
			reference: 'https://github.com/claire-d-b/cub3D_reviewed.git',
		},
	];
	return (
		<Box sx={{ flexGrow: 1 }} id="Pillars">
			<Grid
				container
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 1, sm: 3, md: 3 }}>
				{Array.from(Array(3)).map((_, index) => (
					<Grid
						xs={1}
						sm={true}
						md={true}
						key={index}
						sx={{
							display: 'flex',
							flexDirection: 'column',
							justifyContent: 'space-between',
							backgroundColor: '#90bedeff',
							border: '0px',
							borderRadius: '10px',
							margin: '40px',
							'&:hover': {
								'.svg': {
									display: 'flex !important',
									visibility: 'visible',
								},
								'.front': {
									display: 'none',
								},
								'.link': {
									color: 'white !important',
									visibility: 'visible !important',
								},
								'&>div': {
									visibility: 'hidden',
								},
							},
						}}>
						<div className="front">
							{titles[index].icon}
							<div>
								<Box
									sx={{
										textAlign: 'left',
										color: 'white',
										padding: '10px',
									}}>
									{titles[index].key}
								</Box>
								<div
									style={{
										color: 'white',
										textAlign: 'left',
										padding: '10px',
									}}>
									{titles[index].content}
								</div>
							</div>
						</div>
						<ActionClick
							value={titles[index].value}
							reference={titles[index].reference}
						/>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
