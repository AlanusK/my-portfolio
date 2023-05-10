import React from 'react';
import skillsData from './skillsdata';

export const Skills = () => {

	const SkillCard = (props) => {
		return (
			<div className='h-28 w-32 m-2 flex flex-col items-center justify-center p-4 bg-black-darkest text-center'>
				<img
					style={{ background: `${props.bg}` }}
					src={props.imageUrl}
					alt={props.title}
					width='70%'
					height='auto'
				/>
				<p className='mt-2 text-xs'>{props.title}</p>
			</div>
		);
	};

	const OtherSkillCard = (props) => {
		return (
			<div className='h-20 min-w-full xs:min-w-fit  xs:w-full mx-12 my-2 flex items-center justify-center p-4 bg-black-darkest text-center rounded-2xl'>
				<h5 className='mb-2 font-black tracking-tight'>{props.title}</h5>
			</div>
		);
	};

	return (
		<div className='w-full'>
			<div className='py-4'>
				<h2 className='my-6 text-secondary-default flex'>Web & mobile skills&nbsp;<span>💻📱</span></h2>
				<div className='flex flex-wrap items-center justify-center'>
					{skillsData.map(item => <SkillCard title={item.skillName} imageUrl={item.imageUrl} bg={item.bg} key={item.skillName} />)}
				</div>
			</div>
			<div className='py-4'>
				<h2 className='my-6 text-secondary-default'>Other skills</h2>
				<div className='flex flex-wrap items-center justify-center'>
					<OtherSkillCard title='Project Management' />
					<OtherSkillCard title='Problem Solving' />
					<OtherSkillCard title='Team work' />
				</div>
			</div>
		</div>
	)
}
