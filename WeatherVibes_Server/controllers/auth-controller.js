function login(req, res) {
  try {
    console.log(req.body);
    res.json("Data is found");
  } catch (error) {
    console.log(error);
  }
}

function register(req, res) {
  try {
    console.log(req.body);
    res.json("Data is found");
  } catch (error) {
    console.log(error);
  }
}

export default { login, register };
