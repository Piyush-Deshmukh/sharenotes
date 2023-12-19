import Note from './Note';
import Wrapper from '../assets/wrappers/NotesContainer';
import img from '../assets/images/no-notes.svg';
import { useMyNotesContext } from '../pages/MyNotes';

const NotesContainer = () => {
  const { data } = useMyNotesContext();
  const { totalNotes, notes } = data;

  if (notes.length == 0) {
    return (
      <Wrapper>
        <div className="no-notes">
          <img src={img} alt='no-notes' />
          <h2 className='such-empty'>Wow, such empty</h2>
        </div>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <h5>
        {totalNotes} note{notes.length > 1 && 's'} found.
      </h5>
      <div className='notes'>
        {notes.map((note) => {
          return <Note key={note._id} {...note} />;
        })}
      </div>
    </Wrapper>
  );
};

export default NotesContainer;