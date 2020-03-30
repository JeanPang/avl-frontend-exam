import React, { useState, useRef, useEffect } from 'react';
import './../icon.css';
import styled from 'styled-components';

const Wrapper = styled.div`
	min-width: 150px;
	@media (max-width: 576px) {
		width: 100%;
	}
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
	background: linear-gradient(to left, #75b3b6, #3376ad);
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
	background: #232529;
	display: inline-block;
`;

const ButtonText = styled.div`
	background: -webkit-linear-gradient(45deg, #0066a2, #6cd0f3, #00ff95);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
	font-size: 1rem;
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
	padding: 10px 20px;
	&:hover {
		font-weight: 500;
		color: #fff;
		background: #2e2f34;
	}
	display: flex;
	align-items: center;
	justify-content: space-between;
	@media (max-width: 576px) {
		padding: 10px 30px;
	}
`;

const Item = styled.div`
	display: flex;
	align-items: center;
	font-weight: ${({ isActive }) => (isActive ? '500' : '400')};
	color: ${({ isActive }) => (isActive ? '#fff' : 'rgba(256,256,256,0.7)')};
`;

const DropdownMenu = styled.div`
	display: ${({ dropdownOpen }) => (dropdownOpen ? 'block' : 'none')};
	position: absolute;
	width: 350px;
  background: #232529;
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

const Checkbox = styled.div`
	width: 20px;
	height: 20px;
	margin: 5px;
	border-radius: 2px;
	justify-content: center;
	align-items: center;
	display: inline-flex;
	margin-right: 10px;
  border: ${({ isActive }) => (isActive ? 'none' : 'solid 1.5px rgba(256,256,256,0.3)')};
  background: ${({ isActive }) => (isActive ? 'linear-gradient(to left, #7cd4dd, #65bdda, #4498d4)' : 'none')};
`;

const CheckboxItem = styled.span`
  display: ${({ isActive }) => (isActive ? 'inline' : 'none')};
`;

const CollapseItem = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 10px;
`;

const Collapse = styled.div`
	display: none;
	flex-direction: column;
	align-items: flex-start;
	padding: 5px 50px 0px 50px;
`;

const DropdownAccordion = (props) => {
	const { dropdownOptions } = props;

	let checkboxInitial = [];
	let parentCheckboxInitial = [];
	let dropdownInitial = [];
	let buttonText;

	const setInitialState = () => {
		dropdownOptions.map((li, index) => {
			checkboxInitial.push([]);
			parentCheckboxInitial[index] = false;

			if (Object.prototype.hasOwnProperty.call(li, 'subItems')) {
				return li.subItems.map(() => {
					return checkboxInitial[index].push(
						false
					);
				});
			} else {
				return '';
			}	 
		});

		dropdownOptions.map((li, i) => {
			return li.togglerAccId = 'togglerAcc'.concat(i);
		});

		dropdownOptions.map((li) => {
			return dropdownInitial[li.togglerAccId] = false;
		});
	};
	setInitialState();

	const [activeIndex, setActiveIndex] = useState();
	const [checkbox] = useState(checkboxInitial);
	const [dropdown] = useState(dropdownInitial);
	const [dropdownOpen, setDropdownOpen] = useState(false);
	const wrapperRef = useRef(null);

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
		const collapseItem = document.getElementById(`collapse-${id}`);
		const checkboxEl = document.getElementById(id).childNodes[0].childNodes[0];
		const checkboxChildEl = document.getElementById(id).childNodes[0].childNodes[0].childNodes[0];

		dropdown[id] = !dropdown[id];

		const dropdownItemEl = document.getElementById(id);
		const iconDownEl = dropdownItemEl.childNodes[1];

		if (collapseItem !== null) {
			if (e.target !== checkboxEl && e.target !== checkboxChildEl) {
				if (dropdown[id] === true) {
					iconDownEl.style.transform = 'rotateX(180deg)';
					dropdownItemEl.style.background = '#2e2f34';
					collapseItem.style.display = 'flex';
				} else {
					iconDownEl.style.transform = 'none';
					dropdownItemEl.style.background = 'none';
					collapseItem.style.display = 'none';
				}
			}
		}
	};

	const setChildAsyncOnCheck = (index) => {
		checkbox.map((statusArr, statusArrI) => {			
			if (statusArr.length !== 0) {
				statusArr.map((c, i) => {
					if (statusArrI !== index) {
						checkbox[statusArrI][i] = false;
					}
					return '';
				});
			}
			return '';
		});
	};

	const setChildAsyncOnParentCheck = (clickedIndex) => {
		checkbox.map((statusArr, index) => {							
			if (statusArr.length !== 0) {
				statusArr.map((c, i) => {
					if (index !== clickedIndex) {
						checkbox[index][i] = false;
					} else {
						checkbox[clickedIndex][i] = true;
					}
					return '';
				});
			}
			return '';
		});
	};

	const setCheckboxUITrue = (checkboxEl, iconEl) => {
		checkboxEl.style.background = 'linear-gradient(to left, #7cd4dd, #65bdda, #4498d4)';
		checkboxEl.style.border = 'none';
		iconEl.style.display = 'inline';

		checkboxEl.parentElement.style.fontWeight = '500';
		checkboxEl.parentElement.style.color = 'rgba(256,256,256,0.9)';
	};

	const setCheckboxUIFalse = (checkboxEl, iconEl) => {
		checkboxEl.style.background = 'none';
		checkboxEl.style.border = 'solid 1.5px rgba(256,256,256,0.3)';
		iconEl.style.display = 'none';

		checkboxEl.parentElement.style.fontWeight = '400';
		checkboxEl.parentElement.style.color = 'rgba(256,256,256,0.7)';
	};

	const handleCheckboxUI = () => {
		checkbox.map((statusArr, statusArrI) => {			
			statusArr.map((status, i) => {	
				const checkboxEl = document.getElementById(`checkbox-${statusArrI}-${i}`);
				const iconEl = checkboxEl.childNodes[0];

				if (status === true) {
					setCheckboxUITrue(checkboxEl, iconEl);
				} else {
					setCheckboxUIFalse(checkboxEl, iconEl);
				}
				return '';
			});
			return '';
		});
	};

	const onCheck = (index, subIndex) => {
		checkbox[index][subIndex] = !(checkbox[index][subIndex]);
		setActiveIndex(index);
		setChildAsyncOnCheck(index);
		handleCheckboxUI();
	};

	const onParentCheck = (e, clickedIndex) => {
		setActiveIndex(clickedIndex);
		setChildAsyncOnParentCheck(clickedIndex);
		handleCheckboxUI();
	};

	const selectedValue = () => {
		if (activeIndex !== undefined){
			buttonText = dropdownOptions[activeIndex].item
		}
	};
	selectedValue();

	return (
		<Wrapper ref={wrapperRef}>
			<FadeOutOverlay dropdownOpen={dropdownOpen} onClick={() => closeDropdown()}/>
			<ButtonBorder
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
					<span className='icon-show icon-cancel' />
				</IconCancel>
				<ItemTitle>
					TOPICS
				</ItemTitle>

				{dropdownOptions.map((li, index) => (
					<div key={index}>
						<DropdownItem
							id={li.togglerAccId}
							key={index}
							onClick={(e) => toggleDropdownItem(e, li.togglerAccId)}>
							<Item isActive={activeIndex === index}>
								<Checkbox
									isActive={activeIndex === index} 
									id={`checkbox-${index}`}
									onClick={(e) => onParentCheck(e, index)}
									className='checkbox'>
									<CheckboxItem
										className='icon icon-minus'
										isActive={activeIndex === index} 
									/>
								</Checkbox>
								{li.item}
							</Item>

							{(Object.prototype.hasOwnProperty.call(li, 'subItems'))
							?
								<span className='icon-show-bgcolor icon-down-open-1' />
							: 
								<div />
							}
						</DropdownItem>

						{(Object.prototype.hasOwnProperty.call(li, 'subItems'))?
							<Collapse id={`collapse-${li.togglerAccId}`}>
								{li.subItems.map((subItem, subIndex) => (
									<CollapseItem key={subIndex}>
										<Checkbox
											id={`checkbox-${index}-${subIndex}`}
											onClick={() => onCheck(index, subIndex)}>
											<span className='icon icon-ok-3' />
										</Checkbox>
										{subItem}
									</CollapseItem>
								))}
							</Collapse>						
							: <div />
						}
			
					</div>
				))}

			</DropdownMenu>
		</Wrapper>
	);
};

export default DropdownAccordion;
