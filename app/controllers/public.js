// [GET] ../public/open
exports.open = (req, res) => {
    return res.status(200).json("Hello, this is open to everybody!");
  };