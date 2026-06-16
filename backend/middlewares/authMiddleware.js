import jwt from "jsonwebtoken";

const isUserInfoRoute = (req) =>
  req.originalUrl === "/api/auth/user-info" || req.path === "/user-info";

const clearAuthCookie = (res) => {
  res.clearCookie("jwt", {
    httpOnly: true,
    sameSite: "Lax",
    secure: false,
  });
};

export const verifyToken = (req, res, next) => {
  const token = req.cookies?.jwt;

  if (!token) {
    if (isUserInfoRoute(req)) {
      return res.status(200).json({});
    }

    return res.status(401).send("You are not authenticated");
  }

  jwt.verify(token, process.env.JWT_KEY, (err, payload) => {
    if (err || !payload?.userId) {
      if (isUserInfoRoute(req)) {
        clearAuthCookie(res);
        return res.status(200).json({});
      }

      console.error("JWT Verification Error:", err);
      return res.status(403).send("Token is not valid or expired");
    }

    req.userId = payload.userId;
    next();
  });
};
