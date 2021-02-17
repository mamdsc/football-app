import React, { useRef, useState } from 'react';
import { Input, Tag } from 'antd';
import { GoPlus } from 'react-icons/go';
import { TweenOneGroup } from 'rc-tween-one';
import { Container, TagCustom } from './styled';
import { useTeams } from '../../../hooks/useTeam';

const Tags: React.FC = () => {
  const [inputVisible, setInputVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>('');

  const inputTagRef = useRef<Input>(null);

  const { dataTags, updateTags } = useTeams();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleInputConfirm = () => {
    if (inputValue && dataTags.indexOf(inputValue) === -1) {
      updateTags([...dataTags, inputValue]);
      setInputVisible(false);
      setInputValue('');
    }
  };

  const handleClose = (removedTag: string) => {
    updateTags(dataTags.filter((tag) => tag !== removedTag));
  };

  const forMap = (tag: string) => {
    const tagElem = (
      <TagCustom
        closable
        onClose={(e) => {
          e.preventDefault();
          handleClose(tag);
        }}
      >
        {tag}
      </TagCustom>
    );
    return (
      <span key={tag} style={{ display: 'inline-block' }}>
        {tagElem}
      </span>
    );
  };

  const tagChild = dataTags && dataTags.map(forMap);

  return (
    <Container>
      <div style={{ marginBottom: 16 }}>
        <TweenOneGroup
          enter={{
            scale: 0.8,
            opacity: 0,
            type: 'from',
            duration: 100,
            onComplete: (e: any) => {
              e.target.style = '';
            },
          }}
          leave={{
            opacity: 0, width: 0, scale: 0, duration: 200,
          }}
          appear={false}
        >
          {tagChild}
        </TweenOneGroup>
      </div>
      {inputVisible && (
        <Input
          ref={inputTagRef}
          type="text"
          size="small"
          style={{ width: 78 }}
          value={inputValue}
          onChange={handleInputChange}
          onBlur={handleInputConfirm}
          onPressEnter={handleInputConfirm}
        />
      )}
      {!inputVisible && (
        <Tag onClick={() => {
          setInputVisible(true);
          inputTagRef.current?.focus();
        }}
        >
          <GoPlus />
          New Tag
        </Tag>
      )}
    </Container>
  );
};

export default Tags;
