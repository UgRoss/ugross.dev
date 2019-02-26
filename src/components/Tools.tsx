import * as React from 'react';
import styled from 'styled-components';
import Tooltip from './Tooltip';

import jsImg from '../images/tools/js.png';
import mobxImg from '../images/tools/mobx.svg';
import nodeImg from '../images/tools/nodejs.png';
import prettierImg from '../images/tools/prettier.png';
import reactImg from '../images/tools/react.png';
import reduxImg from '../images/tools/redux.png';
import sketchImg from '../images/tools/sketch.png';
import typescriptImg from '../images/tools/typescript.png';

interface Tool {
  name: string;
  img: string;
}

const tools: Tool[] = [
  { name: 'JavaScript', img: jsImg },
  { name: 'NodeJS', img: nodeImg },
  { name: 'React', img: reactImg },
  { name: 'Mobx', img: mobxImg },
  { name: 'Redux', img: reduxImg },
  { name: 'TypeScript', img: typescriptImg },
  { name: 'Prettier', img: prettierImg },
  { name: 'Sketch', img: sketchImg },
];

interface Props {
  className?: string;
}

class Tools extends React.PureComponent<Props> {
  /** Renders tool item with wrapped Tooltip based on parameters */
  private renderToolItem({ name, img }: Tool) {
    return (
      <Tooltip content={name} placement="bottom" key={name}>
        <div key={name}>
          <img src={img} alt={name} />
        </div>
      </Tooltip>
    );
  }

  public render() {
    return (
      <div className={this.props.className}>
        {tools.map(this.renderToolItem)}
      </div>
    );
  }
}

const StyledTools = styled(Tools)<Props>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  > div {
    text-align: center;
    margin: 5px;
    img {
      border: 1px solid #e2e7f4;
      max-width: 45px;
      max-height: 45px;
      border-radius: 100%;
    }
  }

  @media (min-width: 500px) {
    > div {
      margin: 10px;
      img {
        max-width: 60px;
        max-height: 60px;
      }
    }
  }
`;

export default StyledTools;
