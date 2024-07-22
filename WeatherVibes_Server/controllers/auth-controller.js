function login(req, res) {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
}

function register(req, res) {
  try {
    console.log(req.body);
  } catch (error) {
    console.log(error);
  }
}

export default { login, register };
