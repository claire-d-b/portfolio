import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import MobileStepper from '@mui/material/MobileStepper';
import Button from '@mui/material/Button';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import { render } from 'mithril';
import mySvg from '../svg/ComponentWebsite.svg';
import { withTheme } from '@emotion/react';

export function PrintProject(titles, i) {
	return (
		<div
			style={{
				minWidth: '100px',
				maxWidth: '500px',
				height: '450px',
				paddingBlock: '10px',
				display: 'flex',
				flexDirection: 'column',
				color: '#90bedeff',
				background: 'white',
				padding: '10px',
				justifyContent: 'space-evenly',
				alignSelf: 'center',
			}}>
			<div
				style={{
					alignSelf: 'center',
					backgroundColor: '#68edc6ff',
					border: '0px',
					borderRadius: '10px',
					padding: '10px',
					color: 'white',
				}}>
				{titles[i].key}
			</div>
			<div style={{ width: '60%', alignSelf: 'center' }}>
				<div>{titles[i].readme}</div>
				<br></br>
				<a href={titles[i].ref} style={{ color: '#68edc6ff' }}>
					Clone repo.
				</a>
			</div>
		</div>
	);
}

export function ProjectsList() {
	const theme = useTheme();
	const [activeStep, setActiveStep] = React.useState(0);
	const [count, setCount] = React.useState(0);
	const handleNext = () => {
		setActiveStep((prevActiveStep) => prevActiveStep + 1);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};
	const titles = [
		{
			key: 'Lib',
			ref: 'https://github.com/claire-d-b/libft.git',
			readme:
				'Recoding functions of the C standard library. Mainly about string manipulation and memory usage. All functions are compiled into a library. Through that project I have been facing segmentation faults, and found ways to securely use computer memory.',
		},
		{
			key: 'Get_next_line',
			ref: 'https://github.com/claire-d-b/get_next_line.git',
			readme:
				'Creating a function that reads a line and returns 1 until it has read an entire document and returns 0. I can be achieved with stack or heap usage (strjoin, free, etc). ',
		},
		{
			key: 'ft_printf',
			ref: 'https://github.com/claire-d-b/ft_printf.git',
			readme:
				'Rewriting source code of printf function. That function receives as arguments different data types and outputs a formatted string.',
		},
		{
			key: 'Cub3D',
			ref: 'https://github.com/claire-d-b/cub3D_reviewed.git',
			readme:
				'Creating a graphics environment with floor, ceiling and walls. Its a 2D projects that renders 3D effect. The algorithm I used is a raymarching one.',
		},
		{
			key: 'Libasm',
			ref: 'https://github.com/claire-d-b/libasm.git',
			readme:
				'First assembly project, about re-coding functions of asm 86x64. Helps understanding better how variable are stored - registers - and the LIFO process.',
		},
		{
			key: 'Server',
			ref: 'https://github.com/claire-d-b/ft_server.git',
			readme:
				'Use of docker engine, to create a container hosting a website, a database and a nginx server. Aim is to learn how to build portable environment for devs to write code and test it.',
		},
		{
			key: 'Services',
			ref: 'https://github.com/claire-d-b/ft_services.git',
			readme:
				'Creating a cluster of containers with Google Kubernetes. Each pod hosts various services, from databases, web server, FTP server to website. Instead of being built from docker commands, pods are made alive by .yaml configurations files.',
		},
		{
			key: 'Minishell',
			ref: 'https://github.com/claire-d-b/minishell.git',
			readme:
				'Creating a simplified clone of a bash. Minishell executes builtin commands like echo and cd. It also understands shell commands like find or ls. It handles - more or less correctly - pipes [|] and instructions separators [;].',
		},
		{
			key: 'Push_Swap',
			ref: 'https://github.com/claire-d-b/push_swap.git',
			readme:
				'Finding an algoritm that sorts a stack with the lowest number of allowed operations. You are been given two stacks to help. Operations includes push, rotate and swap.',
		},
		{
			key: 'Philosophers',
			ref: 'https://github.com/claire-d-b/philosophers.git',
			readme:
				'There are philosophers aroud a table. There is a single fork between two pilosophers. How to lead them all through eating/sleeping/thinking phase without dying ? By working on threads & mutexes, this project make you understand how to use shared ressources.',
		},
		{
			key: 'C++',
			ref: 'https://github.com/claire-d-b/c_plus_plus.git',
			readme:
				'Overview of C++ concepts like classes, inheritance, constructors & destructors.',
		},
		{
			key: 'Containers',
			ref: 'https://github.com/claire-d-b/ft_containers.git',
			readme:
				"Recreating source code of C++ standard containers library : list, vector and map. Those containers' unity/elements can be access through iterators. The map one is interesting due to its being based on binary three which makes it rapid and efficient.",
		},
		{
			key: 'Webserver',
			ref: 'https://github.com/claire-d-b/webserv.git',
			readme:
				'A web server coded in C++, to serve a website that provides raw pages including error ones.',
		},
	];

	return (
		<div
			id="Projects"
			style={{
				backgroundImage: `url(${mySvg})`,
				background: 'contain repeat',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				padding: '10px',
			}}>
			<div>{PrintProject(titles, count)}</div>
			<MobileStepper
				variant="progress"
				steps={titles.length}
				position="static"
				activeStep={activeStep}
				sx={{
					display: 'flex',
					flexGrow: 1,
					border: '2px solid #e5e1eeff',
					alignSelf: 'center',
					maxWidth: '500px',
					minWidth: '200px',
					width: '100%',
				}}
				nextButton={
					<Button
						size="small"
						onClick={() => {
							handleNext();
							setCount(count + 1);
						}}
						disabled={activeStep === titles.length - 1}
						style={{ color: '#90bedeff' }}>
						Next
						{theme.direction === 'rtl' ? (
							<KeyboardArrowLeft />
						) : (
							<KeyboardArrowRight />
						)}
					</Button>
				}
				backButton={
					<Button
						size="small"
						onClick={() => {
							handleBack();
							setCount(count - 1);
						}}
						disabled={activeStep === 0}
						style={{ color: '#90bedeff' }}>
						{theme.direction === 'rtl' ? (
							<KeyboardArrowRight />
						) : (
							<KeyboardArrowLeft />
						)}
						Back
					</Button>
				}
			/>
		</div>
	);
}
