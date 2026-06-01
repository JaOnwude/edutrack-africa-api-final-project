const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllStudents = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('students').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getSingleStudent = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json('Must use a valid student id.');
    }
    const studentId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('students').findOne({ _id: studentId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      admissionNumber: req.body.admissionNumber,
      dateOfBirth: req.body.dateOfBirth,
      gender: req.body.gender,
      class: req.body.class,
      arm: req.body.arm,
      parentName: req.body.parentName,
      parentPhone: req.body.parentPhone,
      parentEmail: req.body.parentEmail,
      address: req.body.address,
      dateAdmitted: req.body.dateAdmitted,
      status: req.body.status || 'Active'
    };

    const response = await mongodb.getDb().db().collection('students').insertOne(student);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json('Must use a valid student id.');
    }
    const studentId = new ObjectId(req.params.id);
    const student = { ...req.body };

    const response = await mongodb.getDb().db().collection('students')
      .replaceOne({ _id: studentId }, student);

    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json('Failed to update student.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json('Must use a valid student id.');
    }
    const studentId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('students').deleteOne({ _id: studentId });

    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json('Failed to delete student.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllStudents,
  getSingleStudent,
  createStudent,
  updateStudent,
  deleteStudent
};