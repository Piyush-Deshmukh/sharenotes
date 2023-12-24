import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (err, req, res, next) => {
  console.log(err);
  let statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || 'Something went wrong, try again later';

  if(msg === 'Invalid image file'){
    statusCode = StatusCodes.BAD_REQUEST;
  }

  res.status(statusCode).json({ msg });
};

export default errorHandlerMiddleware;