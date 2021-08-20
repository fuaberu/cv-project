import React from 'react';
import TextEntrie from './smallComponents/TextEntrie';
import EmailEntrie from './smallComponents/EmailEntrie';
import DateEntrie from './smallComponents/DateEntrie';
import TextInput from './TextInput';

function Input(props) {
	return (
		<div className="input-container">
			<div className="personal-information">
				<h2>Personal information</h2>

				<TextInput text="nqwjnbjabixbk" />
				<TextEntrie question="Name" idName="name" inputChange="" />
				<TextEntrie question="Job position" idName="job-position" />
				<DateEntrie dateType="Birth date" idName="birth-date" />
				<TextEntrie question="Location" idName="location" />
				<EmailEntrie idName="email" />
			</div>
			<div className="work-experience">
				<h2>Work experience</h2>
				<TextEntrie question="Job" idName="job" />
				<TextEntrie question="Company Name" idName="company-name" />
				<DateEntrie dateType="Begining Date" idName="date" />
				<DateEntrie dateType="End Date" idName="birth-date" />
				<TextEntrie question="Location" idName="Work-location" />
				<TextEntrie question="Description" idName="description" />
				<button type="submit">Add</button>
			</div>
			<div className="Education">
				<h2>Education</h2>
				<TextEntrie question="Degree" idName="degree" />
				<TextEntrie question="Institution name" idName="institution" />
				<DateEntrie dateType="Begining Date" idName="education-date-begin" />
				<DateEntrie dateType="End Date" idName="education-date-end" />
				<TextEntrie question="Location" idName="study-location" />
				<TextEntrie question="Description" idName="education-description" />
				<button type="submit">Add</button>
			</div>
			<div className="Skills">
				<h2>Skills</h2>
				<TextEntrie question="Skill" idName="skill" />
				<button type="submit">Add</button>
			</div>
		</div>
	);
}

export default Input;
