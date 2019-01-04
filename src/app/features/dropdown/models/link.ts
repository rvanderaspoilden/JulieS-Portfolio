import { Image } from '../../../models/image';

export class Link {
  constructor(public name?: string,
              public href?: string,
              public children?: Link[],
              public pictures?: Image[],
              public displayChildren?: boolean) {
  }
}
