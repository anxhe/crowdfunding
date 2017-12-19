const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const dotenv = require("dotenv").load();
const bcryptSalt = 10;

const User = require('../models/User');
const Cause = require('../models/Cause');

mongoose.connect(process.env.DBURL || 'mongodb://localhost/crowdfunding');

const salt = bcrypt.genSaltSync(bcryptSalt);
const password = '1';
const encryptedPass = bcrypt.hashSync(password, salt);

let createdUsers = [];

User.collection.drop();
Cause.collection.drop();

const users = [
  {
    name: 'Admin',
    password: encryptedPass,
    email: 'admin@example.com',
    role: 'admin'
  },
  {
    name: 'Antonio',
    password: encryptedPass,
    email: 'antonio@example.com',
    role: 'creatorcause'
  },
  {
    name: 'Maria',
    password: encryptedPass,
    email: 'maria@example.com',
    role: 'creatorcause'
  },
  {
    name: 'Paul',
    password: encryptedPass,
    email: 'paul@example.com',
    role: 'creatorcause'
  },
  {
    name: 'Andrea',
    password: encryptedPass,
    email: 'andrea@example.com',
    role: 'creatorcause'
  },
  {
    name: 'Rosa',
    password: encryptedPass,
    email: 'rosa@example.com',
    role: 'creatorcause'
  },
  {
    name: 'Fermin',
    password: encryptedPass,
    email: 'fermin@example.com',
    role: 'creatorcause'
  },
  {
    name: 'Toni',
    password: encryptedPass,
    email: 'toni@example.com',
    role: 'creatorcause'
  },
  {
    name: 'Carlos',
    password: encryptedPass,
    email: 'carlos@example.com',
    role: 'creatorcause'
  },
  {
    name: 'Enriqueta',
    password: encryptedPass,
    email: 'e@example.com',
    role: 'user',
  },
  {
    name: 'Fernanda',
    password: encryptedPass,
    email: 'fer@example.com',
    role: 'user',
  },
  {
    name: 'pepita',
    password: encryptedPass,
    email: 'pepi@example.com',
    role: 'user',
  },
  {
    name: 'anye',
    password: encryptedPass,
    email: 'anxhe@example.com',
    role: 'user',
  },
];

User.create(users, (err, usersResult) => {
  if (err) {
    throw err;
  }
  createdUsers = usersResult;



  const budgetItems = [
    {"concept":"Incredible Wooden Table","quantity": 1,"cost":97},
    {"concept":"Enormous Plastic Knife","quantity":2,"cost":14},
    {"concept":"Sleek Wool Lamp","quantity":4,"cost":77},
    {"concept":"Enormous Wooden Bottle","quantity":5,"cost":98},
    {"concept":"Rustic Steel Knife","quantity":6,"cost":100},
    {"concept":"Lightweight Granite Bench","quantity":8,"cost":100},
    {"concept":"Synergistic Marble Bottle","quantity":2,"cost":97},
    {"concept":"Rustic Wooden Bench","quantity": 1,"cost":35},
  ];

  const causes = [{
        name: 'Homeless Font',
        _creator: createdUsers[1]._id,
        objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
        videourl: "https://www.youtube.com/watch?v=6JaouosFSQ8",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        deadline: Date("2018-2-10T00:00:00.000Z"),
        budget: budgetItems,
        status: 'approved',
        members: [],
        donations: []

    },
    {
        name: 'The Breath Holder',
        _creator: createdUsers[1]._id,
        objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
        videourl: "https://www.youtube.com/watch?v=PH1LJ58sRM8",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        deadline: Date("2017-12-10T00:00:00.000Z"),
        budget: budgetItems,
        status: 'approved',
        members: [],
        donations: []
    },
    {
        name: 'La Gran Pelea',
        _creator: createdUsers[1]._id,
        objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
        videourl: "https://www.youtube.com/watch?v=x6ggBMxrWSs",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        deadline: Date("2017-12-10T00:00:00.000Z"),
        budget: budgetItems,
        status: 'approved',
        members: [],
        donations: []
    },
    {
        name: 'It’s Payback time',
        _creator: createdUsers[2]._id,
        objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
        videourl: "https://www.youtube.com/watch?v=jfl6E0BcP9o",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        deadline: Date("2017-12-10T00:00:00.000Z"),
        budget: budgetItems,
        status: 'approved',
        members: [],
        donations: []
    },
    {
        name: 'Friends Are Waiting Budweiser',
        _creator: createdUsers[2]._id,
        objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
        videourl: "https://www.youtube.com/watch?v=U4svUtchGQg",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        deadline: Date("2017-12-10T00:00:00.000Z"),
        budget: budgetItems,
        status: 'approved',
        members: [],
        donations: []
    },
    {
        name: 'Friends Are Waiting Budweiser',
        _creator: createdUsers[2]._id,
        objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
        videourl: "https://www.youtube.com/watch?v=U4svUtchGQg",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        deadline: Date("2018-10-10T00:00:00.000Z"),
        budget: budgetItems,
        status: 'approved',
        members: [],
        donations: []
    },

    {
        name: 'Long Live New York',
        _creator: createdUsers[3]._id,
        objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
        videourl: "https://www.youtube.com/watch?v=TZpYSArGvgQ",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        deadline: Date("2018-3-10T00:00:00.000Z"),
        budget: budgetItems,
        status: 'approved',
        members: [],
        donations: []
    },
    {
        name: 'The Orphanage',
        _creator: createdUsers[3]._id,
        objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
        videourl: "https://www.youtube.com/watch?v=TZpYSArGvgQ",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        deadline: Date("2018-3-10T00:00:00.000Z"),
        budget: budgetItems,
        status: 'pending',
        members: [],
        donations: []
    },
    {
        name: 'Sounds from torture',
        _creator: createdUsers[3]._id,
        objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
        videourl: "https://www.youtube.com/watch?v=tTq2FYkrWFc",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        deadline: Date("2018-10-10T00:00:00.000Z"),
        budget: budgetItems,
        status: 'pending',
        members: [],
        donations: []
    },
    {
        name: 'Homeless Font',
        _creator: createdUsers[4]._id,
        objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
        videourl: "https://www.youtube.com/watch?v=6JaouosFSQ8",
        description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
        deadline: Date("2018-10-10T00:00:00.000Z"),
        budget: budgetItems,
        status: 'approved',
        members: [],
        donations: []

      },
      {
          name: 'The Breath Holder',
          _creator: createdUsers[4]._id,
          objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
          videourl: "https://www.youtube.com/watch?v=PH1LJ58sRM8",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
          deadline: Date("2018-1-10T00:00:00.000Z"),
          budget: budgetItems,
          status: 'approved',
          members: [],
          donations: []
      },
      {
          name: 'La Gran Pelea',
          _creator: createdUsers[4]._id,
          objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
          videourl: "https://www.youtube.com/watch?v=x6ggBMxrWSs",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
          deadline: Date("2019-10-10T00:00:00.000Z"),
          budget: budgetItems,
          status: 'rejected',
          members: [],
          donations: []
      },
      {
          name: 'It’s Payback time',
          _creator: createdUsers[5]._id,
          objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
          videourl: "https://www.youtube.com/watch?v=jfl6E0BcP9o",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
          deadline: Date("2018-2-10T00:00:00.000Z"),
          budget: budgetItems,
          status: 'rejected',
          members: [],
          donations: []
      },
      {
          name: 'Friends Are Waiting Budweiser',
          _creator: createdUsers[5]._id,
          objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
          videourl: "https://www.youtube.com/watch?v=U4svUtchGQg",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
          deadline: Date("2018-3-17T00:00:00.000Z"),
          budget: budgetItems,
          status: 'approved',
          members: [],
          donations: []
      },
      {
          name: 'Friends Are Waiting Budweiser',
          _creator: createdUsers[5]._id,
          objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
          videourl: "https://www.youtube.com/watch?v=U4svUtchGQg",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
          deadline: Date("2018-2-10T00:00:00.000Z"),
          budget: budgetItems,
          status: 'approved',
          members: [],
          donations: []
      },

      {
          name: 'Long Live New York',
          _creator: createdUsers[6]._id,
          objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
          videourl: "https://www.youtube.com/watch?v=TZpYSArGvgQ",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
          deadline: Date("2018-3-17T00:00:00.000Z"),
          budget: budgetItems,
          status: 'approved',
          members: [],
          donations: []
      },
      {
          name: 'The Orphanage',
          _creator: createdUsers[6]._id,
          objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
          videourl: "https://www.youtube.com/watch?v=TZpYSArGvgQ",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
          deadline: Date("2018-1-17T00:00:00.000Z"),
          budget: budgetItems,
          status: 'approved',
          members: [],
          donations: []
      },
      {
          name: 'Feelingnuts',
          _creator: createdUsers[6]._id,
          objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
          videourl: "https://www.youtube.com/watch?v=tTq2FYkrWFc",
          description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
          deadline: Date("2018-3-17T00:00:00.000Z"),
          budget: budgetItems,
          status: 'approved',
          members: [],
          donations: []
      },
      {
            name: 'Sounds from torture',
            _creator: createdUsers[7]._id,
            objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
            videourl: "https://www.youtube.com/watch?v=tTq2FYkrWFc",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
            deadline: Date("2018-12-17T00:00:00.000Z"),
            budget: budgetItems,
            status: 'approved',
            members: [],
            donations: []
      },
      {
            name: 'Homeless Font',
            _creator: createdUsers[7]._id,
            objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
            videourl: "https://www.youtube.com/watch?v=6JaouosFSQ8",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
            deadline: Date("2018-10-17T00:00:00.000Z"),
            budget: budgetItems,
            status: 'approved',
            members: [],
            donations: []

        },
        {
            name: 'The Breath Holder',
            _creator: createdUsers[7]._id,
            objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
            videourl: "https://www.youtube.com/watch?v=PH1LJ58sRM8",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
            deadline: Date("2017-12-17T00:00:00.000Z"),
            budget: budgetItems,
            status: 'approved',
            members: [],
            donations: []
        },
        {
            name: 'La Gran Pelea',
            _creator: createdUsers[8]._id,
            objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
            videourl: "https://www.youtube.com/watch?v=x6ggBMxrWSs",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
            deadline: Date("2017-12-17T00:00:00.000Z"),
            budget: budgetItems,
            status: 'approved',
            members: [],
            donations: []
        },
        {
            name: 'It’s Payback time',
            _creator: createdUsers[8]._id,
            objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
            videourl: "https://www.youtube.com/watch?v=jfl6E0BcP9o",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
            deadline: Date("2017-12-17T00:00:00.000Z"),
            budget: budgetItems,
            status: 'approved',
            members: [],
            donations: []
        },
        {
            name: 'Friends Are Waiting Budweiser',
            _creator: createdUsers[8]._id,
            objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
            videourl: "https://www.youtube.com/watch?v=U4svUtchGQg",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
            deadline: Date("2018-10-10T00:00:00.000Z"),
            budget: budgetItems,
            status: 'approved',
            members: [],
            donations: []
        },
        {
            name: 'Friends Are Waiting Budweiser',
            _creator: createdUsers[8]._id,
            objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
            videourl: "https://www.youtube.com/watch?v=U4svUtchGQg",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
            deadline: Date("2018-8-10T00:00:00.000Z"),
            budget: budgetItems,
            status: 'approved',
            members: [],
            donations: []
        },
        {
            name: 'Long Live New York',
            _creator: createdUsers[8]._id,
            objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
            videourl: "https://www.youtube.com/watch?v=TZpYSArGvgQ",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
            deadline: Date("2018-1-10T00:00:00.000Z"),
            budget: budgetItems,
            status: 'approved',
            members: [],
            donations: []
        },
        {
            name: 'The Orphanage',
            _creator: createdUsers[7]._id,
            objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
            videourl: "https://www.youtube.com/watch?v=TZpYSArGvgQ",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
            deadline: Date("2018-2-10T00:00:00.000Z"),
            budget: budgetItems,
            status: 'rejected',
            members: [],
            donations: []
        },
        {
            name: 'Feelingnuts',
            _creator: createdUsers[7]._id,
            objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
            videourl: "https://www.youtube.com/watch?v=tTq2FYkrWFc",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
            deadline: Date("2018-2-10T00:00:00.000Z"),
            budget: budgetItems,
            status: 'rejected',
            members: [],
            donations: []
        },
        {
            name: 'Sounds from torture',
            _creator: createdUsers[7]._id,
            objectives: ["Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet", "Lorem ipsum dolor sit amet"],
            videourl: "https://www.youtube.com/watch?v=tTq2FYkrWFc",
            description: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.",
            deadline: Date("2018-2-10T00:00:00.000Z"),
            budget: budgetItems,
            status: 'approved',
            members: [],
            donations: []
        }
  ];

  Cause.create(causes, (err, usersResult) => {
    if (err) {
      throw err;
    }
    console.log("Causes created");
    process.exit();
  });

  console.log("Users created");
});
