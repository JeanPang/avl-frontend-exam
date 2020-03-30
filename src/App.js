import React from 'react';
import ProblemPage from './Pages/ProblemPage';
import paneImage from './static/images/question-pic.png';

const data = {
	user: {
		completed: 100,
		correct: 75,
	},
	categories: 'Arithmetic',
	subCategories: 'Real Problem',	
	paneText: 'The recommended daily calcium intake for a 20-year-old is 1,000 milligrams (mg). One cup of milk contains 299 mg of calcium and one cup of juice contains 261 mg of calcium. Which of the following inequalities represents the possible number of cups of milk m and cups of juice j a 20-year-old could drink in a day to meet or exceed the recommended daily calcium intake from these drinks alone?',
	paneImage: paneImage,
	tags: [{
			text: 'Tag A',
			level: 1,
		},{
			text: 'Tag B',
			level: 2,
		}, {
			text: 'Tag B',
			level: 3,
		}
	],
};

const App = () => {
	return (
		<ProblemPage data={data}/>
	);
}

export default App;
