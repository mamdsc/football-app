import React, {
  useEffect,
  useRef,
  useState,
  SelectHTMLAttributes,
} from 'react';
import { useField } from '@unform/core';
import { Radio } from 'antd';

interface IRadioGroupProps extends SelectHTMLAttributes<HTMLSelectElement> {
  name: string;
  selected: string;
}

const RadioGroup: React.FC<IRadioGroupProps> = ({ name, selected }) => {
  const radioRef = useRef(null);

  const [radioValue, setRadioValue] = useState<any>();

  const { fieldName, registerField } = useField(name);

  useEffect(() => setRadioValue(selected), [selected]);

  useEffect(() => {
    registerField({
      name: fieldName,
      ref: radioRef.current,
      getValue: () => (
        radioValue
      ),
    });
  }, [fieldName, registerField, radioValue]);

  const onChange = (e: any) => {
    setRadioValue(e.target.value);
  };

  return (
    <Radio.Group
      ref={radioRef}
      onChange={onChange}
      value={radioValue}
    >
      <Radio value="Real">Real</Radio>
      <Radio value="Fantasy">Fantasy</Radio>
    </Radio.Group>
  );
};

export default RadioGroup;
