import React from 'react';
import styled from 'styled-components';

type Props = {
  label: string;
  value: string | number;
  valueTestId?: string;
};

const Wrapper = styled.div`
  display: inline-flex;
  line-height: 1.5;
`;

const LabelSection = styled.div`
  border-top-left-radius: .25rem; 
  border-bottom-left-radius: .25rem;
  padding: .375rem .75rem;
  background-color: #6F42C1;
  color: #FFFFFF;
`;

const ValueSection = styled.div`
  border-top-right-radius: .25rem; 
  border-bottom-right-radius: .25rem;
  padding: .375rem .75rem;
  background-color: #DADAD9;
  color: #000000;
`;

const LabelValue = (props: Props) => {
  const { label, value, valueTestId } = props;

  return (
    <Wrapper>
      <LabelSection>
        { label }
      </LabelSection>
      <ValueSection data-testid={valueTestId}>
        { value }
      </ValueSection>
    </Wrapper>
  );
};

export default LabelValue;
