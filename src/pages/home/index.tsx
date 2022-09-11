import * as React from 'react';
import { ImageAvatars } from '../../components/images/image.tsx';
import { LabelBottomNavigation } from '../../components/nav/navbar.tsx';
import { MyStack } from '../../components/stacks/stack.tsx';
import { MyGrid1 } from '../../components/Grids/Sections.tsx';
import { Div } from '../../components/divs/div.tsx';
import { Body } from '../../components/body/body.tsx';
import { Main } from '../../components/headers/header_main.tsx';
import { MyGrid2 } from '../../components/Grids/ProjectsSelection.tsx';
import { Contact } from '../../components/Footer/contact.tsx';
import wallpaper from '../../pages/images/wallpaper.jpg';
import mySvg from '../../components/svg/ComponentWebsite.svg';
import { ProjectsList } from '../../components/Grids/ProjectsList.tsx';

export function Page() {
	return (
		<Body>
			<Main>
				<MyStack stackDirection={{ xs: 'row', sm: 'column' }}>
					<Contact></Contact>
					<div
						style={{
							position: 'fixed',
							top: '68px',
							bottom: '56px',
							overflowY: 'scroll',
						}}>
						<div
							style={{
								top: '0px',
							}}>
							<div
								style={{
									display: 'flex',
									flexDirection: 'column',
									justifyContent: 'center',
								}}>
								<div
									style={{
										backgroundImage: `url(${mySvg})`,
										background: 'contain repeat',
										display: 'flex',
										justifyContent: 'center',
									}}>
									<ImageAvatars />
								</div>
							</div>
							<div
								style={{
									backgroundColor: '#68edc6ff',
									color: 'white',
									display: 'flex',
									justifyContent: 'center',
									padding: '10px',
								}}>
								claire db
							</div>
						</div>
						<div style={{ padding: '2.5%' }}>
							<MyGrid1></MyGrid1>
							<MyGrid2></MyGrid2>
							<ProjectsList></ProjectsList>
						</div>
					</div>
				</MyStack>
			</Main>
			<LabelBottomNavigation></LabelBottomNavigation>
		</Body>
	);
}

export default Page;
