import React from 'react';
import styled from 'styled-components';
import PercentageCircle from './Components/PercentageCircle/index';
import paneImage from './static/images/question-pic.png';

const Wrapper = styled.div`
	display: flex;
`;

const SideBar = styled.div`
	background: #1c1d1f;
	@media (min-width: 576px) {
		width: 350px;
	}
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: left;
	padding: 40px 10px;
`;

const PercentageCircleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const SideBarItem = styled.div`
	color: #fff;
	margin: 40px 40px 0px 40px;
`;

const ItemTitle = styled.div`
	font-size: 14px;
	color: lightgray;
`;

const ItemNo = styled.span`
	font-size: 40px;
	font-weight: 700;
	letter-spacing: 2px;
`;

const ItemText = styled.span`
	font-size: 14px;
	color: gray;
	font-weight: 700;
`;

const Page = styled.div`
	background: #232529;
	width: 100%;
	color: #fff;
`;

const SelectorBar = styled.div`
	display: flex;
	padding: 10px 90px;
	margin: 10px 80px;
`;

const SimpleSelector = styled.div`
	border: solid 1px #fff;
	padding: 10px 20px;
	margin: 5px;
	border-radius: 100px;
	font-size: 15px;
`;

const MainPane = styled.div`
	margin: 10px 80px;
	padding: 10px 90px;
	border-radius: 20px;
	box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.4);
`;

const PaneTitle = styled.div`
	padding: 20px 0px;
	border-bottom: solid 2px rgba(256,256,256,0.2);
	color: orange;
	font-weight: 900;
	letter-spacing: 1px;
`;

const PaneText = styled.div`
	padding: 20px 0px;
`;

const PaneImage = styled.img`
	border-radius: 20px;
  object-fit: cover;
`;

const PaneContent = styled.div`
	display: flex;
`;

const PaneContentLeft = styled.div`
	width: 520px;
`;

const PaneContentRight = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const NumbersEntryBox = styled.div`
	display: flex;
	flex-direction: row;
`;

const NumbersEntryBoxInput = styled.div`
	border: solid 1px rgba(256,256,256,0.2);
	width: 70px;
	height: 70px;
	border-radius: 10px;
	margin: 5px;
`;

const SideBarProblem = props => {
	const {title, no} = props;
	return (
		<SideBarItem>
			<ItemTitle>{title}</ItemTitle>
			<ItemNo>{no}</ItemNo>
			<ItemText>&nbsp;PROBLEMS</ItemText>
		</SideBarItem>
	);
};

function App() {
	return (
		<Wrapper>
			<SideBar>
				<PercentageCircleWrapper>
					<PercentageCircle
						percentage={75}
						strokeWidth={2.5}
						primaryColor= {['#3887c7', '#76d0eb', '#8cdce7']}
						fontColor='#fff'
					/>
				</PercentageCircleWrapper>
				<SideBarProblem title="COMPLETED" no="100"/>
				<SideBarProblem title="CORRECT" no="75"/>
			</SideBar>
			<Page>
				<SelectorBar>
					<SimpleSelector>Topics</SimpleSelector>
					<SimpleSelector>Topics</SimpleSelector>
					<SimpleSelector>Topics</SimpleSelector>
				</SelectorBar>
				<MainPane>
					<PaneTitle>Arithmetic</PaneTitle>
					<PaneContent>
						<PaneContentLeft>
							<PaneText>The recommended daily calcium intake for a 20-year-old is 1,000 milligrams (mg). One cup of milk contains 299 mg of calcium and one cup of juice contains 261 mg of calcium. Which of the following inequalities represents the possible number of cups of milk m and cups of juice j a 20-year-old could drink in a day to meet or exceed the recommended daily calcium intake from these drinks alone?</PaneText>
							<PaneImage src={paneImage} />
						</PaneContentLeft>
						<PaneContentRight>
							<NumbersEntryBox>
								<NumbersEntryBoxInput></NumbersEntryBoxInput>
								<NumbersEntryBoxInput></NumbersEntryBoxInput>
								<NumbersEntryBoxInput></NumbersEntryBoxInput>
								<NumbersEntryBoxInput></NumbersEntryBoxInput>
							</NumbersEntryBox>
						</PaneContentRight>
					</PaneContent>
				</MainPane>
			</Page>
		</Wrapper>
	);
}

export default App;
