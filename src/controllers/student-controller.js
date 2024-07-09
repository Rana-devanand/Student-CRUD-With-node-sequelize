const { StudentServices } = require("../services/index");

const studentService = new StudentServices();

const create = async (req, res) => {
  try {
    const studentData = await studentService.createData(req.body);
    return res.status(201).json({
      data: studentData,
      success: true,
      message: "Successfully Created the data",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to create the data",
      err: error,
    });
  }
};

const destroy = async (req, res) => {
  try {
    const deleteStudentData = await studentService.deleteData(req.params.id);
    return res.status(200).json({
      data: deleteStudentData,
      success: true,
      message: "Successfully deleted the data",
      err: {},
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Not able to delete the data",
      err: error,
    });
  }
};

const get = async (req, res) => {
  try {
    const getStudentData = await studentService.getData(req.params.id);
    return res.status(200).json({
      data: getStudentData,
      success: true,
      message: "Successfully fetched the data",
      err: {},
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      data: {},
      success: false,
      message: "Unable to fetched the data",
      err: error,
    });
  }
};

module.exports = {
  create,
  destroy,
  get,
};
