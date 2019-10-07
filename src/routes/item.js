const router = require('express').Router();
const multer = require('multer');
const multerConfig = require('../config/multer');

const itemController = require('../app/controller/itemController');

router.post('/uploadFile', multer(multerConfig).single('file'), (req, res) => res.json({ hello: 'Rocket' }));

router.post(
  '/uploadFile',
  multer(multerConfig).single('file'),
  async (req, res) => {
    const {
      originalname: name, size, key, location: url = '',
    } = req.file;

    const post = await itemController.create({
      name,
      size,
      key,
      url,
    });

    return res.json(post);
  },
);

router.delete('/posts/:id', async (req, res) => {
  const post = await itemController.findById(req.params.id);

  await post.remove();

  return res.send();
});

router.get('/posts', async (req, res) => {
  const posts = await itemController.find();

  return res.json(posts);
});

module.exports = router;
