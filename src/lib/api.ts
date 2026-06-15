import { error } from "console"

const API_URL = process.env.NEXT_PUBLIC_API_URL

export async function apiRequest(
    endpoint: string,
    options: RequestInit = {}
) {
    const response = await fetch(`${API_URL}${endpoint}`,
        {
            ...options,
            headers: {
                "Content-Type": "application/json",
                ...(options.headers || {}),
            },
        }
    );

    if (!response.ok) {
        throw new error(`API Error: ${response.status}`);
    }

    return response.json();
}