import { Image } from './image';

export class ImageColumns {
  constructor(public column1?: Image[],
              public column2?: Image[],
              public column3?: Image[]) {
  }
}
