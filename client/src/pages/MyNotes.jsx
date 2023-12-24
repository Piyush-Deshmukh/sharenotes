import { useContext, createContext } from 'react';
import { NotesContainer, NotesLinkBtn, SearchContainer } from '../components';
import customFetch from '../utils/customFetch';
import { useLoaderData } from 'react-router-dom';
import { toast } from 'react-toastify';


export const loader = async ({ request }) => {
  try {
    const params = Object.fromEntries([
      ...new URL(request.url).searchParams.entries(),
    ]);

    const isAllNotes = request.url.includes('all-notes');
    const { data } = await customFetch.get('/notes' + `${isAllNotes ? '/all' : ''}`, {
      params,
    });

    return {
      data,
      isAllNotes,
      searchValues: { ...params },
    };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const MyNotesContext = createContext();

const MyNotes = () => {
  const { data, isAllNotes, searchValues } = useLoaderData();

  return (
    <MyNotesContext.Provider value={{ data, isAllNotes, searchValues }}>
      <SearchContainer />
      <NotesLinkBtn />
      <NotesContainer />
    </MyNotesContext.Provider>
  );
};

export const useMyNotesContext = () => useContext(MyNotesContext);

export default MyNotes;