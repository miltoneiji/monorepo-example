import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  border: 1px solid #007bff;
  background-color: #007bff;
  color: #ffffff;
  border-radius: 0.25rem;
  padding: 0.375rem 0.75rem;
  line-height: 1.5;
  font-size: 1rem;

  &:not(:disabled) {
    cursor: pointer;
  }
`;

export default Button;
