import { StatusCodes } from 'http-status-codes';
import User from '../models/UserModel.js';
import Note from '../models/NoteModel.js';
import { deleteObject, getDownloadURL, ref, uploadBytes } from 'firebase/storage';
import { firebaseStorage } from '../firebase.js';
import { v4 as uuidv4 } from 'uuid';


export const getCurrentUser = async (req, res) => {
  const user = await User.findOne({ _id: req.user.userId });
  const userWithoutPassword = user.toJSON();
  res.status(StatusCodes.OK).json({ user: userWithoutPassword });
};

export const getApplicationStats = async (req, res) => {
  const users = await User.countDocuments();
  const notes = await Note.countDocuments();
  const userModelData = await User.aggregate([
    {
      $group: {
        _id: null,
        name: { $push: {
          name: '$name',
          lastName: '$lastName',
          institution: '$institution',
          notesCount: '$notesCount'
        }}
      }
    }
  ]);
  
  const userData = userModelData[0].name;

  res.status(StatusCodes.OK).json({ users, notes, userData });
};

export const updateUser = async (req, res) => {
  const newUser = {...req.body};
  delete newUser.password;

  if (req.file) {
    const fileName = req.file.originalname;
    const mimeType = req.file.mimetype;
    
    const uniqueId = uuidv4();
    const imageRef = ref(firebaseStorage, `avatars/${req.user.userId}/${uniqueId}/${fileName}`);
    const metatype = { contentType: mimeType, name: fileName };
                                      
    const snapshot = await uploadBytes(imageRef, req.file.buffer, metatype);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    newUser.avatar = downloadURL;
    newUser.avatarPath = snapshot.metadata.fullPath;
  }

  const updatedUser = await User.findByIdAndUpdate(req.user.userId, newUser);

  if (req.file && updatedUser.avatarPath) {
    await deleteObject(ref(firebaseStorage, updatedUser.avatarPath))
  }
  res.status(StatusCodes.OK).json({ msg: 'user updated' });
};