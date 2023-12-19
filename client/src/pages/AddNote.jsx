import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';


export const action = async ({ request }) => {
  const formData = await request.formData();
  const file = formData.get('thumbnail');
  
  if (file && file.size > 500000) {
    toast.error('Image size too large');
    return null;
  }

  try {
    await customFetch.post('/notes', formData);
    toast.success('Note added successfully');
    return redirect('my-notes');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddNote = () => {
  return (
    <Wrapper>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h4 className='form-title'>add note</h4>
        <div className='form-center'>
          <div className='form-row'>
            <label htmlFor='image' className='form-label'>
              Select an image file (max 0.5 MB):
            </label>
            <input
              type='file'
              id='thumbnail'
              name='thumbnail'
              className='form-input'
              accept='image/*'
            />
          </div>
          <FormRow type='text' name='title' />
          <FormRow type='text' name='description' />
          <FormRow type='url' name='pdf' />
          <FormRow type='text' name='course' />

          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default AddNote;