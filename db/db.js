const Sequelize = require('sequelize');
db = new Sequelize('learningsystem', 'root', 'root', {
        host: 'localhost',
        dialect: 'sqlite',      
          storage: './lms.db'
})
const Course = db.define('courses', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})
const Batch = db.define('batches', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})
const Subject = db.define('subjects', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})
const Teacher = db.define('teachers', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mobile: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})
const Lecture = db.define('lectures', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
}, {
    timestamps: false
})
const Student = db.define('students', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    mobile: {
        type: Sequelize.STRING
    },
    email: {
        type: Sequelize.STRING
    }
}, {
    timestamps: false
})
Batch.belongsTo(Course)
Subject.belongsTo(Course)
Teacher.belongsTo(Subject)
Lecture.belongsTo(Batch)
Lecture.belongsTo(Subject)
Lecture.belongsTo(Teacher)
Student.belongsTo(Batch)
Batch.belongsToMany(Student, {
    through: "BatchStudent"
});
Student.belongsToMany(Batch, {
    through: "BatchStudent"
});

db.sync()
    .then(() => console.log("Db Synced"))
    .catch((err) => console.log("Error while creating db"))

module.exports = {
    Course,
    Batch,
    Teacher,
    Subject,
    Student,
    Lecture
}
