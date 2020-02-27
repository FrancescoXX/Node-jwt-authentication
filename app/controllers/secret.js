// [GET] ../dev/version
exports.guarded = (req, res) => {
    return res.status(200).json("Hello " + res.tokenvalues.email + " this is a SECRET AREA!");
  };