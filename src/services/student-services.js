const StudentRepo = require("../repository/student-repository");

class StudentServices {
  constructor() {
    this.StudentRepo = new StudentRepo();
  }

  async createData(createData) {
    try {
      console.log(createData);
      const data = await this.StudentRepo.createData(createData);
      return data;
    } catch (error) {
      console.error("Something went wrong in the Student Service", error);
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
  // update method will be declared later
  async updateData() {}

  //  Get data
  async getData(studId) {
    try {
      const getData = await this.StudentRepo.getData(studId);
      return getData;
    } catch (error) {
      console.log("Something went wrong in Student-service to delete the data");
      throw { error };
    }
  }
}

module.exports = StudentServices;
