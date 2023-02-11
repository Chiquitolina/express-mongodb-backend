import { Schema, model } from "mongoose"

const clothSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    imagen: {
        type: String,
        required: false,
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
    },
    vendida: {
        type: Boolean
    }},
{
    timestamps: true,
    versionKey: false,
})

export default model('Cloth', clothSchema)