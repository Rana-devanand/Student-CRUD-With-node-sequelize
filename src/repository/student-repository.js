const { student } = require("../models/index");

class StudentData {
  // insert the data
  async createData(stuData) {
    try {
      const data = await student.create({
        firstName: stuData.firstName,
        lastName: stuData.lastName,
        rollNo: stuData.rollNo,
        subject: stuData.subject,
      });
      return data;
    } catch (error) {
      console.error("Something went on create student repository", error);
      throw { error };
    }
  }

  // delete data
  async deleteData(id) {
    try {
      const deleteData = await student.destroy({
        where: {
          id: id,
        },
      });
      return deleteData;
    } catch (error) {
      console.error("Something went wrong on delete student repository", error);
      throw { error };
    }
  }

  async getData(studId) {
    try {
      const getData = await student.findByPk(studId);
      return getData;
    } catch (error) {
      console.error(
        "Something went wrong on fetched student repository",
        error
      );
      throw { error };
    }
  }
}

module.exports = StudentData;
