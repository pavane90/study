//Classes
class User {
  constructor({ username, lastName, email, password }) {
    this.username = username;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
  }
  getProfile() {
    console.log(
      `${this.username} ${this.lastName} ${this.email} ${this.password}`
    );
  }
  updatePassword(newPassword, currentPassword) {
    if (currentPassword === this.password) {
      this.password = newPassword;
    } else {
      console.log("Can't change password.");
    }
  }
}

const sexyuser = new User({
  username: "Blee",
  lastName: "B",
  email: "pa@com",
  password: "1234"
}); //생성과 사용

class Admin extends User {
  constructor({ username, lastName, email, password, superAdmin, isActive }) {
    super({ username, lastName, email, password });
    this.superAdmin = superAdmin;
    this.isActive = isActive;
  }
  deleteWebsite() {
    console.log("Delete");
  }
}

const sexyadmin = new Admin({
  username: "Blee",
  lastName: "B",
  email: "pa@com",
  password: "1234",
  superAdmin: true,
  isActive: true
});
