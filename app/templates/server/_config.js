// CONFIG
// ======

exports.config = {
  listenPort: "1337",
  sessionSecret: "keyboard-cat"<% if(mongo) { %>,
  database: {
    IP: "localhost",
    name: "defaultDB",
    port: "27017"
  }<% } %>
};
