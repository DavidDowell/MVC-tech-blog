const { Post } = require('../models');

const postdata = [
  {
    title: 'Yar Pirate Ipsum',
    post_content: 'Deadlights jack lad schooner scallywag dance the hempen jign',
    user_id: 2
  },
  {
    title: 'Monkey D. Luffy',
    post_content: 'Jolly boat chase guns ahoy ye poop deck ballast nipperkin sheet jack transom. ',
    user_id: 3
  },
  {
    title: 'The Once Piece',
    post_content: 'Barbary Coast Pieces of Eight knave belaying pin Sea Legs nipperkin square-rigged.',
    user_id: 4
  },
  {
    title: 'WWW',
    post_content: 'Admiral of the Black lanyard spike belaying pin fluke pirate sloop handsomely.',
    user_id: 1
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;
