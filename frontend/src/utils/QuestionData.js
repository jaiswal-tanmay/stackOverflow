export let manualData = [
    {
        title: "App.use() necessary on only certain browsers?",
        desc: "<p>I was just setting up a project and trying to set up a favicon. For some reason I require&nbsp;<strong>app.use</strong>&nbsp;on chrome, but not on any other browsers. I am unsure as to why.</p><p></p><pre class=\"ql-syntax\" spellcheck=\"false\">root - server.js, views, images\nviews - index.ejs \nimages - yuhyuh.png\n</pre>",
        outcome: "<p>This is the basic layout of what I have right now I have rendered index.ejs and I was trying to set up a favicon which I did using</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;link rel=\"icon\" href=\"/images/yuhyuh.png\"&gt;\n</pre><p>and for some reason it wasn't showing up at all on chrome, so I used this snippet I found online without really understanding what it really does or why it is even necessary at all</p><pre class=\"ql-syntax\" spellcheck=\"false\">app.use(\"/images\", express.static('images')); \n</pre><p></p><p>It worked, but I realized that when I delete this piece the favicon still shows up on every other browser except for Chrome. I tested Microsoft Edge, Firefox, even Opera GX. Is this line necessary, is it showing up because I am locally hosting? I am unsure as to whether I need to keep this and why it occurs.</p><p></p><p>I tried to read into the documentation of&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">app.use()</code>&nbsp;and it referenced middleware, I understand that this is running the image through&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">express.static?</code>&nbsp;To showcase images within my express function, but to my understanding ejs is just html mixed up with js and this would not be required when rendering an html page, so I dont see why it is necessary now. I apologize if this seems like a question I can easily google, most of those sources left me more confused than not.</p>",
        votes: {
            users: {
                'poochi': 1,
            },
            totalVotes: 1
        },
        answers: [
            {
                desc: '<p>In a static context,&nbsp;<code style="color: var(--black-600); background-color: var(--black-200);">this</code>&nbsp;is the current class, so simply:</p><pre class="ql-syntax" spellcheck="false">class Model {\n  static getName() {\n    console.log(this.name);\n  }\n}\n\nclass User extends Model {}\n\n\nUser.getName();\n</pre>',
                author: 'poochi',
                votes: {
                    users: {
                        'tnmy': 1,
                    },
                    totalVotes: 1
                },
            },
            {
                desc: '<p>In a static context,&nbsp;<code style="color: var(--black-600); background-color: var(--black-200);">this</code>&nbsp;is the current class, so simply:</p><pre class="ql-syntax" spellcheck="false">class Model {\n  static getName() {\n    console.log(this.name);\n  }\n}\n\nclass User extends Model {}\n\n\nUser.getName();\n</pre>',
                author: 'poochi',
                votes: {
                    users: {
                        'tnmy': -1,
                    },
                    totalVotes: -1
                },
            }
        ],
        views: 7,
        tags: ['javascript', 'html', 'node.js', 'express'],
        author: 'tnmy',
        postId: 1,
    },
    {
        title: 'How can I set variable values in nginx config using map?',
        desc: "<p>I was just setting up a project and trying to set up a favicon. For some reason I require&nbsp;<strong>app.use</strong>&nbsp;on chrome, but not on any other browsers. I am unsure as to why.</p><p></p><pre class=\"ql-syntax\" spellcheck=\"false\">root - server.js, views, images\nviews - index.ejs \nimages - yuhyuh.png\n</pre>",
        outcome: "<p>This is the basic layout of what I have right now I have rendered index.ejs and I was trying to set up a favicon which I did using</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;link rel=\"icon\" href=\"/images/yuhyuh.png\"&gt;\n</pre><p>and for some reason it wasn't showing up at all on chrome, so I used this snippet I found online without really understanding what it really does or why it is even necessary at all</p><pre class=\"ql-syntax\" spellcheck=\"false\">app.use(\"/images\", express.static('images')); \n</pre><p></p><p>It worked, but I realized that when I delete this piece the favicon still shows up on every other browser except for Chrome. I tested Microsoft Edge, Firefox, even Opera GX. Is this line necessary, is it showing up because I am locally hosting? I am unsure as to whether I need to keep this and why it occurs.</p><p></p><p>I tried to read into the documentation of&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">app.use()</code>&nbsp;and it referenced middleware, I understand that this is running the image through&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">express.static?</code>&nbsp;To showcase images within my express function, but to my understanding ejs is just html mixed up with js and this would not be required when rendering an html page, so I dont see why it is necessary now. I apologize if this seems like a question I can easily google, most of those sources left me more confused than not.</p>",
        votes: {
            users: {

            },
            totalVotes: 0
        },
        answers: [],
        views: 2,
        tags: ['nginx'],
        author: 'poochi',
        postId: 2,
    },
    {
        title: 'Optimize query for columns with distinct values incl. NULL',
        desc: "<p>I was just setting up a project and trying to set up a favicon. For some reason I require&nbsp;<strong>app.use</strong>&nbsp;on chrome, but not on any other browsers. I am unsure as to why.</p><p></p><pre class=\"ql-syntax\" spellcheck=\"false\">root - server.js, views, images\nviews - index.ejs \nimages - yuhyuh.png\n</pre>",
        outcome: "<p>This is the basic layout of what I have right now I have rendered index.ejs and I was trying to set up a favicon which I did using</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;link rel=\"icon\" href=\"/images/yuhyuh.png\"&gt;\n</pre><p>and for some reason it wasn't showing up at all on chrome, so I used this snippet I found online without really understanding what it really does or why it is even necessary at all</p><pre class=\"ql-syntax\" spellcheck=\"false\">app.use(\"/images\", express.static('images')); \n</pre><p></p><p>It worked, but I realized that when I delete this piece the favicon still shows up on every other browser except for Chrome. I tested Microsoft Edge, Firefox, even Opera GX. Is this line necessary, is it showing up because I am locally hosting? I am unsure as to whether I need to keep this and why it occurs.</p><p></p><p>I tried to read into the documentation of&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">app.use()</code>&nbsp;and it referenced middleware, I understand that this is running the image through&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">express.static?</code>&nbsp;To showcase images within my express function, but to my understanding ejs is just html mixed up with js and this would not be required when rendering an html page, so I dont see why it is necessary now. I apologize if this seems like a question I can easily google, most of those sources left me more confused than not.</p>",
        votes: {
            users: {

            },
            totalVotes: 0
        },
        answers: [],
        views: 3,
        tags: ['sql'],
        author: 'sundr',
        postId: 3,
    },
    {
        title: 'AppSettings for AzureFunction on .NET 8 (Isolated)',
        desc: "<p>I was just setting up a project and trying to set up a favicon. For some reason I require&nbsp;<strong>app.use</strong>&nbsp;on chrome, but not on any other browsers. I am unsure as to why.</p><p><br></p><pre class=\"ql-syntax\" spellcheck=\"false\">root - server.js, views, images\nviews - index.ejs \nimages - yuhyuh.png\n</pre>",
        outcome: "<p>This is the basic layout of what I have right now I have rendered index.ejs and I was trying to set up a favicon which I did using</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;link rel=\"icon\" href=\"/images/yuhyuh.png\"&gt;\n</pre><p>and for some reason it wasn't showing up at all on chrome, so I used this snippet I found online without really understanding what it really does or why it is even necessary at all</p><pre class=\"ql-syntax\" spellcheck=\"false\">app.use(\"/images\", express.static('images')); \n</pre><p><br></p><p>It worked, but I realized that when I delete this piece the favicon still shows up on every other browser except for Chrome. I tested Microsoft Edge, Firefox, even Opera GX. Is this line necessary, is it showing up because I am locally hosting? I am unsure as to whether I need to keep this and why it occurs.</p><p><br></p><p>I tried to read into the documentation of&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">app.use()</code>&nbsp;and it referenced middleware, I understand that this is running the image through&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">express.static?</code>&nbsp;To showcase images within my express function, but to my understanding ejs is just html mixed up with js and this would not be required when rendering an html page, so I dont see why it is necessary now. I apologize if this seems like a question I can easily google, most of those sources left me more confused than not.</p>",
        votes: {
            users: {

            },
            totalVotes: 0
        },
        answers: [],
        views: 5,
        tags: ['azure', 'c#'],
        author: 'harshit',
        postId: 4,
    },
]

/*
{
	title: '',
	desc: '',
	outcome: '',
	votes: {
		users: {

		},
		totalVotes: integer (default : 0)
	},
	answers: [],
	views: integer (default : 0),
	tags: '',
	author: '',
	postId: integer,
}
*/

// export let manualData = [
// 	{
// 		"id": 10,
// 		"title": "App.use() necessary on only certain browsers?",
// 		"desc": "<p>I was just setting up a project and trying to set up a favicon. For some reason I require&nbsp;<strong>app.use</strong>&nbsp;on chrome, but not on any other browsers. I am unsure as to why.</p><pre class=\"ql-syntax\" spellcheck=\"false\">root - server.js, views, images\nviews - index.ejs \nimages - yuhyuh.png\n</pre>",
// 		"outcome": "<p>This is the basic layout of what I have right now I have rendered index.ejs and I was trying to set up a favicon which I did using</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;link rel=\"icon\" href=\"/images/yuhyuh.png\"&gt;\n</pre><p>and for some reason it wasn't showing up at all on chrome, so I used this snippet I found online without really understanding what it really does or why it is even necessary at all</p><pre class=\"ql-syntax\" spellcheck=\"false\">app.use(\"/images\", express.static('images')); \n</pre><p>It worked, but I realized that when I delete this piece the favicon still shows up on every other browser except for Chrome. I tested Microsoft Edge, Firefox, even Opera GX. Is this line necessary, is it showing up because I am locally hosting? I am unsure as to whether I need to keep this and why it occurs.</p><p>I tried to read into the documentation of&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">app.use()</code>&nbsp;and it referenced middleware, I understand that this is running the image through&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">express.static?</code>&nbsp;To showcase images within my express function, but to my understanding ejs is just html mixed up with js and this would not be required when rendering an html page, so I dont see why it is necessary now. I apologize if this seems like a question I can easily google, most of those sources left me more confused than not.</p>",
// 		"votes": {
// 			"users": {
// 				"poochi": 1
// 			},
// 			"totalVotes": 1
// 		},
// 		"answers": [
// 			{
// 				"desc": "<pre class=\"ql-syntax\" spellcheck=\"false\">class Model {\n  static getName() {\n    console.log(this.name);\n  }\n}\n\nclass User extends Model {\n  User.getName();\n}\n</pre>",
// 				"votes": {
// 					"users": {
// 						"tnmy": 1
// 					},
// 					"totalVotes": 1
// 				},
// 				"author": "poochi"
// 			},
// 			{
// 				"desc": "<pre class=\"ql-syntax\" spellcheck=\"false\">class Model {\n  static getName() {\n    console.log(this.name);\n  }\n}\n\nclass User extends Model {\n  User.getName();\n}\n</pre>",
// 				"votes": {
// 					"users": {
// 						"tnmy": -1
// 					},
// 					"totalVotes": -1
// 				},
// 				"author": "poochi"
// 			}
// 		],
// 		"views": 7,
// 		"tags": "javascript html node.js express",
// 		"author": "tnmy",
// 		"postId": 1,
// 		"created_at": "2024-03-24T20:01:51.812Z",
// 		"updated_at": "2024-03-24T20:01:51.812Z"
// 	},
// 	{
// 		"id": 11,
// 		"title": "How can I set variable values in nginx config using map?",
// 		"desc": "<p>I was just setting up a project and trying to set up a favicon. For some reason I require&nbsp;<strong>app.use</strong>&nbsp;on chrome, but not on any other browsers. I am unsure as to why.</p><pre class=\"ql-syntax\" spellcheck=\"false\">root - server.js, views, images\nviews - index.ejs \nimages - yuhyuh.png\n</pre>",
// 		"outcome": "<p>This is the basic layout of what I have right now I have rendered index.ejs and I was trying to set up a favicon which I did using</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;link rel=\"icon\" href=\"/images/yuhyuh.png\"&gt;\n</pre><p>and for some reason it wasn't showing up at all on chrome, so I used this snippet I found online without really understanding what it really does or why it is even necessary at all</p><pre class=\"ql-syntax\" spellcheck=\"false\">app.use(\"/images\", express.static('images')); \n</pre><p>It worked, but I realized that when I delete this piece the favicon still shows up on every other browser except for Chrome. I tested Microsoft Edge, Firefox, even Opera GX. Is this line necessary, is it showing up because I am locally hosting? I am unsure as to whether I need to keep this and why it occurs.</p><p>I tried to read into the documentation of&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">app.use()</code>&nbsp;and it referenced middleware, I understand that this is running the image through&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">express.static?</code>&nbsp;To showcase images within my express function, but to my understanding ejs is just html mixed up with js and this would not be required when rendering an html page, so I dont see why it is necessary now. I apologize if this seems like a question I can easily google, most of those sources left me more confused than not.</p>",
// 		"votes": {
// 			"users": {},
// 			"totalVotes": 0
// 		},
// 		"answers": [],
// 		"views": 2,
// 		"tags": "nginx",
// 		"author": "poochi",
// 		"postId": 2,
// 		"created_at": "2024-03-24T20:01:51.819Z",
// 		"updated_at": "2024-03-24T20:01:51.819Z"
// 	},
// 	{
// 		"id": 12,
// 		"title": "Optimize query for columns with distinct values incl. NULL",
// 		"desc": "<p>I was just setting up a project and trying to set up a favicon. For some reason I require&nbsp;<strong>app.use</strong>&nbsp;on chrome, but not on any other browsers. I am unsure as to why.</p><pre class=\"ql-syntax\" spellcheck=\"false\">root - server.js, views, images\nviews - index.ejs \nimages - yuhyuh.png\n</pre>",
// 		"outcome": "<p>This is the basic layout of what I have right now I have rendered index.ejs and I was trying to set up a favicon which I did using</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;link rel=\"icon\" href=\"/images/yuhyuh.png\"&gt;\n</pre><p>and for some reason it wasn't showing up at all on chrome, so I used this snippet I found online without really understanding what it really does or why it is even necessary at all</p><pre class=\"ql-syntax\" spellcheck=\"false\">app.use(\"/images\", express.static('images')); \n</pre><p>It worked, but I realized that when I delete this piece the favicon still shows up on every other browser except for Chrome. I tested Microsoft Edge, Firefox, even Opera GX. Is this line necessary, is it showing up because I am locally hosting? I am unsure as to whether I need to keep this and why it occurs.</p><p>I tried to read into the documentation of&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">app.use()</code>&nbsp;and it referenced middleware, I understand that this is running the image through&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">express.static?</code>&nbsp;To showcase images within my express function, but to my understanding ejs is just html mixed up with js and this would not be required when rendering an html page, so I dont see why it is necessary now. I apologize if this seems like a question I can easily google, most of those sources left me more confused than not.</p>",
// 		"votes": {
// 			"users": {},
// 			"totalVotes": 0
// 		},
// 		"answers": [],
// 		"views": 3,
// 		"tags": "sql",
// 		"author": "sundr",
// 		"postId": 3,
// 		"created_at": "2024-03-24T20:01:51.821Z",
// 		"updated_at": "2024-03-24T20:01:51.821Z"
// 	},
// 	{
// 		"id": 13,
// 		"title": "AppSettings for AzureFunction on .NET 8 (Isolated)",
// 		"desc": "<p>I was just setting up a project and trying to set up a favicon. For some reason I require&nbsp;<strong>app.use</strong>&nbsp;on chrome, but not on any other browsers. I am unsure as to why.</p><pre class=\"ql-syntax\" spellcheck=\"false\">root - server.js, views, images\nviews - index.ejs \nimages - yuhyuh.png\n</pre>",
// 		"outcome": "<p>This is the basic layout of what I have right now I have rendered index.ejs and I was trying to set up a favicon which I did using</p><pre class=\"ql-syntax\" spellcheck=\"false\">&lt;link rel=\"icon\" href=\"/images/yuhyuh.png\"&gt;\n</pre><p>and for some reason it wasn't showing up at all on chrome, so I used this snippet I found online without really understanding what it really does or why it is even necessary at all</p><pre class=\"ql-syntax\" spellcheck=\"false\">app.use(\"/images\", express.static('images')); \n</pre><p><br></p><p>It worked, but I realized that when I delete this piece the favicon still shows up on every other browser except for Chrome. I tested Microsoft Edge, Firefox, even Opera GX. Is this line necessary, is it showing up because I am locally hosting? I am unsure as to whether I need to keep this and why it occurs.</p><p><br></p><p>I tried to read into the documentation of&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">app.use()</code>&nbsp;and it referenced middleware, I understand that this is running the image through&nbsp;<code style=\"color: var(--black-600); background-color: var(--black-200);\">express.static?</code>&nbsp;To showcase images within my express function, but to my understanding ejs is just html mixed up with js and this would not be required when rendering an html page, so I dont see why it is necessary now. I apologize if this seems like a question I can easily google, most of those sources left me more confused than not.</p>",
// 		"votes": {
// 			"users": {},
// 			"totalVotes": 0
// 		},
// 		"answers": [],
// 		"views": 5,
// 		"tags": "azure c#",
// 		"author": "harshit",
// 		"postId": 4,
// 		"created_at": "2024-03-24T20:01:51.823Z",
// 		"updated_at": "2024-03-24T20:01:51.823Z"
// 	}
// ]


// export function updatePost({title, desc, postId, tags, outcome}) {
//     for (let i = 0; i < manualData.length; i++) {
//         if (manualData[i].postId === postId) {
//             manualData[i].title = title;
//             manualData[i].desc = desc;
//             manualData[i].outcome = outcome;
//             manualData[i].tags = tags;
//             return;
//         }
//     }
// }

// export function deletePost(id) {
//     manualData = manualData.filter((data) => data.postId !== manualData[id].postId);
// }


// export function pushPost(post) {
//     if (manualData.filter((data) => data === post).length === 0) {
//         manualData.push(post);
//     }
// }

export function postUpVote(id, username) {
    if (manualData[id].votes.users[username] === 1) return;
    if (manualData[id].votes.users[username] === -1) manualData[id].votes.totalVotes++;

    manualData[id].votes.totalVotes++;
    manualData[id].votes.users[username] = 1;
}

export function postDownVote(id, username) {
    if (manualData[id].votes.users[username] === -1) return;
    if (manualData[id].votes.users[username] === 1) manualData[id].votes.totalVotes--;

    manualData[id].votes.totalVotes--;
    manualData[id].votes.users[username] = -1;
}

export function answerUpVote(postid, id, username) {
    if (manualData[postid].answers[id].votes.users[username] === 1) return;
    if (manualData[postid].answers[id].votes.users[username] === -1) manualData[postid].answers[id].votes.totalVotes++;

    manualData[postid].answers[id].votes.totalVotes++;
    manualData[postid].answers[id].votes.users[username] = 1;
}

export function answerDownVote(postid, id, username) {
    if (manualData[postid].answers[id].votes.users[username] === -1) return;
    if (manualData[postid].answers[id].votes.users[username] === 1) manualData[postid].answers[id].votes.totalVotes--;

    manualData[postid].answers[id].votes.totalVotes--;
    manualData[postid].answers[id].votes.users[username] = -1;
}


export var usersData = [
	{
		"id": 1,
		"username": "tnmy",
		"role": "user",
		"password": "tnmy"
	},
	{
		"id": 2,
		"username": "admin",
		"role": "admin",
		"password": "admin"
	},
	{
		"id": 3,
		"username": "poochi",
		"role": "user",
		"password": "poochi"
	},
	{
		"id": 4,
		"username": "sundr",
		"role": "user",
		"password": "sundr"
	},
	{
		"id": 5,
		"username": "sid",
		"role": "user",
		"password": "sid"
	},
	{
		"id": 6,
		"username": "harshit",
		"role": "user",
		"password": "harshit"
	}
]

export function deleteUser(data) {
    usersData = usersData.filter((usr) => usr.username !== data);
}