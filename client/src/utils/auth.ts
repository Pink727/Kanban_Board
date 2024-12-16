import jwtDecode from 'jwt-decode';

class AuthService {
  // TODO: implement getProfile method
  getProfile() {
    const token = this.getToken();
    return token ? jwtDecode(token) : null;
  }

  // TODO: implement loggedIn method
  loggedIn() {
    const token = this.getToken();
    return !!token && !this.isTokenExpired(token);
  }

  // TODO: implement isTokenExpired method
  isTokenExpired(token: string) {
    try {
      const decoded: any = jwtDecode(token);
      return decoded.exp < Date.now() / 1000;
    } catch (error) {
      return false;
    }
  }

  // TODO: implement getToken method
  getToken(): string {
    return localStorage.getItem('id_token') || '';
  }

  // TODO: implement login method
  login(idToken: string) {
    localStorage.setItem('id_token', idToken);
    window.location.assign('/');
  }

  // TODO: implement logout method
  logout() {
    localStorage.removeItem('id_token');
    window.location.assign('/login');
  }
}

export default new AuthService();
