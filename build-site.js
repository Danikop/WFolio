const tr = require('transliteration');
const fs = require('fs');
const path = require('path');
const sizeOf = require('image-size');

let D = console.log;
let J = x => D(JSON.stringify(x, null, 1));
let genLink = str => '/' + tr.slugify(str);

function fs_to_json(dir) {
  return fs.statSync(dir).isDirectory()
      ? {
        type: 'directory',
        filePath: dir,
        fileName: path.basename(dir),
        children: fs.readdirSync(dir).map(f => fs_to_json(path.join(dir, f)))
      }
      : {
        type: 'file',
        filePath: dir,
        fileName: path.basename(dir)
      }
}

function getImageInfo(path) {
  let dimensions = sizeOf(path);
  return {
    src: path,
    width: dimensions.width,
    height: dimensions.height
  }
}

function scan_albums_in_fs(root) {
  if (root.type === 'file')
    return [];
  let albums = [], images = [], info = null;
  root.children.forEach(node => {
    if (node.type === 'directory')
      albums = albums.concat(scan_albums_in_fs(node));
    else if (node.fileName === 'info.json')
      info = JSON.parse(fs.readFileSync(node.filePath));
    else
      images.push(getImageInfo(node.filePath));
  });
  if (info)
    albums.push({
      type: 'album',
      name: root.fileName,
      cover: info.cover ? path.join(root.filePath, info.cover) : images.length ? images[0] : null,
      images: images,
      link: genLink(root.fileName),
      desc: info.desc
    });
  return albums;
}

let json_fs = fs_to_json('./content');
let albums = scan_albums_in_fs(json_fs);
let user_site = require('./src/user-site');
let new_menu = [];
for (let menuItem of user_site.menu) {
  switch (menuItem.type) {
    case 'album':
      let match = albums.find(x => x.name === menuItem.name);
      if (match) {
        menuItem.images = match.images; // deps
        new_menu.push(menuItem);
      }
      break;
    case 'page':
      new_menu.push(menuItem);
      break;
    case 'album-collection':
      let new_albums = [];
      menuItem.albums.forEach(albumName => {
        let match = albums.find(x => x.name === albumName);
        if (match) new_albums.push(match);
      });
      menuItem.albums = new_albums;
      new_menu.push(menuItem);
      break;
    default:
      break;
  }
  menuItem.link = '/' + (menuItem.homepage ? '' : tr.slugify(menuItem.name));
}

user_site.menu = new_menu;
J(user_site);
fs.writeFile('../src/site.json', JSON.stringify(user_site, null, 2), (err) => {
  if (err) console.log(err);
});
//parse_albums_from_fs(json_fs);0
//console.log(JSON.stringify(albums, null, 2));