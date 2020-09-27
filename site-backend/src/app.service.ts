import { Injectable } from '@nestjs/common';
const Parser = require('rss-parser')

@Injectable()
export class AppService {
  async getFeed(): Promise<string> {
    // @TODO вынести урл в env, сделать конфиг
    const feed = await (new Parser()).parseURL("https://feeds.soundcloud.com/users/soundcloud:users:610582557/sounds.rss");
    return feed.items.map(item => {
      const re = /#(\d{3,}) (.+)/g
      const matches = re.exec(item.title)
      const [num, title] = [matches[1], matches[2]]
      const image = item.itunes.image.replace("3000x3000", "300x300")
      return {num, title, image, link: item.link, content: item.content, duration: item.itunes.duration};
    })
  }
}
