import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';

export const Header = ({ isLoggedIn, setIsLoggedIn, userName }) => {
  const handleLogOut = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('userName');
    setIsLoggedIn(false);
  };

  return (
    <header className={styles.mainHeader}>
      {isLoggedIn ? (
        <nav>
          Добро пожаловать, &nbsp;<strong>{userName}</strong>
          <NavLink onClick={handleLogOut} exact to='/login'>
            <MeetingRoomIcon />
            Выход
          </NavLink>
        </nav>
      ) : (
        <nav>
          Добро пожаловать, незнакомец!,
          <NavLink onClick={handleLogOut} exact to='/login'>
            <MeetingRoomIcon />
            Вход
          </NavLink>
        </nav>
      )}
    </header>
  );
};
