var Movie = React.createClass({
    render() {
        var movie = this.props.movie;
        return (
          <div>
            <div>{movie.Name}</div>
            <img src={movie.Picture} alt={movie.Name }/>
          </div>
        );
    }
});

var Category = React.createClass({
    render() {
        var category = this.props.category;
        var movies = category.Movies;
        return (
          <div>
            <div className="categoryName">{category.CategoryName}</div>
            <div>
              <ul className="movieUL">
                {movies.map(function(movie) {
                    return (
                      <li className="movieLI" key={movie.Id}>
                      <Movie movie={movie}/>
                    </li>
                )
                })}
            </ul>
          </div>
        </div>
      );
    }
});

var CategoryList = React.createClass({
    render() {
        var categories = this.props.categories;
        return (
          <div>
            <ul className="categoryUL">
              {categories.map(category => {
                  return (
                    <li className="categoryLI" key={category.Id}>
                        <Category category={category}/>
                    </li>
                    )
                  })}
            </ul>
          </div>
        );
    }
});

var MainComponent = React.createClass({
    getInitialState: function () {
        return {
            data: [],
            filterText: ""
        };
    },

    loadCategoriesFromServer: function () {
        var xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = function () {
            var data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        }.bind(this);
        xhr.send();
    },

    componentDidMount: function () {
        this.loadCategoriesFromServer();
        window.setInterval(this.loadCategoriesFromServer, this.props.pollInterval);
    },

    render: function () {
        return (
          <div className="mainComponent">
            <h1>Movies</h1>
            <CategoryList categories={this.state.data} />
          </div>
        );
  }
});


ReactDOM.render(
  <MainComponent url="/categories" pollInterval={20000} />,
  document.getElementById('content')
);