import jwt from "jsonwebtoken";
const { sign, verify } = jwt;
import dotenv from "dotenv";

dotenv.config();

const secret = process.env.JWT_SECRET;

const createtoken = (user) => {
  const { id, email } = user;
  const payload = {
    _id: id,
    email: email,
  };
  const token = sign(payload, secret);
  return token;
};

const validatetoken = async (token) => {
  const payload = verify(token, secret);
  return payload;
};

export { createtoken, validatetoken };
