import userAvatarIMG from '../assets/images/user-avatar.svg';
import Wrapper from '../assets/wrappers/LogoutContainer';
import { useDashboardContext } from '../pages/DashboardLayout';

const LogoutContainer = () => {
  const { user, logoutUser } = useDashboardContext();

  return (
    <Wrapper>
      <div className="logout-container">
        <img src={user.avatar ? user.avatar : userAvatarIMG} alt='avatar' className='avatar' />
        <div className="user-info">
          <h2>{user?.name} {user.lastName}</h2>
          <p>{user?.institution}</p>
        </div>
        <button type='button' className='logout-btn' onClick={logoutUser}>
          logout
        </button>
      </div>
      <div className='notes-info'>
        <h1>
          {user.notesCount ? user.notesCount : 'no' } notes shared by you.
          <span className='span-gray'>
            {user.notesCount ? ' you are doing a commendable job by sharing your knowledge to the world.' : ' share your notes and contribute to the community.'}
          </span>
        </h1>
      </div>
    </Wrapper>
  );
};

export default LogoutContainer;