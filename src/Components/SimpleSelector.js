import React, { useState, useRef, useEffect } from 'react';
import './../icon.css';
import styled from 'styled-components';
import { Theme } from './../Theme';

const Wrapper = styled.div`

`;

const FadeOutOverlay = styled.div`
	@media (max-width: 576px) {
		position: absolute;
		top: 0px;
		width: 100%;
		height: 100%;
		background: rgba(0,0,0,0.5);
    display: ${({ dropdownOpen }) => (dropdownOpen ? 'block' : 'none')};
    left: 0px;
	}
`;

const ButtonBorder = styled.div`
	background: ${props => props.theme.main};
	padding: 1px;
	margin: 5px;
	border-radius: 100px;
	border: none;
	&:hover {
		cursor: pointer;
	}
	display: inline-block;
	@media (max-width: 576px) {
		margin: 10px 10px;
	}
`;

const Button = styled.div`
	border-radius: 100px;
	padding: 10px 20px;
	font-size: 15px;
	background: ${props => props.theme.background};
	display: inline-block;
`;

const ButtonText = styled.div`
	font-size: 16px;
	@media (max-width: 576px) {
		font-size: 15px;
	}
	background: ${props => props.theme.second};
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-weight: 600;
	text-align: center;
	&::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    content: "";
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
	}
	display: inline-block;
`;

const IconCancel = styled.div`
	display: none;
	@media (max-width: 576px) {
		font-size: 21px;
		display: block;
		position: absolute;
		right: 30px;
		top: 20px;
		cursor: pointer;
	}
`;

const ItemTitle = styled.div`
	font-weight: 800;
	font-size: 13px;	
	padding: 10px 20px 10px 20px;
	color: #fff;
	@media (max-width: 576px) {
		padding: 10px 30px;
	}
`;

const DropdownItem = styled.div`
	${props => props.isActive && ({
    background: props.theme.main,
  })}
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  font-weight: ${({ isActive }) => (isActive ? '500' : 'none')};
  color: ${({ isActive }) => (isActive ? '#fff' : 'none')};
	&:hover {
		font-weight: 500;
		color: #fff;
    background: linear-gradient(to left, rgba(117, 179, 182, 0.6), rgba(51, 118, 173,0.6));
	}
	@media (max-width: 576px) {
		padding: 10px 30px;
  }
`;

const Item = styled.div`
	display: flex;
	align-items: center;
`;

const DropdownMenu = styled.div`
	display: ${({ dropdownOpen }) => (dropdownOpen ? 'block' : 'none')};
	position: absolute;
	width: 350px;
	background: ${props => props.theme.background};
  color: rgba(256,256,256,0.7);
  box-shadow: 1px 1px 20px rgba(0, 0, 0, 0.4);
	margin-top: 20px;
	border-radius: 10px;
	padding: 10px 0px;
	@media (max-width: 576px) {
		width: 100%;
		padding: 40px 0px;
		margin: 0px;
		border-radius: 0px;
		top: 260px;
    height: 100%;
    left: 0px;
	}
`;

const SimpleSelector = (props) => {
	const { dropdownOptions} = props;

  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState();
  const wrapperRef = useRef(null);

	let buttonText;

	const setToggleId = () => {
		dropdownOptions.map((li, i) => {
			return li.togglerId = 'toggler'.concat(i);
		});
	};
	setToggleId();
  
	const handleToggle = () => {
		setDropdownOpen(prevState => !prevState);
	};

	const useOutsideAlerter = (ref) => {	
		useEffect(() => {
			const handleClickOutside = (event) => {
				if (ref.current && !ref.current.contains(event.target)) {
					setDropdownOpen(false);
				}
			};

			document.addEventListener('mousedown', handleClickOutside);
			return () => {
				document.removeEventListener('mousedown', handleClickOutside);
			};
		}, [ref]);
	};
	useOutsideAlerter(wrapperRef);

	const closeDropdown = () => {	
		setDropdownOpen(false);
	};

	const toggleDropdownItem = (e, id) => {
    setActiveIndex(id);
  };

	const getButtonText = () => {
    dropdownOptions.map((option, i) => {
      if (option.togglerId === activeIndex) {
        buttonText = option.item
      }
      return '';
    });
	};
  getButtonText(); 

	console.log('SimpleSelector Selected Value:', buttonText);

	return (
		<Theme>
			<Wrapper ref={wrapperRef}>
				<FadeOutOverlay dropdownOpen={dropdownOpen} onClick={() => closeDropdown()}/>
				<ButtonBorder
					id='test'
					onClick={() => handleToggle()}>
					<Button>
						{
							buttonText ? 
							<ButtonText>
								{buttonText}&nbsp;&nbsp;
							</ButtonText>
							: 
							<ButtonText>
								Topics&nbsp;&nbsp;
							</ButtonText>
						}
					</Button>
				</ButtonBorder>
				<DropdownMenu
					dropdownOpen={dropdownOpen}>
					<IconCancel onClick={() => closeDropdown()}>
						<span className='icon icon-cancel' />
					</IconCancel>
					<ItemTitle>
						TOPICS
					</ItemTitle>

					{dropdownOptions.map((li, index) => (
						<div key={index}>
							<DropdownItem
								id={li.togglerId}
								key={index}
								onClick={(e) => toggleDropdownItem(e, li.togglerId)}
								isActive={activeIndex === li.togglerId}
								>
								<Item>
									{li.item}
								</Item>
							</DropdownItem>
						</div>
					))}

				</DropdownMenu>
			</Wrapper>
		</Theme>
	);
};

export default SimpleSelector;
