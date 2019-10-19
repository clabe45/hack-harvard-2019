import React from 'react';
import { } from 'semantic-ui-react'
import SearchResult from './components/SearchResult';
import logo from './assets/logo.svg';

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      searchResults: [
        {
          name: "Linus Torvald",
          skills: ["linux", "git"],
          interests: ["foss"],
          picture: logo
        },
        {
          name: "Nicholas",
          skills: ["backend", "api"],
          interests: ["web", "music"],
          picture: logo
        }
      ]
    };
  }

  render() {
    return (
      <div className="home">
        {this.state.searchResults.map((user, i) => (
          <SearchResult key={i}
            name={user.name} skills={user.skills} interests={user.interests} picture={user.picture} />
        ))}
      </div>
    );
  }
}
