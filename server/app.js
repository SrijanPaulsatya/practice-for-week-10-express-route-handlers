// Phase 2
const {
  getAllArtists,
  getLatestArtist,
  getArtistByArtistId,
  addArtist,
  editArtistByArtistId,
  deleteArtistByArtistId,
  getAlbumsForLatestArtist,
  getAlbumsByArtistId,
  getAlbumByAlbumId,
  addAlbumByArtistId,
  editAlbumByAlbumId,
  deleteAlbumByAlbumId,
  getFilteredAlbums,
  getSongsByArtistId,
  getSongsByAlbumId,
  getSongBySongId,
  addSongByAlbumId,
  editSongBySongId,
  deleteSongBySongId
} = require('./data');

const express = require('express');
const app = express();


// Your code here

app.use(express.json());

app.get('/artists', (req, res) => {
  res.status(200).json((getAllArtists()));
});

app.post('/artists', (req, res) => {
  const newArtist = addArtist({name: req.body['name']}); 
  res.status(201).json(newArtist);
});

app.get('/artists/latest', (req, res) => {
  res.json(getLatestArtist());
});

app.get('/artists/latest/albums', (req, res) => {
  res.json(getAlbumsForLatestArtist());
});

app.get('/artists/:artistId', (req, res) => {
  const artistId = req.params.artistId;
  res.json(getArtistByArtistId(artistId));
});

app.put('/artists/:artistId', (req, res) => {
  const artistId = req.params.artistId;
  const data = req.body;
  res.json(editArtistByArtistId(artistId, data));
});

app.delete('/artists/:artistId', (req, res) => {
  const artistId = req.params.artistId;
  deleteArtistByArtistId(artistId);
  res.json({message: "Successfully deleted"});
});

//Albums route

app.get('/artists/:artistId/albums', (req, res) => {
  const artistId = req.params.artistId;
  res.json(getAlbumsByArtistId(artistId));
});

app.get('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  res.json(getAlbumByAlbumId(albumId));
});

app.post('/artist/:artistId/albums', (req, res) => {
  const artistId = req.params.artistId;
  const data = req.body;
  res.json(addAlbumByArtistId(artistId, data));
});

app.put('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  const data = req.body;
  res.json(editAlbumByAlbumId(albumId, data));
});

app.delete('/albums/:albumId', (req, res) => {
  const albumId = req.params.albumId;
  deleteAlbumByAlbumId(albumId);
  res.json({message: "Successfully deleted"});
});

app.get('/albums', (req, res) => {
  const startsWith = req.query.startsWith;
  if (startsWith) {
    res.json(getFilteredAlbums(startsWith));
  }
});

app.get('/artists/:artistId/songs', (req, res) => {
  const artistId = req.params.artistId;
  res.json(getSongsByArtistId(artistId));
});

app.get('/albums/:albumId/songs', (req, res) => {
  const albumId = req.params.albumId;
  res.json(getSongsByAlbumId(albumId));
});

app.get('/songs/:songId', (req, res) => {
  const songId = req.params.songId;
  res.json(getSongBySongId(songId));
});

app.post('/albumbs/:albumId/songs', (req, res) => {
  const albumId = req.params.albumId;
  const data = req.body;
  res.json(addSongByAlbumId(albumId, data));
});

app.put('/songs/:songId', (req, res) => {
  const songId = req.params.songId;
  const data = req.body;
  res.json(editSongBySongId(songId, data));
});

app.delete('/songs/:songId', (req, res) => {
  const songId = req.params.songId;
  deleteSongBySongId(songId);
  res.json({message: "Successfully deleted"});
});


// DO NOT MODIFY
if (require.main === module) {
  const port = 8000;
  app.listen(port, () => console.log('Server is listening on port', port));
} else {
  module.exports = app;
}
