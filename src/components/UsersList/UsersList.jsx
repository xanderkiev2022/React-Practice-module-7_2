import { Button } from 'components/Button/Button';
import { deleteUsers } from 'redux/users/usersOperations';
import { useDispatch } from 'react-redux';
export const UsersList = ({ users }) => {
    const dispatch = useDispatch();
  return (
    <ul>
      {users.map(({ email, name, id }) => (
        <li key={id}>
          <p>{name}</p>
          <p>{email}</p>
          <Button text="Delete" clickHandler={()=>dispatch(deleteUsers(id))} />
        </li>
      ))}
    </ul>
  );
};
