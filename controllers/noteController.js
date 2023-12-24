import Note from "../models/NoteModel.js";
import { StatusCodes } from "http-status-codes";
import User from "../models/UserModel.js";
import { deleteObject, getDownloadURL, ref, uploadBytes } from "firebase/storage";
import { firebaseStorage } from '../firebase.js';
import { v4 as uuidv4 } from 'uuid';


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

  if (req.files && req.files.pdf) {
    const pdfFile = req.files.pdf[0].originalname;
    const pdfMimeType = req.files.pdf[0].mimetype;

    const pdfId = uuidv4();
    
    
    const pdfRef = ref(firebaseStorage, `pdfs/${req.user.userId}/${pdfId}/${pdfFile}`);
    const pdfMetatype = { contentType: pdfMimeType, name: pdfFile };
    
    const pdfSnapshot = await uploadBytes(pdfRef, req.files.pdf[0].buffer, pdfMetatype);
    const pdfDownloadURL = await getDownloadURL(pdfSnapshot.ref);
    
    newNote.pdf = pdfDownloadURL;
    newNote.pdfPath = pdfSnapshot.metadata.fullPath;
  }
  
  if (req.files && req.files.thumbnail) {
    const thumbnailFile = req.files.thumbnail[0].originalname;
    const thumbnailMimeType = req.files.thumbnail[0].mimetype;
  
    const thumbnailId = uuidv4();
    
    const thumbnailRef = ref(firebaseStorage, 
                        `thumbnails/${req.user.userId}/${thumbnailId}/${thumbnailFile}`);
    const thumbnailMetatype = { contentType: thumbnailMimeType, name: thumbnailFile };

    const thumbnailSnapshot = await uploadBytes(thumbnailRef, req.files.thumbnail[0].buffer, thumbnailMetatype);
    const thumbnailDownloadURL = await getDownloadURL(thumbnailSnapshot.ref);
    
    newNote.thumbnail = thumbnailDownloadURL;
    newNote.thumbnailPath = thumbnailSnapshot.metadata.fullPath;
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
  
  if (req.files && req.files.pdf) {
    const pdfFile = req.files.pdf[0].originalname;
    const pdfMimeType = req.files.pdf[0].mimetype;

    const pdfId = uuidv4();
    
    
    const pdfRef = ref(firebaseStorage, `pdfs/${req.user.userId}/${pdfId}/${pdfFile}`);
    const pdfMetatype = { contentType: pdfMimeType, name: pdfFile };
    
    const pdfSnapshot = await uploadBytes(pdfRef, req.files.pdf[0].buffer, pdfMetatype);
    const pdfDownloadURL = await getDownloadURL(pdfSnapshot.ref);
    
    newNote.pdf = pdfDownloadURL;
    newNote.pdfPath = pdfSnapshot.metadata.fullPath;
  }
  
  if (req.files && req.files.thumbnail) {
    const thumbnailFile = req.files.thumbnail[0].originalname;
    const thumbnailMimeType = req.files.thumbnail[0].mimetype;
  
    const thumbnailId = uuidv4();
    
    const thumbnailRef = ref(firebaseStorage, 
                        `thumbnails/${req.user.userId}/${thumbnailId}/${thumbnailFile}`);
    const thumbnailMetatype = { contentType: thumbnailMimeType, name: thumbnailFile };

    const thumbnailSnapshot = await uploadBytes(thumbnailRef, req.files.thumbnail[0].buffer, thumbnailMetatype);
    const thumbnailDownloadURL = await getDownloadURL(thumbnailSnapshot.ref);
    
    newNote.thumbnail = thumbnailDownloadURL;
    newNote.thumbnailPath = thumbnailSnapshot.metadata.fullPath;
  }



  const updatedNote = await Note.findByIdAndUpdate(req.params.id, newNote/*, {
    new: true,
  }*/);

  if (req.files && req.files.pdf && updatedNote.pdfPath) {
    await deleteObject(ref(firebaseStorage, updatedNote.pdfPath))
  }

  if (req.files && req.files.thumbnail && updatedNote.thumbnailPath) {
    await deleteObject(ref(firebaseStorage, updatedNote.thumbnailPath))
  }

  res.status(StatusCodes.OK).json({ msg: 'note updated' });
};

export const deleteNote = async (req, res) => {
  const removedNote = await Note.findByIdAndDelete(req.params.id);
  await User.findByIdAndUpdate({ _id: req.user.userId }, { $inc: { notesCount: -1 }});
  
  if (removedNote.pdfPath) {
    await deleteObject(ref(firebaseStorage, removedNote.pdfPath))
  }

  if (removedNote.thumbnailPath) {
    await deleteObject(ref(firebaseStorage, removedNote.thumbnailPath))
  }
  
  res.status(StatusCodes.OK).json({ note: removedNote });
};