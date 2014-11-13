// App.js - Defines a backbone model class for the whole app.
var AppModel = Backbone.Model.extend({

  initialize: function(params){
    this.set('currentSong', new SongModel()); // empty
    this.set('songQueue', new SongQueue()); // empty
    this.set('library', params.library); // collection of all songs available

    /* Note that 'this' is passed as the third argument. That third argument is
    the context. The 'play' handler will always be bound to that context we pass in.
    In this example, we're binding it to the App. This is helpful because otherwise
    the 'this' we use that's actually in the funciton (this.set('currentSong', song)) would
    end up refering to the window. That's just what happens with all JS events. The handlers end up
    getting called from the window (unless we override it, as we do here). */

    this.get('library')
      .on('enqueue', this.enqueue, this)
      .on('play', this.play, this);
  },

  play: function (song) {
    this.set('currentSong', song);
  },

  enqueue: function (song) {
    // collection.add(model)
    this.get('songQueue').add(song);
  }

});

