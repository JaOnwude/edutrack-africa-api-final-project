const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAllResults = async (req, res) => {
  try {
    const result = await mongodb.getDb().db().collection('results').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const getResultsByStudent = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.studentId)) {
      return res.status(400).json('Must use a valid student id.');
    }
    const studentId = new ObjectId(req.params.studentId);
    const result = await mongodb.getDb().db().collection('results')
      .find({ studentId: studentId }).toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const createResult = async (req, res) => {
  try {
    const result = {
      studentId: req.body.studentId,
      classId: req.body.classId,
      subject: req.body.subject,
      term: req.body.term,
      session: req.body.session,
      testScore: req.body.testScore,
      examScore: req.body.examScore,
      totalScore: req.body.testScore + req.body.examScore,
      grade: req.body.grade,
      remarks: req.body.remarks
    };

    const response = await mongodb.getDb().db().collection('results').insertOne(result);
    res.status(201).json(response);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateResult = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json('Must use a valid result id.');
    }
    const resultId = new ObjectId(req.params.id);
    const updatedResult = { ...req.body };

    const response = await mongodb.getDb().db().collection('results')
      .replaceOne({ _id: resultId }, updatedResult);

    if (response.modifiedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json('Failed to update result.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const deleteResult = async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json('Must use a valid result id.');
    }
    const resultId = new ObjectId(req.params.id);
    const response = await mongodb.getDb().db().collection('results').deleteOne({ _id: resultId });

    if (response.deletedCount > 0) {
      res.status(204).send();
    } else {
      res.status(500).json('Failed to delete result.');
    }
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getAllResults,
  getResultsByStudent,
  createResult,
  updateResult,
  deleteResult
};