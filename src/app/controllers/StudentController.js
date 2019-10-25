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

  async update(req, res) {
    const { id, email } = req.body;
    const student = await Students.findByPk(id);

    const userExists = await Students.findOne({
      where: { email },
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const { name, age, weight, height } = await student.update(req.body);

    return res.json({
      id,
      name,
      age,
      weight,
      height,
    });
  }
}

export default new StudentController();
