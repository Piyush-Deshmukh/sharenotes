import { useState } from "react";
import { useMyNotesContext } from "../pages/MyNotes";
import { Link } from "react-router-dom";
import Wrapper from "../assets/wrappers/NotesLinkBtn";

const NotesLinkBtn = () => {
  const { isAllNotes } = useMyNotesContext();
  const [allNotes, setAllNotes] = useState(isAllNotes);

  return (
    <Wrapper>
        <Link to='../all-notes' className={`all-notes ${allNotes ? 'active' : ''}`} onClick={() => setAllNotes(true)}>
          all notes.
        </Link>
        <Link to='../my-notes' className={`all-notes ${allNotes ? '' : 'active'}`} onClick={() => setAllNotes(false)}>
          my notes.
        </Link>
    </Wrapper>
  )
}

export default NotesLinkBtn;