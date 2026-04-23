const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const { authMiddleware } = require("./middleware");
// username, password  | USERS table
// organization  | ORGANIZATIONS table
// boards  | BOARDS TABLE
// issues  | ISSUES TABLE
app.use(express.json());

let USERS_ID = 1;
let ORGANIZATION_ID = 1;
let BOARD_ID = 1;
let ISSUES_ID = 1;

const users = [];
const organizations = [];
const boards = [];
const issues = [];

// Create endpoints
app.post('/signup', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username);
    if (userExists) {
        res.status(403).json({
            message: "User already exist"
        });
        return;
    }

    users.push({
        username, password, id: USERS_ID++
    })

    res.json({
        message: "You are signed up"
    })

    console.log(users);

})

app.post('/signin', (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const userExists = users.find(user => user.username === username && user.password === password);
    if (!userExists) {
        res.status(403).json({
            message: "Invalid credentials"
        });
        return;
    }

    const token = jwt.sign({
        userId: userExists.id
    }, "sujeet123");

    res.json({
        token
    })

    // console.log(usersExists.id);
})

app.post('/organization', authMiddleware, (req, res) => {
    const userId = req.userId;
    organizations.push({
        id: ORGANIZATION_ID++,
        title: req.body.title,
        description: req.body.description,
        admin: userId,
        members: []
    })
    res.json({
        message: "Org created",
        id: ORGANIZATION_ID - 1
    })
})

app.post('/add-member-to-organization', authMiddleware, (req, res) => {
    const userId = req.userId;
    const organizationId = parseInt(req.body.organizationId);
    const memberUserUsername = req.body.memberUserUsername;

    const organization = organizations.find(org => org.id === organizationId);

    if (!organization || organization.admin !== userId) {
        res.status(411).json({
            message: "Either this org doesn't exist or you are not admin of this org"
        });
        return;
    }

    const memberUser = users.find(u => u.username === memberUserUsername);   //Finding the id of the user

    if (!memberUser) {
        res.status(411).json({
            message: "No user with this username in our db"
        });
        return;
    }

    // organization.members = organization.members.filter(user => user.id !== memberUser.id);
    organization.members.push(memberUser.id);

    res.json({
        message: "New member added!"
    })

})

app.post('/board', (req, res) => {

})

app.post('/issue', (req, res) => {

})

// READ endpoint => backend.trello.com/boards?organizationId=2
app.get("/organization", authMiddleware, (req, res) => {
    const userId = req.userId;
    const organizationId = parseInt(req.query.organizationId);    //user will send in query parameter to ask for organization details.

    const organization = organizations.find(org => org.id === organizationId);

    console.log(userId);
    console.log(organization);
    if (!organization || organization.admin !== userId) {
        res.status(411).json({
            message: "Either this org doesn't exist or you are not an admin of this org"
        });
        return;
    }

    res.json({
        organization: {
            ...organization,
            members: organization.members.map(memberId => {
                const user = users.find(user => user.id === memberId);
                return {
                    id: user.id,
                    username: user.username
                }
            })
        }
    })
})

app.get('/boards', (req, res) => {

})

app.get('/issues', (req, res) => {

})

app.get('/members', (req, res) => {

})

// UPDATE endpoint
app.put("/issues", (req, res) => {

})

// DELETE endpoint
app.delete("/members", authMiddleware, (req, res) => {

})

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Port on ${PORT}`);
})