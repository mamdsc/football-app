import { Tooltip } from 'antd';
import { CSSProperties, FC, memo } from 'react';
import { ConnectDropTarget, DropTargetMonitor, DropTarget } from 'react-dnd';
import { GoPlus } from 'react-icons/go';
import { CirculePlayer } from './styled';

const style: CSSProperties = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  borderStyle: 'dashed',
  borderColor: '#CD9ABE',
  borderWidth: '1px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  margin: '0 10px',
};

export interface IProps {
  accept: string
  lastDroppedItem?: any
  canDrop: boolean
  isOver: boolean
  onDrop: (item: any) => void
  connectDropTarget: ConnectDropTarget
}

export const ItemPosition: FC<IProps> = memo(({
  isOver,
  canDrop,
  connectDropTarget,
  lastDroppedItem,
}) => {
  const isActive = isOver && canDrop;

  let backgroundColor = '#CD9ABE';
  if (isActive) {
    backgroundColor = 'darkgreen';
  } else if (canDrop) {
    backgroundColor = 'darkkhaki';
  }

  return connectDropTarget(
    <div
      ref={connectDropTarget}
      style={{ ...style }}
      aria-roledescription="Dustbin"
    >
      <CirculePlayer background={backgroundColor}>
        {lastDroppedItem ? (
          <strong>
            <Tooltip title={lastDroppedItem.name}>
              {JSON.stringify(lastDroppedItem.name.split(' ').map((n: any) => n[0]).join('.'))}
            </Tooltip>
          </strong>
        ) : <GoPlus color="#fff" />}
      </CirculePlayer>
    </div>,
  );
});

export default DropTarget(
  (props: IProps) => props.accept,
  {
    drop(props: IProps, monitor: DropTargetMonitor) {
      props.onDrop(monitor.getItem());
    },
  },
  (connect, monitor) => ({
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  }),
)(ItemPosition);
