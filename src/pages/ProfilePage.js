import React, { useState, useEffect } from "react";

const ProfilePage = () => {
    const [profile, setProfile] = useState(null);

    useEffect(() => {
        fetch("/auth/profile", {
            credentials: "include", // Include cookies for authentication
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch profile");
                }
                return response.json();
            })
            .then((data) => setProfile(data))
            .catch((error) => console.error("Error fetching profile:", error));
    }, []);

    if (!profile) return <p>Loading...</p>;

    return (
        <div>
            <h1>Profile</h1>
            <pre>{JSON.stringify(profile, null, 2)}</pre>
        </div>
    );
};

export default ProfilePage;
