import { Form, redirect, Link } from 'react-router-dom';
import { FormRow, Logo, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/RegisterAndLoginPage';
import customFetch from '../utils/customFetch';
import { toast } from 'react-toastify';


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post('/auth/register', data);
    toast.success('Registration Successful!!');
    return redirect('/login');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const Register = () => {
  return (
    <Wrapper>
      <Form method='post' className='form'>
        <Logo landing />
        <h4>Register</h4>

        <div className="form-details">
          <FormRow type='text' name='name' />
          <FormRow type='text' name='lastName' labelText='last name' />
          <FormRow type='email' name='email' />
          <FormRow type='password' name='password' />
          <FormRow type='text' name='location' />
          <FormRow type='text' name='institution' />
        </div>

        <SubmitBtn />
        <p>
          Already a member?
          <Link to='/login' className='member-btn'>
            Login
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Register;