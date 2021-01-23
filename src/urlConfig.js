const baseUrl = "https://pure-lowlands-62723.herokuapp.com";

export const api = `${baseUrl}/api`;

export const generatePublicUrl = (fileName) => {
    return `${baseUrl}/public/${fileName}`;
};