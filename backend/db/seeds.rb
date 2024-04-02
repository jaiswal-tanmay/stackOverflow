# # Create Users
# users_data = [
#   { username: "tnmy", password: "tnmy", role: "user" },
#   { username: "admin", password: "admin", role: "admin" },
#   { username: "poochi", password: "poochi", role: "user" },
#   { username: "sundr", password: "sundr", role: "user" },
#   { username: "sid", password: "sid", role: "user" },
# ]

# users_data.each do |user_data|
#   User.create!(user_data)
# end

# Create Posts
posts_data = [
  {
    title: "App.use() necessary on only certain browsers?",
    description: "<p>I was just setting up a project and trying to set up a favicon. For some reason I require&nbsp;<strong>app.use</strong>&nbsp;on chrome, but not on any other browsers. I am unsure as to why.</p><p></p><pre class=\"ql-syntax\" spellcheck=\"false\">root - server.js, views, images\nviews - index.ejs \nimages - yuhyuh.png\n</pre>",
    outcome: "<p>This is the basic layout of what I have right now I have rendered index.ejs and I was trying to set up a favicon which I did using</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;link rel=\"icon\" href=\"/images/yuhyuh.png\"&gt;\n</pre><p>and for some reason it wasn't showing up at all on chrome, so I used this snippet I found online without really understanding what it really does or why it is even necessary at all</p><pre class=\"ql-syntax\" spellcheck=\"false\">app.use(\"/images\", express.static('images')); \n</pre><p></p><p>It worked, but I realized that when I delete this piece the favicon still shows up on every other browser except for Chrome. I tested Microsoft Edge, Firefox, even Opera GX. Is this line necessary, is it showing up because I am locally hosting? I am unsure as to whether I need to keep this and why it occurs.</p><p></p><p>I tried to read into the documentation of&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">app.use()</code>&nbsp;and it referenced middleware, I understand that this is running the image through&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">express.static?</code>&nbsp;To showcase images within my express function, but to my understanding ejs is just html mixed up with js and this would not be required when rendering an html page, so I dont see why it is necessary now. I apologize if this seems like a question I can easily google, most of those sources left me more confused than not.</p>",
    user_id: 1,
    tags: "javascript html node.js express",
    views: 7,
  },
  {
    title: "How can I set variable values in nginx config using map?",
    description: "<p>I was just setting up a project and trying to set up a favicon. For some reason I require&nbsp;<strong>app.use</strong>&nbsp;on chrome, but not on any other browsers. I am unsure as to why.</p><p></p><pre class=\"ql-syntax\" spellcheck=\"false\">root - server.js, views, images\nviews - index.ejs \nimages - yuhyuh.png\n</pre>",
    outcome: "<p>This is the basic layout of what I have right now I have rendered index.ejs and I was trying to set up a favicon which I did using</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;link rel=\"icon\" href=\"/images/yuhyuh.png\"&gt;\n</pre><p>and for some reason it wasn't showing up at all on chrome, so I used this snippet I found online without really understanding what it really does or why it is even necessary at all</p><pre class=\"ql-syntax\" spellcheck=\"false\">app.use(\"/images\", express.static('images')); \n</pre><p></p><p>It worked, but I realized that when I delete this piece the favicon still shows up on every other browser except for Chrome. I tested Microsoft Edge, Firefox, even Opera GX. Is this line necessary, is it showing up because I am locally hosting? I am unsure as to whether I need to keep this and why it occurs.</p><p></p><p>I tried to read into the documentation of&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">app.use()</code>&nbsp;and it referenced middleware, I understand that this is running the image through&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">express.static?</code>&nbsp;To showcase images within my express function, but to my understanding ejs is just html mixed up with js and this would not be required when rendering an html page, so I dont see why it is necessary now. I apologize if this seems like a question I can easily google, most of those sources left me more confused than not.</p>",
    user_id: 3,
    tags: "nginx",
    views: 2,
  },
  {
    title: "Optimize query for columns with distinct values incl. NULL",
    description: "<p>I was just setting up a project and trying to set up a favicon. For some reason I require&nbsp;<strong>app.use</strong>&nbsp;on chrome, but not on any other browsers. I am unsure as to why.</p><p></p><pre class=\"ql-syntax\" spellcheck=\"false\">root - server.js, views, images\nviews - index.ejs \nimages - yuhyuh.png\n</pre>",
    outcome: "<p>This is the basic layout of what I have right now I have rendered index.ejs and I was trying to set up a favicon which I did using</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;link rel=\"icon\" href=\"/images/yuhyuh.png\"&gt;\n</pre><p>and for some reason it wasn't showing up at all on chrome, so I used this snippet I found online without really understanding what it really does or why it is even necessary at all</p><pre class=\"ql-syntax\" spellcheck=\"false\">app.use(\"/images\", express.static('images')); \n</pre><p></p><p>It worked, but I realized that when I delete this piece the favicon still shows up on every other browser except for Chrome. I tested Microsoft Edge, Firefox, even Opera GX. Is this line necessary, is it showing up because I am locally hosting? I am unsure as to whether I need to keep this and why it occurs.</p><p></p><p>I tried to read into the documentation of&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">app.use()</code>&nbsp;and it referenced middleware, I understand that this is running the image through&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">express.static?</code>&nbsp;To showcase images within my express function, but to my understanding ejs is just html mixed up with js and this would not be required when rendering an html page, so I dont see why it is necessary now. I apologize if this seems like a question I can easily google, most of those sources left me more confused than not.</p>",
    user_id: 4,
    tags: "sql",
    views: 3,
  },
  {
    title: "AppSettings for AzureFunction on .NET 8 (Isolated)",
    description: "<p>I was just setting up a project and trying to set up a favicon. For some reason I require&nbsp;<strong>app.use</strong>&nbsp;on chrome, but not on any other browsers. I am unsure as to why.</p><p><br></p><pre class=\"ql-syntax\" spellcheck=\"false\">root - server.js, views, images\nviews - index.ejs \nimages - yuhyuh.png\n</pre>",
    outcome: "<p>This is the basic layout of what I have right now I have rendered index.ejs and I was trying to set up a favicon which I did using</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;link rel=\"icon\" href=\"/images/yuhyuh.png\"&gt;\n</pre><p>and for some reason it wasn't showing up at all on chrome, so I used this snippet I found online without really understanding what it really does or why it is even necessary at all</p><pre class=\"ql-syntax\" spellcheck=\"false\">app.use(\"/images\", express.static('images')); \n</pre><p><br></p><p>It worked, but I realized that when I delete this piece the favicon still shows up on every other browser except for Chrome. I tested Microsoft Edge, Firefox, even Opera GX. Is this line necessary, is it showing up because I am locally hosting? I am unsure as to whether I need to keep this and why it occurs.</p><p><br></p><p>I tried to read into the documentation of&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">app.use()</code>&nbsp;and it referenced middleware, I understand that this is running the image through&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">express.static?</code>&nbsp;To showcase images within my express function, but to my understanding ejs is just html mixed up with js and this would not be required when rendering an html page, so I dont see why it is necessary now. I apologize if this seems like a question I can easily google, most of those sources left me more confused than not.</p>",
    user_id: 5,
    tags: "azure c#",
    views: 5,
  },
]

posts_data.each do |post_data|
  Post.create!(post_data)
end

# Create Answers
# answers_data = [
#   {
#     desc: '<p>In a static context,&nbsp;<code style="color: var(--black-600); background-color: var(--black-200);">this</code>&nbsp;is the current class, so simply:</p><pre class="ql-syntax" spellcheck="false">class Model {\n  static getName() {\n    console.log(this.name);\n  }\n}\n\nclass User extends Model {}\n\n\nUser.getName();\n</pre>',
#     user_id: User.find_by(username: "poochi").id,
#     post_id: Post.first.id
#   },
#   {
#     desc: '<p>In a static context,&nbsp;<code style="color: var(--black-600); background-color: var(--black-200);">this</code>&nbsp;is the current class, so simply:</p><pre class="ql-syntax" spellcheck="false">class Model {\n  static getName() {\n    console.log(this.name);\n  }\n}\n\nclass User extends Model {}\n\n\nUser.getName();\n</pre>',
#     user_id: User.find_by(username: "poochi").id,
#     post_id: Post.third.id
#   },
#   {
#     desc: '<p>In a static context,&nbsp;<code style="color: var(--black-600); background-color: var(--black-200);">this</code>&nbsp;is the current class, so simply:</p><pre class="ql-syntax" spellcheck="false">class Model {\n  static getName() {\n    console.log(this.name);\n  }\n}\n\nclass User extends Model {}\n\n\nUser.getName();\n</pre>',
#     user_id: User.find_by(username: "tnmy").id,
#     post_id: Post.second.id
#   },
#   {
#     desc: '<p>In a static context,&nbsp;<code style="color: var(--black-600); background-color: var(--black-200);">this</code>&nbsp;is the current class, so simply:</p><pre class="ql-syntax" spellcheck="false">class Model {\n  static getName() {\n    console.log(this.name);\n  }\n}\n\nclass User extends Model {}\n\n\nUser.getName();\n</pre>',
#     user_id: User.find_by(username: "sundr").id,
#     post_id: Post.third.id
#   },
# ]

# answers_data.each do |answer_data|
#   Answer.create!(answer_data)
# end

# Create Post Votes
post_votes_data = [
  { user_id: 3, post_id: Post.first.id, value: 1 },
  { user_id: 4, post_id: Post.first.id, value: 1 },
  { user_id: 1, post_id: Post.second.id, value: 1 },
  { user_id: 1, post_id: Post.third.id, value: -1 },
]

post_votes_data.each do |vote_data|
  PostVote.create!(vote_data)
end

# Create Answer Votes
# ans_votes_data = [
#   { user_id: 3, post_id: Post.first.id, answer_id: Answer.first.id, value: 1 },
#   { user_id: 4, post_id: Post.first.id, answer_id: Answer.first.id, value: 1 },
# ]

# ans_votes_data.each do |vote_data|
#   AnsVote.create!(vote_data)
# end
