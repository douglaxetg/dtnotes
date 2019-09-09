import React from 'react';
import Grid from '@material-ui/core/Grid';
import Cards from './Cards';
import config from '../config/config';

class List extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      dataSource: [],
    };
  };

  onDeleteCard = (item) => {
    fetch(`http://${config.apiAddress}/note/${item}`, {
      method: 'DELETE'
    })
    const responseJson = this.state.dataSource.filter(i => i.id !== item)
    this.setState({
      dataSource: responseJson,
      isLoading: false
    })
  }

  componentDidMount() {
    return fetch(`http://${config.apiAddress}/notes`)
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dataSource: responseJson
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  render() {
    if ((this.state.isLoading) || !(this.state.dataSource.length > 0)) {
      return (
        <p>Data is loading...</p>
      )
    }
    return (
      <div >
        <div>
          <Grid container justify="center" alignItems="center">
            {this.state.dataSource.map(note => (
              <Grid item xs={12} sm={3} key={note.id} >
                <Cards title={note.title} id={note.id} onDelete={this.onDeleteCard.bind(this, note.id)} />
              </Grid>
            ))}
          </Grid>
        </div>
      </div>
    );
  }
};

export default List;
