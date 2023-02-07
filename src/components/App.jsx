import { useState } from 'react';
import { Button } from './Button/Button';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/users/usersOperations';
import { useSelector } from 'react-redux';
import { selectUsers } from 'redux/users/usersSelector';
import { UsersList } from './UsersList/UsersList';

export const App = () => {
  const [isListShow, setIsListShow] = useState(false);
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  // console.log(users);

  const showUsersList = () => {
    setIsListShow(true);
    dispatch(fetchUsers());
  };

  return (
    <>
      <Button text="Show list of users" clickHandler={showUsersList} />
      <UsersList users={users} />
    </>
  );

};
