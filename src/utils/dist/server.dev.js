"use strict";

var _miragejs = require("miragejs");

var _toolkit = require("@reduxjs/toolkit");

var _faker = _interopRequireDefault(require("faker"));

var _txtgen = require("txtgen");

var _dateFns = require("date-fns");

var _seedrandom = _interopRequireDefault(require("seedrandom"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var IdSerializer = _miragejs.RestSerializer.extend({
  serializeIds: "always"
}); // Set up a seeded random number generator, so that we get
// a consistent set of users / entries each time the page loads.
// This can be reset by deleting this localStorage value,
// or turned off by setting `useSeededRNG` to false.


var useSeededRNG = true;
var rng = (0, _seedrandom["default"])();

if (useSeededRNG) {
  var randomSeedString = localStorage.getItem("randomTimestampSeed");
  var seedDate;

  if (randomSeedString) {
    seedDate = new Date(randomSeedString);
  } else {
    seedDate = new Date();
    randomSeedString = seedDate.toISOString();
    localStorage.setItem("randomTimestampSeed", randomSeedString);
  }

  rng = (0, _seedrandom["default"])(randomSeedString);
  (0, _txtgen.setRandom)(rng);

  _faker["default"].seed(seedDate.getTime());
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(rng() * (max - min + 1)) + min;
}

var randomFromArray = function randomFromArray(array) {
  var index = getRandomInt(0, array.length - 1);
  return array[index];
};

var notificationTemplates = ["poked you", "says hi!", "is glad we're friends", "sent you a gift"];
new _miragejs.Server({
  routes: function routes() {
    this.namespace = "fakeApi";
    this.timing = 2000;
    this.resource("users");
    this.resource("posts");
    this.resource("comments");
    var server = this;
    this.post("/posts", function (schema, req) {
      var data = this.normalizedRequestAttrs();
      data.date = new Date().toISOString(); // Work around some odd behavior by Mirage that's causing an extra
      // user entry to be created unexpectedly when we only supply a userId.
      // It really want an entire Model passed in as data.user for some reason.

      var user = schema.users.find(data.userId);
      data.user = user;

      if (data.content === "error") {
        throw new Error("Could not save the post!");
      }

      var result = server.create("post", data);
      return result;
    });
    this.get("/posts/:postId/comments", function (schema, req) {
      var post = schema.posts.find(req.params.postId);
      return post.comments;
    });
    this.get("/notifications", function (schema, req) {
      var numNotifications = getRandomInt(1, 5);
      var pastDate;
      var now = new Date();

      if (req.queryParams.since) {
        pastDate = (0, _dateFns.parseISO)(req.queryParams.since);
      } else {
        pastDate = new Date(now.valueOf());
        pastDate.setMinutes(pastDate.getMinutes() - 15);
      } // Create N random notifications. We won't bother saving these
      // in the DB - just generate a new batch and return them.


      var notifications = _toConsumableArray(Array(numNotifications)).map(function () {
        var user = randomFromArray(schema.db.users);
        var template = randomFromArray(notificationTemplates);
        return {
          id: (0, _toolkit.nanoid)(),
          date: _faker["default"].date.between(pastDate, now).toISOString(),
          message: template,
          user: user.id,
          read: false,
          isNew: true
        };
      });

      return {
        notifications: notifications
      };
    });
  },
  models: {
    user: _miragejs.Model.extend({
      posts: (0, _miragejs.hasMany)()
    }),
    post: _miragejs.Model.extend({
      user: (0, _miragejs.belongsTo)(),
      comments: (0, _miragejs.hasMany)()
    }),
    comment: _miragejs.Model.extend({
      post: (0, _miragejs.belongsTo)()
    }),
    notification: _miragejs.Model.extend({})
  },
  factories: {
    user: _miragejs.Factory.extend({
      id: function id() {
        return (0, _toolkit.nanoid)();
      },
      firstName: function firstName() {
        return _faker["default"].name.firstName();
      },
      lastName: function lastName() {
        return _faker["default"].name.lastName();
      },
      name: function name() {
        return _faker["default"].name.findName(this.firstName, this.lastName);
      },
      username: function username() {
        return _faker["default"].internet.userName(this.firstName, this.lastName);
      },
      afterCreate: function afterCreate(user, server) {
        server.createList("post", 3, {
          user: user
        });
      }
    }),
    post: _miragejs.Factory.extend({
      id: function id() {
        return (0, _toolkit.nanoid)();
      },
      title: function title() {
        return (0, _txtgen.sentence)();
      },
      date: function date() {
        return _faker["default"].date.recent(7);
      },
      content: function content() {
        return (0, _txtgen.article)(1);
      },
      reactions: function reactions() {
        return {
          thumbsUp: 0,
          hooray: 0,
          heart: 0,
          rocket: 0,
          eyes: 0
        };
      },
      afterCreate: function afterCreate(post, server) {//server.createList('comment', 3, { post })
      },
      user: (0, _miragejs.association)()
    }),
    comment: _miragejs.Factory.extend({
      id: function id() {
        return (0, _toolkit.nanoid)();
      },
      date: function date() {
        return _faker["default"].date.past(2);
      },
      text: function text() {
        return (0, _txtgen.paragraph)();
      },
      post: (0, _miragejs.association)()
    })
  },
  serializers: {
    user: IdSerializer,
    post: IdSerializer,
    comment: IdSerializer
  },
  seeds: function seeds(server) {
    server.createList("user", 3);
  }
});