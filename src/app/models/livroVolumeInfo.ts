import { ImageLinks, VolumeInfo } from "./interfaces";

export class LivroVolumeInfo {
  title?: string;
  authors?: string[];
  publisher?: string;
  publishedDate?: string;
  description?: string;
  previewLink?: string;
  thumbnail?: ImageLinks;

  constructor(item: VolumeInfo){
    this.title = item.title;
    this.authors = item.authors;
    this.publisher = item.publisher;
    this.publishedDate = item.publishedDate;
    this.description = item.description;
    this.previewLink = item.previewLink;
    this.thumbnail = item.imageLinks;
  }
}
