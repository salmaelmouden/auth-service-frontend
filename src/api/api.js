export const fetchProfile = async () => {
    try {
        const response = await fetch('http://localhost:8081/auth/profile', {
            credentials: 'include',
        });
        if (!response.ok) {
            throw new Error('Failed to fetch profile');
        }
        return await response.json();
    } catch (error) {
        console.error(error);
        throw error;
    }
};
