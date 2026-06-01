const Validator = require('validatorjs');

const validator = (body, rules, customMessages, callback) => {
  const validation = new Validator(body, rules, customMessages);
  validation.passes(() => callback(null, true));
  validation.fails(() => callback(validation.errors, false));
};

// Student Validation
const saveStudent = (req, res, next) => {
  const rules = {
    firstName: 'required|string|min:2',
    lastName: 'required|string|min:2',
    admissionNumber: 'required|string',
    dateOfBirth: 'required|date',
    gender: 'required|in:Male,Female',
    class: 'required|string',
    arm: 'required|string|max:1',
    parentName: 'required|string',
    parentPhone: 'required|string',
    parentEmail: 'required|email',
    address: 'required|string',
    dateAdmitted: 'date'
  };

  validator(req.body, rules, {}, (err, status) => {
    if (!status) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: err
      });
    } else {
      next();
    }
  });
};

// Result Validation
const saveResult = (req, res, next) => {
  const rules = {
    studentId: 'required|string',
    classId: 'required|string',
    subject: 'required|string',
    term: 'required|string',
    session: 'required|string',
    testScore: 'required|integer|min:0|max:40',
    examScore: 'required|integer|min:0|max:60',
    grade: 'string',
    remarks: 'string'
  };

  validator(req.body, rules, {}, (err, status) => {
    if (!status) {
      res.status(400).json({
        success: false,
        message: 'Validation failed',
        errors: err
      });
    } else {
      next();
    }
  });
};

module.exports = { saveStudent, saveResult };