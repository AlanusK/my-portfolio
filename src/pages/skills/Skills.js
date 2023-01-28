import React from 'react';
import { FaReact } from 'react-icons/fa'

export const Skills = () => {

	const SkillCard = (props) => {
		return (
			<div className="h-24 w-28 m-2 flex flex-col items-center justify-center p-4 bg-black-default text-center">
				<img
					src={props.imageUrl}
					alt={props.title}
					width='70%'
					height='auto'
				/>
				<p className="mt-2 text-xs">{props.title}</p>
			</div>
		);
	};

	return (
		<div className='w-full'>
			<h2 className='my-6 text-secondary-default'>Web and mobile skills 💻📱</h2>
			<div className='flex flex-wrap items-center justify-between'>
				<SkillCard title='REACTJS' imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
				<SkillCard title='REACT NATIVE' imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
				<SkillCard title='JAVASCRIPT' imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
				<SkillCard title='HTML' imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
				<SkillCard title='CSS' imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
				<SkillCard title='REDUX' imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
				<SkillCard title='REACTJS' imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
				<SkillCard title='REACTJS' imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
				<SkillCard title='REACTJS' imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
				<SkillCard title='REACTJS' imageUrl='https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' />
			</div>
		</div>
	)
}
