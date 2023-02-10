import { Schema, model } from "mongoose"

const clothSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    marca: {
        type: String,
        required: true,
    },
    talle: {
        type: String,
        required: true,
    },
    paisfabricacion: {
        type: String,
        required: true,
    },
    medidaancho: {
        type: Number,
        required: true,
    },
    medidaalto: {
        type: Number,
        required: true,
    },
    precio: {
        type: Number,
        required: true,
    }},
{
    timestamps: true
})

export default model('Cloth', clothSchema)