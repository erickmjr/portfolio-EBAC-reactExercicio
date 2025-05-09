import styled from 'styled-components';

import type { Props } from './index';

export const Title = styled.h3<Props>`
  color: #282a35;
  font-size: ${(props) => (props.fontSize ? props.fontSize + 'px' : '14px')};
  font-weight: bold;
  margin-bottom: 16px;
`;

export default Title;
