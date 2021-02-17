import { CSSProperties, FC, memo } from 'react';
import {
  ConnectDragSource,
  DragSourceMonitor,
  DragSource,
  DragSourceConnector,
} from 'react-dnd';

const style: CSSProperties = {
  height: '90px',
  background: 'linear-gradient(to top, #E7E7E7, #FFFFFF)',
  padding: '10px 20px',
  borderStyle: 'dashed',
  borderColor: '#c8c8c8',
  borderWidth: '1px',
  marginBottom: '8px',
  display: 'flex',
  flexDirection: 'column',
  flexWrap: 'wrap',
};

export interface BoxProps {
  name: string
  age: number
  nacionality: string
  type: string
  isDragging: boolean
  connectDragSource: ConnectDragSource
}

export const CardPlayer: FC<BoxProps> = memo(({
  name,
  age,
  type,
  nacionality,
  isDragging,
  connectDragSource,
}) => {
  const opacity = isDragging ? 0.4 : 1;
  return connectDragSource(
    <div aria-roledescription="Box" style={{ ...style, opacity }}>
      <div>
        <strong>Name: </strong>
        {name}
      </div>
      <div>
        <strong>Nacionality: </strong>
        {nacionality}
      </div>
      <div>
        <strong>Age: </strong>
        {age}
      </div>
      <div>
        <strong>Position: </strong>
        {type}
      </div>
    </div>,
  );
});

export default DragSource(
  (props: BoxProps) => props.type,
  {
    beginDrag: (props: BoxProps) => ({ name: props.name }),
  },
  (connect: DragSourceConnector, monitor: DragSourceMonitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging(),
  }),
)(CardPlayer);
