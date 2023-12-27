import mongoose from 'mongoose';

const reviewSchema = mongoose.Schema(
  {
    name: String,
    lastName: String,
    rating: Number,
    comment: String,
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
  },
  {
    timestamps: true,
  }
);

const NoteSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    thumbnail: String,
    thumbnailPath: String,
    pdf: String,
    pdfPath: String,
    course: {
      type: String,
      default: 'my course',
    },
    reviews: [reviewSchema],
    rating: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    userObj: {
      createdBy: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
      },
      name: String,
      lastName: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Note', NoteSchema);