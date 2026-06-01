const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllClasses = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('classes').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getSingleClass = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json('Must use a valid class id.');
    }
    const classId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().db().collection('classes').findOne({ _id: classId });
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createClass = async (req, res) => {
  try {
    const newClass = {
      className: req.body.className,
      arm: req.body.arm,
      classTeacherId: req.body.classTeacherId,
      totalStudents: req.body.totalStudents || 0,
      academicSession: req.body.academicSession,
      term: req.body.term
    };

    const response = await mongodb.getDb().db().collection('classes').insertOne(newClass);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateClass = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json('Must use a valid class id.');
    }
    const classId = new ObjectId(req.params.id);
    const updatedClass = { ...req.body };

    const response = await mongodb.getDb().db().collection('classes')
      .replaceOne({ _id: classId }, updatedClass);

    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json('Failed to update class.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteClass = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json('Must use a valid class id.');
    }
    const classId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('classes').deleteOne({ _id: classId });

    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json('Failed to delete class.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllClasses,
  getSingleClass,
  createClass,
  updateClass,
  deleteClass
};