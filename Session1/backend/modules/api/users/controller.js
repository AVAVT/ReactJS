const userModel = require("./model");

const createUser = ({ username, email, password, avatarUrl }) =>
  new Promise((resolve, reject) => {
    userModel
      .create({ username, email, password, avatarUrl })
      .then(user => resolve(user._id))
      .catch(err => reject(err));
  });

const getAllUsers = page =>
  new Promise((resolve, reject) => {
    userModel
      .find({
        active: true
      })
      .sort({ createdAt: -1 })
      .skip((page - 1) * 20)
      .limit(20)
      .select("_id avatarUrl username email")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const getOneUser = id =>
  new Promise((resolve, reject) => {
    userModel
      .findOne({
        active: true,
        _id: id
      })
      .select("_id avatarUrl username email password")
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const updateUsername = (id, username) =>
  new Promise((resolve, reject) => {
    userModel
      .update(
        {
          _id: id
        },
        {
          username
        }
      )
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const updateEmail = (id, email) =>
  new Promise((resolve, reject) => {
    userModel
      .update(
        {
          _id: id
        },
        {
          email
        }
      )
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const updatePassword = (id, password) =>
  new Promise((resolve, reject) => {
    userModel
      .findById(id)
      .then(user => {
        user.password = password;
        return user.save();
      })
      .then(data => resolve(data._id))
      .catch(err => reject(err));
  });

const updateAvatarUrl = (id, avatarUrl) =>
  new Promise((resolve, reject) => {
    userModel
      .update(
        {
          _id: id
        },
        {
          avatarUrl
        }
      )
      .exec()
      .then(data => resolve(data))
      .catch(err => reject(err));
  });

const deleteUser = id =>
  new Promise((resolve, reject) => {
    userModel
      .update({ _id, id }, { active: false })
      .exec()
      .then(data => resolve(data._id))
      .catch(err => reject(err));
  });

const getUserForAuth = username =>
  new Promise((resolve, reject) => {
    userModel
      .findOne({ username })
      .select("username password _id")
      .then(user => resolve(user))
      .catch(err => reject(err));
  });

module.exports = {
  createUser,
  getAllUsers,
  getOneUser,
  updateUsername,
  updateEmail,
  updatePassword,
  updateAvatarUrl,
  deleteUser,
  getUserForAuth
};
