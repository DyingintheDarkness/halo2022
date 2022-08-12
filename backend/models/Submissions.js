const { Schema, model } = require('mongoose');
const submissionSchema = new Schema({
    key: {
        type: String,
        required: true,
        trim: true,
    },
    event: {
        type: String,
        required: true,
        trim: true
    },
    coordinator: {
        type: {
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                required: true,

            },
            email: {
                type: String,
                required: true,
                trim: true,
                unique: true
            },
            contact: {
                type: Number,
                required: true,
                trim: true,
                unique: true,

            }

        }

    },
    participants: {
        type: [
            {
                name: {
                    type: String,
                    required: true,
                },
                image: {
                    type: String,
                    required: true,
                },
                contact: {
                    type: Number,
                    required: true,
                    trim: true,
                    unique: true,

                }
            }

        ],
        required: true,
    },
});

const Submissions = model("Submission", submissionSchema);
module.exports = Submissions;
