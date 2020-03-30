import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';
import { theme } from './../Theme';

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

const Input = (props) => {
	const {placeholder, inputCurrent, inputNext, autofocus, input1, id} = props;
	
	const wrapperRef = useRef(null);

	const onFocus = (e) => {
		e.select();
		e.parentElement.parentElement.style.background = theme.main;
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
};

export default Input;

