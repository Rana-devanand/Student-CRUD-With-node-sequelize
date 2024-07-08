const { StudentRepo } = require("../repository/student-repository");

class StudentServices {
  constructor() {
    this.StudentRepo = new StudentRepo();
  }

  async createData(createData) {
    try {
      const data = await this.StudentRepo.createData(createData);
      return data;
    } catch (error) {
      console.log("Something went wrong in the Student Service");
      throw { error };
    }
  }
  async deleteData(studentId) {
    try {
      const deleteStudentData = await this.StudentRepo.deleteData(studentId);
      return deleteStudentData;
    } catch (error) {
      console.log("Something went wrong in Student-service to delete the data");
      throw { error };
    }
  }
  async updateData() {}
  async getData() {}
}

module.exports = StudentServices;
