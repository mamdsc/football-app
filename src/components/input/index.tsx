import React, {
  InputHTMLAttributes,
  useEffect,
  useRef,
  useState,
  useCallback,
} from 'react';
import { useField } from '@unform/core';
import { Tooltip } from 'antd';
import Container from './styled';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  title: string;
  height?: number;
}

const InputContainer: React.FC<IInputProps> = ({
  name, title, height, ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [isFocused, setIsFocused] = useState(false);
  const [isFilled, setIsFilled] = useState(false);

  const {
    fieldName,
    defaultValue,
    error,
    registerField,
  } = useField(name);

  const handleInputBlur = useCallback(() => {
    setIsFocused(false);
    setIsFilled(!!inputRef.current?.value);
  }, []);

  const handleInputFocus = useCallback(() => {
    setIsFocused(true);
  }, []);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <Container isFocused={isFocused} isFilled={isFilled} isErrored={!!error}>
      <h4>{title}</h4>
      <div>
        <Tooltip title={error || ''}>
          <input
            style={{ height }}
            defaultValue={defaultValue}
            ref={inputRef}
            onFocus={handleInputFocus}
            onBlur={handleInputBlur}
            {...rest}
          />
        </Tooltip>
      </div>
    </Container>
  );
};

export default InputContainer;
