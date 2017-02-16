class Timeline extends React.Component {
  constructor(){
    super();
    }

  render () {
    return(
      <section id="tweets-container">
        <h3>Movie List</h3>
        <ul>
        {
          this.props.tweetData.map((movieInfo, i) =>{
            return <Movie movie={movieInfo} key={i} />
          })
        }

        </ul>
      </section>
    )
  }
}
