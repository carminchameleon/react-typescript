import { Component } from 'react';

interface User {
  name: string;
  age: number;
}

interface UserSearchProps {
  users: User[];
}

interface UserSearchState {
  name: string;
  user: User | undefined;
}

// 내가 받게 될 props에 대한 interface를 <> 안에 넣어준다.
class UserSearch extends Component<UserSearchProps> {
  state: UserSearchState = {
    name: '',
    user: undefined,
  };

  onClick() {
    const foundUser = this.props.users.find((user) => {
      return user.name === this.state.name;
    });
    // 결과는 undefiend 될 수도, 값이 될 수도

    console.log(foundUser);
    this.setState({
      user: foundUser,
    });
  }

  render() {
    const { user, name } = this.state;
    return (
      <div>
        <h1>UserSearch</h1>
        <input
          value={name}
          onChange={(e) =>
            this.setState({
              name: e.target.value,
            })
          }
        ></input>
        <button onClick={this.onClick}>Search</button>
        {user && user.name}
        {user && user.age}
      </div>
    );
  }
}

export default UserSearch;
