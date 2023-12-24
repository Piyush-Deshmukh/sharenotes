import { useLoaderData, redirect } from 'react-router-dom';
import customFetch from '../utils/customFetch';
import Wrapper from '../assets/wrappers/StatsContainer';
import { toast } from 'react-toastify';
import { StatItem } from '../components';


export const loader = async () => {
  try {
    const response = await customFetch.get('/users/admin/app-stats');
    return response.data;
  } catch (error) {
    toast.error('You are not authorized to view this page');
    return redirect('/dashboard');
  }
};

const Admin = () => {
  const { users, notes, userData } = useLoaderData();

  return (
    <Wrapper>
      <StatItem title='users' span={' have currently signed up.'} count={users} />
      <StatItem title='notes' span={' have been shared.'} count={notes} />
      <div className="users-list">
        <div className='col-head'>
          <h1>Name</h1>
          <h1>Institution</h1>
          <h1>Notes</h1>
        </div>
        {userData.map((user, i) => {
          return (
            <div className='single-user' key={i}>
              <h1>{user.name} {user.lastName}</h1>
              <h1>{user.institution}</h1>
              <h1>{user.notesCount}</h1>
            </div>
          );
        })}
      </div>
    </Wrapper>
  );
};

export default Admin;