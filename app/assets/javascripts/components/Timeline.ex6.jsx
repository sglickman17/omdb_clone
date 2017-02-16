class Timeline extends React.Component {
  constructor(){
    super();
    }

  render () {
    return(
      <section id="tweet-container">
        <h3>Movie List</h3>
        <ul>
        {
          this.props.movieData.map((movieInfo, i) =>{
            return <Movie movie={movieInfo} key={i} />
          })
        }

        </ul>
      </section>
    )
  }
}
