import { FaBriefcase, FaCalendarDays, FaDownload, FaUser } from "react-icons/fa6";
import { Form, redirect, useLoaderData } from "react-router-dom";
import Wrapper from "../assets/wrappers/SingleNote";
import customFetch from "../utils/customFetch";
import stickyNote from '../assets/images/sticky-note.svg';
import NoteInfo from "../components/NoteInfo";
import { Rating, SubmitBtn } from "../components";
import ratings from "../utils/ratingSelect";
import { toast } from "react-toastify";
import day from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat';
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

export const action = async ({ request, params }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);

  try {
    await customFetch.post(`/notes/${params.id}/reviews`, data);
    toast.success('Note reviewed successfully');
    return null;
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
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
            <Rating 
              value={note.rating} 
              text={`${note.numReviews} ${note.numReviews > 1 ? "reviews" : "review"}`} 
            />
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
        <section className="review-section">
          <Form method="post" className="form">
            <h4 className="form-title">Write a review</h4>
            <div className="form-center">
              <div className="form-row">
                <label htmlFor="rating" className="form-label">
                  Rating
                </label>
                <select name="rating" id="rating" className="form-select" required >
                  {ratings.map((rating, i) => {
                    return (
                      <option value={rating.value} key={i}>{rating.text}</option>
                    );
                  })}
                </select>
              </div>
              <div className="form-row">
                <label htmlFor="comment" className="form-label">Comment</label>
                <textarea 
                  name="comment" 
                  id="comment" 
                  cols="50" 
                  rows="3" 
                  required 
                  className="form-textarea"
                >
                </textarea>
              </div>

              <SubmitBtn formBtn />
            </div>
          </Form>
          <div className="all-reviews">
            <h4>Reviews</h4>
            {note.reviews.length === 0 ?
              <p>No Reviews...</p> 
              : <div className="review-container">
                {note.reviews.map((review, i) => (
                  <div key={i} className="single-review">
                    <strong>{review.name} {review.lastName}</strong>
                    <div className="rating-info">
                      <Rating value={review.rating} />
                      <p>{review.createdAt.substring(0, 10)}</p>
                    </div>
                    <p className="comment">{review.comment}</p>
                  </div>
                )).sort().reverse()}
              </div>
            }
          </div>
        </section>
    </Wrapper>
  )
}

export default SingleNote