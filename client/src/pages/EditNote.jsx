import { FormRow, SubmitBtn } from '../components';
import Wrapper from '../assets/wrappers/DashboardFormPage';
import { useLoaderData } from 'react-router-dom';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch from '../utils/customFetch';


export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/notes/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/my-notes');
  }
};

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  
  const thumbnailFile = formData.get('thumbnail');
  const pdfFile = formData.get('pdf');
  
  if (thumbnailFile && thumbnailFile.size > 500000) {
    toast.error('Image size too large');
    return null;
  }
  if (pdfFile && pdfFile.size > 1000000) {
    toast.error('PDF size too large');
    return null;
  }

  try {
    await customFetch.patch(`/notes/${params.id}`, formData);
    toast.success('Note edited successfully');
    return redirect('/dashboard/my-notes');
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const EditNote = () => {
  const { note } = useLoaderData();

  return (
    <Wrapper>
      <Form method='post' className='form' encType='multipart/form-data'>
        <h4 className='form-title'>edit note</h4>
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
          <FormRow type='text' name='title' defaultValue={note.title} />
          <FormRow type='text' name='description' defaultValue={note.description} />
          <div className='form-row'>
            <label htmlFor='pdf' className='form-label'>
              Select a PDF file (max 1 MB):
            </label>
            <input
              type='file'
              id='pdf'
              name='pdf'
              className='form-input'
              accept='.pdf'
            />
          </div>
          <FormRow type='text' name='course' defaultValue={note.course} />
          
          <SubmitBtn formBtn />
        </div>
      </Form>
    </Wrapper>
  );
};

export default EditNote;