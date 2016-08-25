import * as React from "react";
import { Hero } from './hero';

export interface IHeroList { }

export class HeroListComponent extends React.Component<IHeroList, {}> {

  heroes: Hero[];
  selectedHero: Hero;

  onSelect(hero: Hero) { this.selectedHero = hero; }
  
  render() {
    return(
      <h2>My Heroes</h2>
      <ul class="heroes">
        {this.heroes.map(hero =>  
          <li key={hero.id} onClick={this.onSelect.bind(this,hero)}>
            <span class="badge">{hero.id}</span> {hero.name}
          </li>
        )}
      </ul>
    );
  }
}