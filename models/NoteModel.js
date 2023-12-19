import mongoose from 'mongoose';

const NoteSchema = new mongoose.Schema(
  {
    title: String,
    description: String,
    thumbnail: String,
    thumbnailPublicId: String,
    pdf: String,
    course: {
      type: String,
      default: 'my course',
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