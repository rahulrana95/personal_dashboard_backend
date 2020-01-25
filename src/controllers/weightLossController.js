import Controller from "./Controller";
import WeightLossService from "./../services/userService";
import User from "./../models/weightLoss/model";

const weightLossService = new WeightLossService(User);

class WeightLossController extends Controller {
  constructor(service) {
    super(service);
  }

  async getUser (req, res) {
      const {params} = req;
      req.send('asd')
  }

  async signup (req, res) {
    console.log(req.body);
    const user = new User({
      ...req.body
    });

    try {
      const savedUser = await user.save();
      res.json(savedUser);
    } catch (err) {
      res.json({
        error: true,
        message: err
      });
    }
  };

  async login (req, res) {
    const {username} = req.body;

    try {
      const users = await User.find({username: username});
      res.json(users);
    } catch (err) {
      res.json({
        error: true,
        message: err
      });
    }
  }
}

export default new WeightLossController(weightLossService);
