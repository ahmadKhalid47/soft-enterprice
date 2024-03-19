import jwt from "jsonwebtoken";
const securityKey = "abc123";
export function createToken(userData) {
  return jwt.sign(userData, securityKey, { expiresIn: "1h" });
}

export function verifyToken(token) {
  try {
    let verified = jwt.verify(token, securityKey);
    console.log(verified);
    return true;
  } catch (err) {
    console.log("notVerified");
    return false;
  }
}
