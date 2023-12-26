import { redirect, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/SingleNote";
import { toast } from "react-toastify";
import customFetch from "../utils/customFetch";
import stickyNote from '../assets/images/sticky-note.svg';
import NoteInfo from "../components/NoteInfo";
import { FaBriefcase, FaCalendarDays, FaDownload, FaUser } from "react-icons/fa6";
import advancedFormat from 'dayjs/plugin/advancedFormat';
import day from 'dayjs';
day.extend(advancedFormat);


export const loader = async ({ params }) => {
  try {
    const { data } = await customFetch.get(`/notes/${params.id}`);
    return data;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/all-notes');
  }
};


const SingleNote = () => {
  const { note } = useLoaderData();
  const date = day(note.createdAt).format('MMM Do, YYYY');

  return (
    <Wrapper>
        <div className="note-img">
          <img src={note.thumbnail ? note.thumbnail : stickyNote} alt="thumbnail" />
        </div>
        <div className="note-info">
          <header>
            <h1>{note.title}</h1>
            <p>{note.description}</p>
          </header>
          <div className="content">
            <NoteInfo icon={<FaCalendarDays />} text={date} />
            <NoteInfo icon={<FaBriefcase />} text={note.course} />
            <NoteInfo icon={<FaUser />} text={`${note.userObj.name} ${note.userObj.lastName}`} />
          </div>
          <footer>
            <a href={note.pdf} target="_blank" className="btn">
              PDF <FaDownload />
            </a>
          </footer>
        </div>
    </Wrapper>
  )
}

export default SingleNote