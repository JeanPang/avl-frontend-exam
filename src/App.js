import React from 'react';
import styled from 'styled-components';
import PercentageCircle from './Components/PercentageCircle/index';
import paneImage from './static/images/question-pic.png';
import { useRef, useEffect } from 'react';
import DropdownAccordion from './Components/DropdownAccordion';
import Dropdown from './Components/Dropdown';
import './icon.css';

const Wrapper = styled.div`
	font-family: Calibri;
	width: 100%;
	display: flex;
	flex-direction: row;
	@media (max-width: 576px) {
		flex-direction: column;
	}
`;

const SideBar = styled.div`
	background: #1c1d1f;
	display: flex;
	flex-direction: column;
	align-items: left;
	padding-top: 40px;
	width: 340px;
	@media (max-width: 576px) {
		width: 100%;
		flex-direction: row;
		padding: 20px 0px;
		justify-content: center;
	}
`;

const PercentageCircleWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const SideBarProblem = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (max-width: 576px) {
		margin-top: 20px;
	}
`;

const SideBarItemWrapper = styled.div`
	color: #fff;
	margin: 40px 40px 0px 40px;
	@media (max-width: 576px) {
		margin: 10px 10px 20px 40px;
	}
`;

const ItemTitle = styled.div`
	font-size: 14px;
	color: lightgray;
`;

const ItemNo = styled.span`
	font-size: 40px;
	font-weight: 700;
	letter-spacing: 2px;
	@media (max-width: 576px) {
		font-size: 30px;
	}
`;

const ItemText = styled.span`
	font-size: 14px;
	color: gray;
	font-weight: 700;
`;

const SelectorBar = styled.div`
	display: flex;
	margin: 10px 82px;
	padding: 10px 95px;	
	@media (max-width: 1200px) {
		margin: 10px 55px;
		padding: 10px 55px;
	}
	@media (max-width: 576px) {
		margin: 0px;
		padding: 0px;
	}
`;

const Page = styled.div`
	background: #232529;
	color: #fff;
	width: 100%;
	padding-bottom: 400px;
	@media (max-width: 1200px) {
		padding-bottom: 200px;
	}
	@media (max-width: 576px) {
		padding-bottom: 0px;
	}
`;

const MainPane = styled.div`
	border-radius: 20px;
	box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.4);
	margin: 10px 82px;
	padding: 10px 95px;	
	@media (max-width: 1200px) {
		margin: 10px 55px;
		padding: 10px 55px;
	}
	@media (max-width: 576px) {
		margin: 10px 10px;
		padding: 10px 30px;
	}	
`;

const PaneTitle = styled.div`
	padding: 20px 0px;
	border-bottom: solid 2px rgba(256,256,256,0.2);
	color: #fff;
	font-weight: 900;
	letter-spacing: 1px;
`;

const TitleText = styled.span`
	color: #f5bc41;
`;

const PaneText = styled.div`
	padding: 20px 0px;
	max-width: 510px;
	font-size: 15.5px;
`;

const PaneImage = styled.img`
	border-radius: 20px;
	object-fit: cover;
	width: 100%;
`;

const PaneContent = styled.div`
	display: flex;
	flex-direction: row;
	@media (max-width: 1200px) {
		flex-direction: column;
	}
	@media (max-width: 576px) {
		align-items: center;
	}
`;

const PaneContentLeft = styled.div`
	max-width: 510px;
`;

const PaneContentRight = styled.div`
	padding: 10px;
	margin-left: 15px;
	@media (max-width: 1200px) {
		margin-left: 0px;
		padding: 6px;
		max-width: 325px;
	}
`;

const NumbersEntryBox = styled.form`
	display: flex;
	padding-top: 20px;
	@media (max-width: 576px) {
		padding-top: 0px;
	}
`;

const InputBorder = styled.div`
	margin: 3px;
	padding: 2px;
	border-radius: 10px;
	background: rgba(256,256,256,0.1);
	display: flex;
	justify-content: center;
	align-items: center;
`;

const BoxInputWrapper = styled.div`
	width: 68px;
	height: 68px;
	background: #2d2e34;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 10px;
`;

const BoxInput = styled.input`
	border: none;
	border-bottom: solid 1px #fff;
	background: #2d2e34;
	width: 30px;
	height: 40px;
	padding-bottom: 5px;
	margin-bottom: -5px;
	color: #59bcbe;
	font-size: 40px;
	text-align: center;
	font-weight: 900;
	&::placeholder {
		color: rgba(256,256,256,0.05)
	}
	&:focus {
		outline: none;
		&::placeholder {
			color: transparent;
		}
	}
`;

const PressEnter = styled.div`
	color: rgba(256,256,256,0.3);
	display: flex;
	justify-content: flex-end;
	margin-top: 10px;
	font-size: 15px;
	display: none;
`;

const Enter = styled.div`
	color: #fff;
	font-weight: 900;
	display: flex;
	flex-direction: row;
`;

const EnterIcon = styled.div`
	padding-top: 2px;
`;

const IconCalculator = styled.span`
	margin-right: 10px;
`;

const TagRow = styled.div`	
	display: flex;
	flex-direction: row;
	margin: 20px 0px;
	font-size: 14px;
	font-weight: 600;
`;

const TagPriority = styled.div`
	margin-left: 8px;
	padding: 6px 12px;
	border-radius: 5px;
	background: linear-gradient(to left, rgba(124, 211, 221,${props => props.transparency}), rgba(101, 189, 218,${props => props.transparency}), rgba(68, 152, 212,${props => props.transparency}));
	cursor: pointer;
`;

const ButtonSubmitRow = styled.div`
	display: flex;
	justify-content: flex-end;
	margin-bottom: 20px;
	@media (max-width: 1200px) {
		margin-top: 60px;
	}
	@media (max-width: 576px) {
		align-items: center;
		flex-direction: column;
	}
`;

const ButtonBorder = styled.div`
	background: linear-gradient(to left, #75b3b6, #3376ad);
	padding: 2px;
	border-radius: 50px;
	display: inline-block;
	margin-left: 20px;
	&:hover {
		cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
	}
	position: relative;
	@media (max-width: 576px) {
		margin-bottom: 20px;
	}
`;

const ButtonText = styled.div`
	padding: 8px;
	width: 135px;
	text-align: center;
	border-radius: 50px;
	font-weight: 500;
	font-size: 16px;
	display: inline-block;
	background: ${({ bgFill }) => (bgFill ? 'none' : '#232529')};
`;

const SideBarItem = props => {
	const {title, no} = props;
	return (
		<SideBarItemWrapper>
			<ItemTitle>{title}</ItemTitle>
			<ItemNo>{no}</ItemNo>
			<ItemText>&nbsp;PROBLEMS</ItemText>
		</SideBarItemWrapper>
	);
};

function Input(props) {
	const {placeholder, inputCurrent, inputNext, autofocus, input1, id} = props;
	
	const wrapperRef = useRef(null);

	const onFocus = (e) => {
		e.select();
		e.parentElement.parentElement.style.background = 'linear-gradient(to left, #75b3b6, #3376ad)';
		e.parentElement.parentElement.style.boxShadow = '1px 1px 10px rgba(140, 220, 231, 0.2)';
	};

	const onBlur = (e) => {
		e.parentElement.parentElement.style.background = 'rgba(256,256,256,0.1)';
		e.parentElement.parentElement.style.boxShadow = 'none';
	};

	const onFocusNext = (e, inputNext) => {
		if (((e.keyCode < 48 || e.keyCode > 57) && e.keyCode!==190 && e.keyCode!==191)=== false) {
			if (e.target.value.length === 1) {
				e.target.style.borderBottom = 'transparent';
			}

			if (e.target.value.length === 0) {
				e.target.style.borderBottom = 'solid 1px #fff';
			}

			if (inputNext !== '') {
				inputNext.current.focus();
				inputNext.current.select();
			}
		}

		const formElement = e.target.parentElement.parentElement.parentElement;
		const inputValue1 = formElement.childNodes[0].childNodes[0].childNodes[0].value;
		const inputValue2 = formElement.childNodes[1].childNodes[0].childNodes[0].value;
		const inputValue3 = formElement.childNodes[2].childNodes[0].childNodes[0].value;
		const inputValue4 = formElement.childNodes[3].childNodes[0].childNodes[0].value;
		const pressEnterReminder = e.target.parentElement.parentElement.parentElement.parentElement.childNodes[1];
		const submitBtn = document.getElementById('submitBtn').childNodes[0];

		if (inputValue1 !== '' && inputValue2 !== '' && inputValue3 !== '' && inputValue4 !== '') {
			pressEnterReminder.style.display = 'flex';
			submitBtn.style.cursor = 'pointer';
			submitBtn.classList.remove('disabled-btn');
		}
	};

	const onKeyDown = (e) => {
		if ((e.keyCode < 48 || e.keyCode > 57) && e.keyCode!==190 && e.keyCode!==191) {
			e.preventDefault();
		}
	};

	const useOutsideAlerter = (ref) => {	
		useEffect(() => {
			const handleClickOutside = (event) => {
				if (ref.current && !ref.current.contains(event.target)) {
					onFocus(input1.current);
				}
			};

			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [ref]);
	};

	useOutsideAlerter(wrapperRef);

	return (
		<InputBorder ref={wrapperRef}>
			<BoxInputWrapper>
				<BoxInput
					id={id}
					placeholder={placeholder}
					maxLength="1"
					ref={inputCurrent}
					onFocus={(e) => onFocus(e.target)}
					onBlur={(e) => onBlur(e.target)}
					onKeyUp={(e) => onFocusNext(e, inputNext)}
					onKeyDown={(e) => onKeyDown(e)}
					onMouseDown={(e) => e.preventDefault()}
					autoFocus={autofocus}/>
			</BoxInputWrapper>
		</InputBorder>
	);
}

const Tag = props => {
	const {level, text} = props;
  return (
			<TagPriority transparency={level}>
				{text}
			</TagPriority>
  )
}

const Button = props => {
	const {text, bgFill, displayNone, id, disabled} = props;
  return (
		<ButtonBorder disabled={disabled} displayNone={displayNone} id={id}>
			<ButtonText bgFill={bgFill} className={`${disabled ? 'disabled-btn' : ''}`}>{text}</ButtonText>
		</ButtonBorder>
  );
};

function App() {
	const input1 = useRef(null);
	const input2 = useRef(null);
	const input3 = useRef(null);
	const input4 = useRef(null);

	const level = {
		1: '1',
		2: '0.5',
		3: '0.2',
	}

	const accordionOptions = [
		{
			item: 'All Topics',
		}
		,
		{
			item: 'Algebra',
			subItems: [
				'Subtopic', 'Subtopic'
			],
		},
		{
			item: 'Geometry',
			subItems: [
				'Subtopic'
			],
		}
		,
		{
			item: 'Trignometry',
			subItems: [
				'Subtopic', 'Subtopic', 'Subtopic'
			],
		},
		{
			item: 'Arithmetic',
			subItems: [
				'Subtopic', 'Subtopic'
			],
		},
	];

	const simpleOptions = [
		{
			item: 'All Topics',
		}
		,
		{
			item: 'Algebra',
		},
		{
			item: 'Geometry',
		}
		,
		{
			item: 'Trignometry',
		},
		{
			item: 'Arithmetic',
		},
	];

	return (
		<Wrapper>
			<SideBar>
				<PercentageCircleWrapper>
					<PercentageCircle
						percentage={100}
						strokeWidth={2.5}
						primaryColor= {['#3887c7', '#76d0eb', '#8cdce7']}
						fontColor='#fff'
					/>
				</PercentageCircleWrapper>
				<SideBarProblem>
					<SideBarItem title="COMPLETED" no="100"/>
					<SideBarItem title="CORRECT" no="75"/>
				</SideBarProblem>
				
			</SideBar>
			<Page>
				<SelectorBar>
					<DropdownAccordion dropdownOptions={accordionOptions}/>
					<Dropdown dropdownOptions={simpleOptions}/>
				</SelectorBar>
				<MainPane>
					<PaneTitle>
						<IconCalculator className='icon-show-sm icon-calc'/>
						<TitleText>Arithmetic</TitleText>
						&nbsp;∙&nbsp;
						<TitleText>Real Problem</TitleText>
					</PaneTitle>
					<PaneText>The recommended daily calcium intake for a 20-year-old is 1,000 milligrams (mg). One cup of milk contains 299 mg of calcium and one cup of juice contains 261 mg of calcium. Which of the following inequalities represents the possible number of cups of milk m and cups of juice j a 20-year-old could drink in a day to meet or exceed the recommended daily calcium intake from these drinks alone?</PaneText>
					<PaneContent>
						<PaneContentLeft>
							<PaneImage src={paneImage}/>
							<TagRow>
								<Tag level={level[1]} text='Tag A'/>
								<Tag level={level[2]} text='Tag B'/>
								<Tag level={level[3]} text='Tag B'/>
							</TagRow>
						</PaneContentLeft>
						<PaneContentRight>
							<NumbersEntryBox>
								<Input 
									id="1"
									placeholder="1"
									inputCurrent={input1}
									inputNext={input2}
									autofocus
									input1={input1}
								/>
								<Input
									id="2"
									placeholder="2"
									inputCurrent={input2}
									inputNext={input3}
									input1={input1}
								/>
								<Input 
									id="3"
									placeholder="3"
									inputCurrent={input3}
									inputNext={input4}
									input1={input1}
								/>
								<Input 
									id="4"
									placeholder="4"
									inputCurrent={input4}
									inputNext={''}
									input1={input1}
								/>
							</NumbersEntryBox>
							<PressEnter>
								Press 
								<Enter>&nbsp;Enter&nbsp;<EnterIcon>↵</EnterIcon></Enter>
							</PressEnter>
						</PaneContentRight>
					</PaneContent>
					<ButtonSubmitRow>
						<Button text='Skip'/>
						<Button text='Submit' bgFill id={'submitBtn'} displayNone disabled/>
					</ButtonSubmitRow>
				</MainPane>
			</Page>
		</Wrapper>

	);
}

export default App;
