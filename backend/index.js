import express from 'express';
import ImageKit from 'imagekit';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 4000;
const app = express();
app.use(cors({
  origin: process.env.CLIENT_URL,
}));
app.use(express.json());

const imagekit = new ImageKit({
  urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
  publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,
  privateKey: process.env.IMAGE_KIT_PRIVATE_KEY,
});

app.get('/api/upload', (req, res) => {
  const result = imagekit.getAuthenticationParameters();
  res.send(result);
}
);

app.post('/api', (req, res) => {
  const item = req.body;
  console.log(item);
  res.json(item);
}
);

app.delete('/api', (req, res) => {
  res.json({ message: 'Deleted from server!' });
}
);


app.listen(port, () => {
  console.log('Server listening on port 4000');
}
);
