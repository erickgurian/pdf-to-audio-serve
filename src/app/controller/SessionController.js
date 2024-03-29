const { User } = require("../models");

class SessionController {
  async store(req, res) {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(401).json({ message: "User not found" });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({ message: "Incorrect password " });
    }

    return res.status(200).send({
      user,
      token: user.generateToken()
    });
  }

  async logout(req, res) {
    const { email } = req.body;

    const user = await User.findOne({ where: { email } });
    
    return res.status(200).send({
      user
    })
  }
}

module.exports = new SessionController();
