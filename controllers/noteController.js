import Note from "../models/NoteModel.js";
import { StatusCodes } from "http-status-codes";
import cloudinary from 'cloudinary';
import { formatImage } from '../middleware/multerMiddleware.js';
import User from "../models/UserModel.js";


export const getAllNotes = async (req, res) => {
  const { search, sort } = req.query;

  const queryObject = {};

  if (search) {
    queryObject.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
      { course: { $regex: search, $options: 'i' } },
    ];
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'title',
    'z-a': '-title',
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  const notes = await Note.find(queryObject).sort(sortKey);

  const totalNotes = await Note.countDocuments(queryObject);

  res.status(StatusCodes.OK).json({ totalNotes, notes });
};

export const getMyNotes = async (req, res) => {
  const { search, sort } = req.query;

  const queryObject = {
    'userObj.createdBy': req.user.userId,
  };

  if (search) {
    queryObject.$or = [
      { title: { $regex: search, $options: 'i' } },
      { description: { $regex: search, $options: 'i' } },
      { course: { $regex: search, $options: 'i' } },
    ];
  }

  const sortOptions = {
    newest: '-createdAt',
    oldest: 'createdAt',
    'a-z': 'title',
    'z-a': '-title',
  };

  const sortKey = sortOptions[sort] || sortOptions.newest;

  // setup pagination
  // const page = Number(req.query.page) || 1;
  // const limit = Number(req.query.limit) || 10;
  // const skip = (page - 1) * limit;

  const notes = await Note.find(queryObject).sort(sortKey)/*.skip(skip).limit(limit)*/;

  const totalNotes = await Note.countDocuments(queryObject);
  // const numOfPages = Math.ceil(totalNotes / limit);

  res.status(StatusCodes.OK).json({ totalNotes, /* numOfPages, currentPage: page,*/ notes });
};

export const createNote = async (req, res) => {
  const newNote = {...req.body};
  await User.findByIdAndUpdate({ _id: req.user.userId }, { $inc: { notesCount: 1 }});

  newNote.userObj = {
    createdBy: req.user.userId,
    name: req.user.name,
    lastName: req.user.lastName,
  };
  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    newNote.thumbnail = response.secure_url;
    newNote.thumbnailPublicId = response.public_id;
  }

  const note = await Note.create(newNote);

  res.status(StatusCodes.CREATED).json({ note });
};

export const getNote = async (req, res) => {
  const note = await Note.findById(req.params.id);
  res.status(StatusCodes.OK).json({ note });
};

export const updateNote = async (req, res) => {
  const newNote = {...req.body};
  if (req.file) {
    const file = formatImage(req.file);
    const response = await cloudinary.v2.uploader.upload(file);
    newNote.thumbnail = response.secure_url;
    newNote.thumbnailPublicId = response.public_id;
  }

  const updatedNote = await Note.findByIdAndUpdate(req.params.id, newNote/*, {
    new: true,
  }*/);

  if (req.file && updatedNote.thumbnailPublicId) {
    await cloudinary.v2.uploader.destroy(updatedNote.thumbnailPublicId);
  }
  res.status(StatusCodes.OK).json({ msg: 'note updated' });
};

export const deleteNote = async (req, res) => {
  const removedNote = await Note.findByIdAndDelete(req.params.id);
  res.status(StatusCodes.OK).json({ note: removedNote });
};