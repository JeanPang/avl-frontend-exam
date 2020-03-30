import React from 'react';
import styled from 'styled-components';
import PercentageCircle from './../Components/PercentageCircle/index';
import CheckboxSelector from './../Components/CheckboxSelector';
import SimpleSelector from './../Components/SimpleSelector';
import MultipleSelector from './../Components/MultipleSelector';
import NumbersEntryBox from './../Components/NumbersEntryBox';
import './../icon.css';
import { Theme } from './../Theme';

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
	align-items: center;
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

const SideBarItemWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	@media (max-width: 576px) {
		margin-top: 20px;
	}
`;

const ItemWrapper = styled.div`
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
	justify-content: flex-start;
	flex-wrap: wrap;
`;

const Page = styled.div`
  background: ${props => props.theme.background};
	color: #fff;
	width: 100%;
	padding-bottom: 150px;
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

const Title = styled.span`
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
  font-size: 14px;
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

const ButtonRow = styled.div`
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
  background: ${props => props.theme.main};
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
  ${props => !props.submit && ({
    background: props.theme.background,
  })}
`;

const SideBarItem = props => {
	const {title, no} = props;
	return (
		<ItemWrapper>
			<ItemTitle>{title}</ItemTitle>
			<ItemNo>{no}</ItemNo>
			<ItemText>&nbsp;PROBLEMS</ItemText>
		</ItemWrapper>
	);
};

const Tag = props => {
  const {level, text} = props;
  let transparency;

  switch (level) {
    case 1:
      transparency = '1';
      break;
    case 2:
      transparency = '0.5';
      break;
    case 3:
      transparency = '0.2';
      break;
    default:
      break;
  }

  return (
			<TagPriority transparency={transparency}>
				{text}
			</TagPriority>
  )
}
const PressEnterReminder = () => {
  return (
    <PressEnter>
      Press 
      <Enter>&nbsp;Enter&nbsp;<EnterIcon>↵</EnterIcon></Enter>
    </PressEnter>
  )
}

const Button = props => {
	const {text, submit, id, disabled} = props;
  return (
		<ButtonBorder disabled={disabled} id={id}>
			<ButtonText submit={submit} className={`${disabled ? 'disabled-btn' : ''}`}>{text}</ButtonText>
		</ButtonBorder>
  );
};

const checkboxOptions = [
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
      'ArithmeticSubtopi1', 'ArithmeticSubtopic2'
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

const multipleOptions = [
  {
    item: 'Calculator',
    options: ['All', 'Calculator', 'No Calculator']
  }
  ,
  {
    item: 'Answer Type A',
    options: ['All', 'Multiple Choice', 'Grid In']
  },
  {
    item: 'Answer Type B',
    options: ['All', 'Contains chart', 'No chart']
  }
  ,
  {
    item: 'Problem Length',
    options: ['All', 'Short', 'Long']
  },
];




const ProblemPage = (props) => {
  const { data } = props;

	return (
    <Theme>
      <Wrapper>
        <SideBar>
          <PercentageCircleWrapper>
            <PercentageCircle
              percentage={Math.round((data.user.correct/data.user.completed)*100)}
              strokeWidth={2.5}
              primaryColor= {['#3887c7', '#76d0eb', '#8cdce7']}
              fontColor='#fff'
            />
          </PercentageCircleWrapper>
          <SideBarItemWrapper>
            <SideBarItem title="COMPLETED" no={data.user.completed}/>
            <SideBarItem title="CORRECT" no={data.user.correct}/>
          </SideBarItemWrapper>
        </SideBar>
        <Page>
          <SelectorBar>
            <CheckboxSelector dropdownOptions={checkboxOptions}/>
            <SimpleSelector dropdownOptions={simpleOptions}/>
            <MultipleSelector dropdownOptions={multipleOptions}/>
          </SelectorBar>
          <MainPane>
            <PaneTitle>
              <IconCalculator className='icon icon-calc'/>
              <Title>{data.categories}</Title>
              &nbsp;∙&nbsp;
              <Title>{data.subCategories}</Title>
            </PaneTitle>
            <PaneText>{data.paneText}</PaneText>
            <PaneContent>
              <PaneContentLeft>
                <PaneImage src={data.paneImage}/>
                <TagRow>
                  {data.tags.map((tag, i) => (
                    <Tag text={tag.text} level={tag.level} key={i}/>
                  ))}
                </TagRow>
              </PaneContentLeft>
              <PaneContentRight>
                <NumbersEntryBox />
                <PressEnterReminder />
              </PaneContentRight>
            </PaneContent>
            <ButtonRow>
              <Button text='Skip'/>
              <Button submit text='Submit' id={'submitBtn'} disabled/>
            </ButtonRow>
          </MainPane>
        </Page>
      </Wrapper>
    </Theme>
  );
}

export default ProblemPage;
