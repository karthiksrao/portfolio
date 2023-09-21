var MovieLibrary = MovieLibrary || {};

/* App Object */
MovieLibrary = {
	Models : {},
	Collections : {},
	Views : {},
	Templates : {},
	Router : {},
	init:function(){
		window.Router = new MovieLibrary.Router();
		Backbone.history.start();
	}	
}

/* Router */
MovieLibrary.Router = Backbone.Router.extend({
	routes:{
		'':'index',
		'movie/:id':'showMovieDetails'
	},
	index:function(){
		window.LibraryView = new MovieLibrary.Views.LibraryView();
		window.Library = new MovieLibrary.Collections.Movies();
		window.Library.fetch({
			success:function(){ 
				$('#library').show();
				$('#detail').hide();
				window.LibraryView.render();
			}
		});
	},
	showMovieDetails:function(id){
		if(!window.Library){
			window.Library = new MovieLibrary.Collections.Movies();
			window.Library.fetch({
				success:function(){
					window.DetailView = new MovieLibrary.Views.DetailView();
					$('#library').hide();
					window.DetailView.render(id);
					$('#detail').show();
				}
			});
		} else{
			window.DetailView = new MovieLibrary.Views.DetailView();
			$('#library').hide();
			window.DetailView.render(id);
			$('#detail').show();
		}
	}
});

/* Model */
MovieLibrary.Models.Movie = Backbone.Model.extend({
	defaults:{
		'id':'',
		'name':'',
		'genre':'',
		'year':'',
		'language':'english',
		'cast':{},
		'poster':''
	},
	idAttribute: 'id'
});

/* Collection */
MovieLibrary.Collections.Movies = Backbone.Collection.extend({
	model: MovieLibrary.Models.Movie,
	url:'/demos/backbone-part1/js/data/movies.json'
});

/* Library Template */
MovieLibrary.Templates.LibraryTemplate = '<ul class="library clearfix"><% var movie_count = 0; _.each(movies,function(movie){ movie_count++; %> <li class="grid_2 <% if(movie_count==1 || (movie_count-1)%6==0) { %>alpha<% } %> <% if(movie_count%6==0) { %>omega<% } %>"><a href="#/movie/<%= movie.id %>"><img class="movie-poster" src="/demos/backbone-part1/images/<%= movie.poster %>" /><span class="movie-title"><%= movie.name %></span></a></li> <% }); %></ul>';

/* Library View */
MovieLibrary.Views.LibraryView = Backbone.View.extend({
	el:'#library',
	template: _.template(MovieLibrary.Templates.LibraryTemplate),
	initialize:function(){},
	render:function(){
		this.$el.html(this.template({movies:window.Library.toJSON()}));
	}
});

/* Detail Template */
MovieLibrary.Templates.DetailTemplate = '<div class="grid_12 alpha omega breadcrumbs"><a href="/demos/backbone-part1/#">&laquo; Back to Library</a></div><div class="grid_3 alpha"><img class="movie-poster" src="/demos/backbone-part1/images/<%= poster %>" /></div><div class="grid_6 omega"><h2 class="movie-title"><%= name %> <span>(<%= year %>)</span></h2><h4><%= genre %></h4><p class="synopsis"><%= synopsis %></p><table width="100%" class="cast"><thead><tr><td colspan="2"><strong>Cast</strong></td></tr></thead><tbody><% _.each(cast,function(actor){ %><tr><td><%= actor.name %></td><td>as <%= actor.character %></td></tr><% }); %></tbody></table></div>';

/* Detail View */
MovieLibrary.Views.DetailView = Backbone.View.extend({
	el:'#detail',
	template: _.template(MovieLibrary.Templates.DetailTemplate),
	initialize:function(){},
	render:function(id){
		this.$el.html(this.template(window.Library.get(id).toJSON()));
	}
});