import { useEffect, useState } from 'react';
import Wrapper from '../assets/wrappers/NoteInfo';

const NoteInfo = ({ icon, text, pdfLink }) => {

  if(pdfLink) {
    const [url, setUrl] = useState(text);

    useEffect(() => {
      const absoluteURL = () => {
        if (url.startsWith('https')) {
          setUrl(url);
        } else {
          setUrl('https://' + url);
        }
      }

      absoluteURL();
    }, [])

    return (
      <Wrapper>
        <span className='note-icon'>{icon}</span>
        <a href={url} target='_blank'>PDF</a>
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