import React from 'react';
import SingleStudent from './SingleStudent';

const SingleCampus = (props) => {
	console.log('name', props.students.name);
	return (
		<div>
			<h2>{props.campus.name}</h2>
			<ul>
				{props.students.map((student) => {
					return (
						<li key={student.name}>
							<SingleStudent student={student.name} />
						</li>
					);
				})}
			</ul>
		</div>
	);
};

export default SingleCampus;
//not sure why I cant access student.name => returning undefined
