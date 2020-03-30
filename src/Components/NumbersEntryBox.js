import React, { useRef } from 'react';
import styled from 'styled-components';
import Input from './Input';

const Wrapper = styled.form`
	display: flex;
	padding-top: 20px;
	@media (max-width: 576px) {
		padding-top: 0px;
	}
`;

const NumbersEntryBox = () => {
  const input1 = useRef(null);
	const input2 = useRef(null);
	const input3 = useRef(null);
	const input4 = useRef(null);

	return (
    <Wrapper>
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
    </Wrapper>
	);
};

export default NumbersEntryBox;
