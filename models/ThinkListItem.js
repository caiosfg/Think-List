const {Schema, model} = require('mongoose')

const ThinkListItemSchema = new Schema (
    {
        description:{
            type: String,
            required: true,
        },
        date:{
            type:Date,
            default: Date.now,
        },
        pipedrive:{
            type:String,
            required: true,
        }
    }
)

const ThinkListItem = model('thinkListItem', ThinkListItemSchema)

module.exports = ThinkListItem