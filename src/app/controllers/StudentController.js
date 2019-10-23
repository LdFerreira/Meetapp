import Students from '../models/Students';

class StudentController {
  async store(req, res) {
    const studentExists = await Students.findOne({
      where: { email: req.body.email },
    });

    if (studentExists) {
      return res.status(400).json({ error: 'Student already exist' });
    }

    const { id, name, email, age, weight, height } = await Students.create(
      req.body
    );

    return res.json({ id, name, email, age, weight, height });
  }
}

export default new StudentController();
