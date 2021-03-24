import React from 'react';

interface ChildProps {
  color: string;
  onClick: () => void;
  children: string;
}

// 만약 여기에서 children을 받아서 넣고 싶다면, ChildProps 에 children에 대한 타입 지정을 해줘야 함

export const Child = ({ color, onClick, children }: ChildProps) => {
  return (
    <div>
      {children}
      {color}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

export const ChildAsFC: React.FC<ChildProps> = ({
  color,
  onClick,
  children,
}) => {
  return (
    <div>
      {color}
      {children}
      <button onClick={onClick}>Click me</button>
    </div>
  );
};

ChildAsFC.displayName;

// React.FC로 할 경우에는 , children을 받을 수 있다. FunctionComponent 이기 때문에
