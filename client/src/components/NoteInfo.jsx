import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/NoteInfo';

const NoteInfo = ({ icon, text, pdfLink }) => {

  if(pdfLink) {
    return (
      <Wrapper>
        <span className='note-icon'>{icon}</span>
        <a href={text} target='_blank'>PDF</a>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <span className='note-icon'>{icon}</span>
      <span className='note-text'>{text}</span>
    </Wrapper>
  );
};

export default NoteInfo;