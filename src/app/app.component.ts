import { Component } from '@angular/core';

class Foo {
  bar: string | undefined;
}

class Article {
  id: number | undefined;
  meta: string | undefined;
}

enum Vehicle {
  Car = 1,
  Bike = 2,
  Truck = 3
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'type-safe-testing';
  foo = new Foo();

  constructor() {
    const anyValue = 'dsfsf';
    const articles: Article[] = [];

    this.testNoImplicitAny(anyValue);
    this.getArticlesByMetaById(articles, 3);
    this.testEnum('Car');
    this.testEnum(1);
  }

  private testNoImplicitAny(value: string): void {

  }

  private getArticlesByMetaById(articles: Article[], id: number): string | undefined {

    const article: Article | undefined = articles.find(a => a.id === id);

    if (typeof article === 'undefined') {
      // throw new Error(`Could not find article with id : ${id}`);
      console.error(`Could not find article with id : ${id}`);
      return undefined;
    }

    return article.meta;
  }

  private testEnum(value: string | number): void {

    if (Object.values(Vehicle).includes(value)) {
      alert(`Is Enum === true: val {${value}}`);
    }
  }
}
