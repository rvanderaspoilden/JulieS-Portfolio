export class Link {
  constructor(public name?: string,
              public href?: string,
              public children?: Link[],
              public displayChildren?: boolean) {
  }
}
