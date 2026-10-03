import connectDB from "@/lib/mongodb";
import Profile from "@/models/profile";

export async function POST(req) {
    try {
        await connectDB();
        const formData = await req.formData();
        const handle = formData.get("handle")?.toString().trim();
        const linksValue = formData.get("links")?.toString() || "[]";
        const links = JSON.parse(linksValue);
        const profilePictureFile = formData.get("profilePicture");

        if (!handle || !(profilePictureFile instanceof File) || profilePictureFile.size === 0) {
            return new Response(JSON.stringify({ error: "Handle and profile picture are required" }), { status: 400 });
        }

            const allowedImageTypes = ["image/jpeg", "image/png"];
            const allowedImageExtensions = [".jpg", ".jpeg", ".png"];
            const fileExtension = profilePictureFile.name.toLowerCase().slice(profilePictureFile.name.lastIndexOf("."));
            if (!allowedImageTypes.includes(profilePictureFile.type) || !allowedImageExtensions.includes(fileExtension)) {
                return new Response(JSON.stringify({ error: "Only JPG, PNG, or JPEG files are allowed" }), { status: 400 });
            }

        const imageBuffer = Buffer.from(await profilePictureFile.arrayBuffer());
        const profilePicture = `data:${profilePictureFile.type};base64,${imageBuffer.toString("base64")}`;
        const profile = new Profile({ handle, profilePicture, links });
        await profile.save();
        return new Response(JSON.stringify(profile), { status: 201 });
    } catch (error) {
        console.error("Error creating profile:", error);
        return new Response(JSON.stringify({ error: "Failed to create profile" }), { status: 500 });
    }
}

export async function GET(req) {
    try {
        await connectDB();
        const handle = new URL(req.url).searchParams.get("handle")?.trim();
        if (handle) {
            const profile = await Profile.findOne({ handle }).lean();
            return new Response(JSON.stringify({
                exists: Boolean(profile),
                profile,
            }), { status: 200 });
        }

        const profiles = await Profile.find();
        return new Response(JSON.stringify(profiles), { status: 200 });
    } catch (error) {
        console.error("Error fetching profiles:", error);
        return new Response(JSON.stringify({ error: "Failed to fetch profiles" }), { status: 500 });
    }
}