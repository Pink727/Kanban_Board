/**
 * This module provides the API call for user login.
 * It sends a POST request to the /auth/login endpoint with the user's login information.
 * If the login is successful, it returns the response data which includes the JWT token.
 */

import { UserLogin } from "../interfaces/UserLogin";

const login = async (userInfo: UserLogin) => {
  // TODO: implement login API call
  try {
    const response = await fetch('/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    if (!response.ok) {
      throw new Error('Failed to login');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error during login:', error);
    throw error;
  }
};

export { login };