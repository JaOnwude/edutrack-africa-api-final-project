const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllTeachers = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('teachers').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getSingleTeacher = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json('Must use a valid teacher id.');
    }
    const teacherId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('teachers').findOne({ _id: teacherId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createTeacher = async (req, res) => {
  try {
    const teacher = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      employeeId: req.body.employeeId,
      subject: req.body.subject,
      email: req.body.email,
      phone: req.body.phone,
      qualification: req.body.qualification,
      dateJoined: req.body.dateJoined,
      status: req.body.status || 'Active'
    };

    const response = await mongodb.getDb().db().collection('teachers').insertOne(teacher);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateTeacher = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json('Must use a valid teacher id.');
    }
    const teacherId = new ObjectId(req.params.id);
    const teacher = { ...req.body };

    const response = await mongodb.getDb().db().collection('teachers')
      .replaceOne({ _id: teacherId }, teacher);

    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json('Failed to update teacher.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteTeacher = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json('Must use a valid teacher id.');
    }
    const teacherId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('teachers').deleteOne({ _id: teacherId });

    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json('Failed to delete teacher.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllTeachers,
  getSingleTeacher,
  createTeacher,
  updateTeacher,
  deleteTeacher
};