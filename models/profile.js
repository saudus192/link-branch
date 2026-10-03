import mongoose from "mongoose";

const profileSchema = new mongoose.Schema(
    {
        handle: {
            type: String,
            required: true,
            unique: true,
        },
        profilePicture: {
            type: String,
            required: true,
        },
        links: [
            {
                linkName: {
                    type: String,
                    required: true,
                },
                link: {
                    type: String,
                    required: true,
                }
            }
        ],
        createdAt: {
            type: Date,
            default: Date.now,
        },
    },
    { timestamps: true }
);

const Profile = mongoose.models.Profile || mongoose.model("Profile", profileSchema);
export default Profile;