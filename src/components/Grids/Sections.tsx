import * as React from 'react';
import Grid from '@mui/material/Unstable_Grid2';
import Box from '@mui/material/Box';

export function MyGrid1() {
	const titles = [
		{
			onhover:
				'My main inspiration for web design comes from the CSS flexbox sheet',
			key: 'About me',
			data: 'I am a 42 student. From marketing I switched to computer science in the field of web front. I am experiencing React js with MUI component library...',
		},
		{
			onhover:
				'I think working on memory-based languages helps understanding types & data structures',
			key: 'Languages',
			data: 'I have knowledge in shell, C & C++, javascript & typescript with framework mithril js. I am currently learning how to use react to customize a website...',
		},
		{
			onhover:
				'I try to RTFM, I try to make pseudo-code, I like writing algorithms, what I focus on is testing',
			key: 'Projects',
			data: 'Among projects I have been trough, there is : Cub3D - a raycaster, Push swap - a sorting algorithm, Philosophers - a project based on multithreading...',
		},
	];
	return (
		<Box sx={{ flexGrow: 1 }} id="AboutMe">
			<Grid
				container
				sx={{ margin: '10px' }}
				spacing={{ xs: 2, md: 3 }}
				columns={{ xs: 1, sm: 3, md: 3 }}>
				{Array.from(Array(3)).map((_, index) => (
					<Grid
						xs={1}
						sm={true}
						md={true}
						key={index}
						sx={{
							'.text': {
								display: 'none',
							},
							'&:hover': {
								'.text': {
									display: 'block',
									backgroundColor: '#90bedeff',
									padding: '10px',
									borderRadius: '10px',
								},
							},
						}}>
						<div>
							<Box>
								<div
									style={{
										textAlign: 'left',
										backgroundColor: '#90bedeff',
										padding: '10px',
										borderRadius: '10px',
									}}>
									{titles[index].key}
								</div>
								<div
									style={{
										color: '#90bedeff',
										textAlign: 'left',
										padding: '10px',
										borderRadius: '10px',
									}}>
									{titles[index].data}
								</div>
							</Box>
						</div>
						<div
							className="text"
							style={{ backgroundColor: '#e5e1eeff', color: '#90bedeff' }}>
							{titles[index].onhover}
						</div>
					</Grid>
				))}
			</Grid>
		</Box>
	);
}
