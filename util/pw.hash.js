import { hash, verify } from "argon2";

const hashpw = async (password) => {
  try {
    const hashedpaswword = await hash(password);
    return hashedpaswword;
  } catch (err) {
    console.error("Error occured in hashing password : " + err);
    return null;
  }
};

const cmppw = async (password, hashedpw) => {
  return await verify(hashedpw, password);
};

export { hashpw, cmppw };
