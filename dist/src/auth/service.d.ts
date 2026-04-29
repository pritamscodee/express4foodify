export interface RegisterData {
    name: string;
    email: string;
    password: string;
    role?: string;
}
export interface LoginData {
    email: string;
    password: string;
}
export declare const registerUser: (userData: RegisterData) => Promise<{
    user: {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    token: string;
}>;
export declare const loginUser: (loginData: LoginData) => Promise<{
    user: {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    token: string;
}>;
