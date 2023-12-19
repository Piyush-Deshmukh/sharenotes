import { Router } from "express";
const router = Router();

import {
  getMyNotes,
  getNote,
  createNote,
  updateNote,
  deleteNote,
  getAllNotes,
} from "../controllers/noteController.js";
import {
  validateIdParam,
  validateNoteInput,
} from "../middleware/validationMiddleware.js";
import upload from "../middleware/multerMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";



router.route("/all").get(getAllNotes);
router.route("/").get(getMyNotes).post(checkForTestUser, upload.single('thumbnail'), validateNoteInput, createNote);
router
  .route("/:id")
  .get(validateIdParam, getNote)
  .patch(checkForTestUser, upload.single('thumbnail'), validateNoteInput, validateIdParam, updateNote)
  .delete(checkForTestUser, validateIdParam, deleteNote);

export default router;