class Page extends React.Component {
  constructor() {
    super();
    this.state = {
      movieData: []
    };
    this.addMovie = this.addMovie.bind(this);
  }

  componentDidMount() {
    // $.ajax({
    //   url: 'http://www.omdbapi.com/?t=super'
    // }).done(response => {
    //     let arr = []
    //     arr.push(response)
    //     this.setState({movieData: arr})
    //   })
  }

  addMovie(movies){
    this.setState({ movieData: movies })
  }

    render() {
      return(
        <div>
          <Searchbar addMovie={ this.addMovie }/>
            <div className="container">
                <Timeline  movieData={this.state.movieData}/>
              </div>
          </div>
      )
    }
}
