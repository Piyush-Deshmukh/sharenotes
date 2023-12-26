import { FaBriefcase, FaCalendarDays, FaLink, FaUser } from "react-icons/fa6";
import { Link, Form } from 'react-router-dom';
import Wrapper from '../assets/wrappers/Note';
import stickyNote from '../assets/images/sticky-note.svg';
import NoteInfo from './NoteInfo';
import { useMyNotesContext } from '../pages/MyNotes';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import day from 'dayjs';
day.extend(advancedFormat);


const Note = ({
  _id,
  title,
  description,
  thumbnail,
  pdf,
  course,
  createdAt,
  userObj,
}) => {
  const date = day(createdAt).format('MMM Do, YYYY');
  const { isAllNotes } = useMyNotesContext();

  return (
    <Wrapper>
      <Link to={`../note/${_id}`} >
        <header>
          <img src={thumbnail ? thumbnail : stickyNote} alt="thumbnail" />
          <div className='info'>
            <h5>{title}</h5>
            <p>{description}</p>
          </div>
        </header>
      </Link>
      <div className='content'>
        <div className='content-center'>
          <NoteInfo icon={<FaLink />} text={pdf} pdfLink />
          <NoteInfo icon={<FaCalendarDays />} text={date} />
          <NoteInfo icon={<FaBriefcase />} text={course} />
          <NoteInfo icon={<FaUser />} text={`${userObj.name} ${userObj.lastName}`} />
        </div>
      </div>
      {isAllNotes ? ''
        : <footer className='actions'>
            <Link to={`../edit-note/${_id}`} className='btn edit-btn'>
              Edit
            </Link>
            <Form method='post' action={`../delete-note/${_id}`}>
              <button type='submit' className='btn delete-btn'>
                Delete
              </button>
            </Form>
          </footer>
      }
    </Wrapper>
  );
};

export default Note;