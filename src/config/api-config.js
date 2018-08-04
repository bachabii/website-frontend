let backendHost;

if (process.env.REACT_APP_ENV === 'production') {
    backendHost = process.env.REACT_APP_API_SERVICE_URL;
} else {
    backendHost = 'http://localhost:3030';
}

export const API_ROOT = `${backendHost}/api`;
