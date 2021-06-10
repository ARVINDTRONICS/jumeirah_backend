const loginController = async (req, res) => {
  console.log("Request from UI", req.body);
  if (
    req.body.username === "jumeirahdemo@gmail.com" &&
    req.body.password === "jumeirahdemo"
  ) {
    return res.status(200).json({ data: "Success" });
  } else {
    return res.status(401).json({ data: "Failure" });
  }
};

module.exports = loginController;
