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
  background: ${props => props.theme.btnBasic};
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
  background: ${props => props.theme.btnBasic};
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
    color: ${props => props.theme.arrowBtnBasic};
}
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
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  @media (max-width: 576px) {
		padding: 10px 30px;
  }
`;

const Item = styled.div`
	display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const OptionWrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10px 0px;
`;

const Option = styled.div`
  border-radius: 50px;
  background: #2e2f34;
  font-size: 14px;
  padding: 5px 15px;
  font-weight: ${({ isActive }) => (isActive ? '500' : '400')};
  color: ${({ isActive }) => (isActive ? '#fff' : '')};
`;

const OptionBorder = styled.div`
  padding: 1px;
  border-radius: 50px;
  margin-right: 8px;
  ${props => props.isActive && ({
    background: props.theme.main,
  })}
`;

const OptionTitle = styled.span`
  font-weight: 600;
  font-size: 14px;
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

const MultipleSelector = (props) => {
  const { dropdownOptions } = props;

  const wrapperRef = useRef(null);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeOption, setActiveOption] = useState([]);
  let buttonText;
  let selectedValue ={};

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

  const handleClickOption = (index, i) => {    
    activeOption[index] = i;

    setActiveOption([
      ...activeOption,
      {
        [index]: i,
      }
    ]);
  };

  const getSelectedValue = () => {
    dropdownOptions.map((li, index) => {
      let type = (dropdownOptions[index].item).toString();

      if (li.options[activeOption[index]] !== undefined) {
        selectedValue[type] = li.options[activeOption[index]];
      }
      return '';
    });
  };
  getSelectedValue();

  console.log('MultipleSelector Selected Value:', selectedValue);

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
                More Filters&nbsp;&nbsp;
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
            MORE FILTERS
          </ItemTitle>

          {dropdownOptions.map((li, index) => (
            <div key={index}>
              <DropdownItem
                id={li.togglerId}
                key={index}>
                <Item>
                  <OptionTitle>{li.item}</OptionTitle>
                  <OptionWrapper>
                  {li.options.map((item, i) => (
                    <OptionBorder
                      key={i}
                      isActive={activeOption[index] === i}>
                      <Option
                        key={i}
                        isActive={activeOption[index] === i}
                        onClick={(e) => handleClickOption(index, i)}>
                        {item}
                      </Option>
                    </OptionBorder>
                  ))}
                  </OptionWrapper>
                </Item>
              </DropdownItem>			
            </div>
          ))}

        </DropdownMenu>
      </Wrapper>
    </Theme>
  );
};

export default MultipleSelector;
