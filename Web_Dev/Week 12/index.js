require("dotenv").config({ quiet: true });
const express = require("express");
const app = express();
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");
const { authMiddleware } = require("./middleware");
const { organizationModel, userModel } = require("./models");

// username, password  | USERS table
// organization  | ORGANIZATIONS table
// boards  | BOARDS TABLE
// issues  | ISSUES TABLE
mongoose.connect(process.env.MONGO_DB);

app.use(express.json());

let BOARD_ID = 1;
let ISSUES_ID = 1;

const BOARDS = [];
const ISSUES = [];

// Create endpoints
app.post('/signup', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await userModel.findOne({
        username
    })
    if (existingUser) {
        res.status(403).json({
            message: "User already exists"
        })
        return;
    }

    const newUser = await userModel.create({
        username,
        password
    })
    res.json({
        id: newUser._id,
        message: "User signed up"
    })

})

app.post('/signin', async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;

    const existingUser = await userModel.findOne({
        username,
        password
    })
    if (existingUser) {
        const token = jwt.sign({
            userId: existingUser._id
        }, process.env.JWT_SECRET)

        return res.json({
            token
        })
    }
    res.status(403).json({
        message: "Invalid username and password"
    })

})

app.post('/organization', authMiddleware, async (req, res) => {
    const userId = req.userId;

    const newOrg = await organizationModel.create({
        title: req.body.title,
        description: req.body.description,
        admin: userId,
        members: []
    })

    res.json({
        message: "Org created",
        id: newOrg._id
    })
})

app.post('/add-member-to-organization', authMiddleware, async (req, res) => {
    const userId = req.userId;
    const organizationId = req.body.organizationId;
    const memberUsername = req.body.memberUsername;

    const organization = await organizationModel.findOne({
        _id: organizationId
    })
    // can also use -> if (!organization || organization.admin !== new mongoose.Types.ObjectId(userId))
    if (!organization || organization.admin.toString() !== userId) {
        res.status(411).json({
            message: "Either this org doesn't exist or you are not admin of this org"
        });
        return;
    }
    const memberUser = await userModel.findOne({
        username: memberUsername
    })

    if (!memberUser) {
        res.status(411).json({
            message: "No user with this username in our db"
        });
        return;
    }

    await organizationModel.updateOne({
        _id: organizationId
    }, {
        $push: {
            "members": memberUser._id
        }
    })

    res.json({
        message: "New member added!"
    })

})

app.post('/board', (req, res) => {

})

app.post('/issue', (req, res) => {

})

// READ endpoint => backend.trello.com/boards?organizationId=2
app.get("/organization", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const organizationId = req.query.organizationId;

    const organization = await organizationModel.findOne({
        _id: organizationId
    });

    if (!organization || organization.admin.toString() !== userId) {
        res.status(411).json({
            message: "Either this org doesn't exist or you are not an admin of this org"
        })
        return
    }

    // res.json({
    //     organization: {
    //         ...organization,
    //         members: organization.members.map(memberId => {
    //             const user = users.find(user => user.id === memberId);
    //             return {
    //                 id: user.id,
    //                 username: user.username
    //             }
    //         })
    //     }
    // })
    // -----------------------------
    // res.json({
    //     organization: organization
    // })
    // --------------------------------
    const members = await userModel.findMany({
        _id: organization.members
    })
    
    res.json({
        organization: {
            title: organization.title,
            description: organization.description,
            members: members.map(m => ({
                username: m.username,
                id: m._id
            }))
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
app.delete("/members", authMiddleware, async (req, res) => {
    const userId = req.userId;
    const organizationId = req.body.organizationId;
    const memberUsername = req.body.memberUsername;

    const organization = await organizationModel.findOne({
        _id: organizationId
    });

    if (!organization || organization.admin.toString() !== userId) {
        res.status(411).json({
            message: "Either this org doesn't exist or you are not an admin of this org"
        })
        return
    }

    const memberUser = await userModel.findOne({
        username: memberUsername
    })

    if (!memberUser) {
        res.status(411).json({
            message: "No user with this username exists in our database"
        })
        return
    }

    // ANOTHER WAY OF WRITING BELOW LOGIC....   
    // organization.members.push(memberUser._id);
    // await organization.save()
    
    await organizationModel.updateOne({
        _id: organizationId,
    }, {
        "$pullAll": {            //NOTE: use $pullAll if you have got an array of values
            members: [memberUser._id]
        }
        // {    NOTE: THIS LOGIC CAN ALSO BE USED IF ($pull -> QUERY BASED)
        //     "$pull": {
        //         members: memberUser._id
        //     }
        // }
    })
    // THE ABOVE LOGIC CAN ALSO BE WRITTEN AS SUCH.
    // organization.members = organization.members.filter(x => x !== memberUser._id);
    // await organization.save();

    res.json({
        message: "member deleted!"
    })
})

const PORT = process.env.PORT;
app.listen(PORT, () => {
    console.log(`Port on ${PORT}`);
})