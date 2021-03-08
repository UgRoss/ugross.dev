import styled from 'styled-components';

export enum AlertTypes {
  INFO = 'info',
  SUCCESS = 'success',
  WARNING = 'warning',
  DANGER = 'error',
}

interface AlertProps {
  type: AlertTypes;
}

export const Alert = styled.div<AlertProps>`
  position: relative;
  width: 100%;
  background: var(--color-alert-background);
  margin: 1.5rem 0;
  padding: 1rem;
  border-left: 4px solid;
  border-radius: 3px;
  border-color: ${(props) => `var(--color-alert-${props.type})`};

  > p:last-child {
    margin-bottom: 0;
  }
`;
