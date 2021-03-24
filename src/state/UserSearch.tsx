import { SSL_OP_SSLREF2_REUSE_CERT_TYPE_BUG } from 'node:constants';
import { useState } from 'react';

const users = [
  {
    name: 'Sarah',
    age: 30,
  },
  {
    name: 'alex',
    age: 34,
  },
  {
    name: 'lea',
    age: 20,
  },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  // 두가지의 경우가 있기 때문에 < \ > 으로 써놓음
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  const onClick = () => {
    const foundUser = users.find((user) => {
      return user.name === name;
    });
    // 결과는 undefiend 될 수도, 값이 될 수도

    console.log(foundUser);
    setUser(foundUser);
  };
  return (
    <div>
      <h1>UserSearch</h1>
      <input value={name} onChange={(e) => setName(e.target.value)}></input>
      <button onClick={onClick}>Search</button>
      {user && user.name}
      {user && user.age}
    </div>
  );
};

export default UserSearch;
