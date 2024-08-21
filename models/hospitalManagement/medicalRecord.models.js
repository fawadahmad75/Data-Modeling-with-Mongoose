import mongoose, { Mongoose } from "mongoose";

const visitDetailsSchema = new Mongoose.Schema({
    lastVisitDate :{
        type: Date,
        required: true
    },
    followUpDate: {
        type: Date,
    }
})

const medicalRecordSchema = new mongoose.Schema({
    patient:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Patient"
    },
    doctor:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Doctor"
    },
    visitDetails: {type: visitDetailsSchema},
    symptoms:{
        type: String,
        required: true,
    },
    diagnosis: {
        type: String,
        required: true,
    },
    prescription:{
        type: String,
        required: true,
    }

}, {timestamps: true})

export const MedicalRecord = mongoose.model("MedicalRecord", medicalRecordSchema)