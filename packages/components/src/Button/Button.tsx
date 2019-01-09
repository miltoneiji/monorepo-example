import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #007BFF;
  background-color: #007BFF;
  color: #FFFFFF;
  border-radius: .25rem;
  padding: .375rem .75rem;
  line-height: 1.5;
  font-size: 1rem;

  &:not(:disabled) {
    cursor: pointer;
  }
`;

export default Button;
