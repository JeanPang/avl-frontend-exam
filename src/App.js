import React from 'react';
import styled from 'styled-components';
import PercentageCircle from './Components/PercentageCircle/index';

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
	padding: 10px;
`;
// 	border: solid 1px yellow;


const Test = styled.div`
	background: #232529;
	width: 100%;
`;

const SideBarItem = styled.div`
	color: #fff;
	margin-left: 30px;
`;
	// border: solid 1px pink;

// padding: 10px;
// margin: 30px 10px;

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
						strokeWidth={3}
						primaryColor= {['#3887c7', '#76d0eb', '#8cdce7']}
						fontColor='#fff'
					/>
				</PercentageCircleWrapper>
				<SideBarProblem title="COMPLETED" no="100"/>
				<SideBarProblem title="CORRECT" no="75"/>
			</SideBar>
			<Test>something</Test>
		</Wrapper>

	);
}

export default App;
