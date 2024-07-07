const { student } = require("../models/index");

class StudentData {
  // insert the data
  async createData(firstName, lname, rno, sub) {
    try {
      const data = await student.create({
        firstName: firstName,
        lastName: lname,
        rollNo: rno,
        subject: sub,
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
      console.log("Something went on delete student repository");
      throw { error };
    }
  }
}

module.exports = StudentData;
