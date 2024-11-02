
const Comic = require('./models/comic.js');


exports.createComic = async (req, res) => {
  try {
    const comic = new Comic(req.body);
    const savedComic = await comic.save();
    res.status(201).json(savedComic);
  } catch (error) {
    res.status(500).json({ message: 'Failed to create comic', error });
  }
};


exports.getAllComics = async (req, res) => {
  try {
    const comics = await Comic.find();
    res.status(200).json(comics);
  } catch (error) {
    res.status(500).json({ message: 'Failed to retrieve comics', error });
  }
};


exports.updateComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!comic) return res.status(404).json({ message: 'Comic not found' });
    res.status(200).json(comic);
  } catch (error) {
    res.status(500).json({ message: 'Failed to update comic', error });
  }
};


exports.deleteComic = async (req, res) => {
  try {
    const comic = await Comic.findByIdAndDelete(req.params.id);
    if (!comic) return res.status(404).json({ message: 'Comic not found' });
    res.status(200).json({ message: 'Comic deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to delete comic', error });
  }
};
