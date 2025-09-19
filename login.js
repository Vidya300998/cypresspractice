
import {LoginPage} from "./login_page"
const loginpage= new LoginPage()
let mainpage= new LoginPage()
it('sample', function() {
    loginpage.navigate('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        loginpage.enterUsername('Admin');
        loginpage.enterPassword('admin123');
        loginpage.clickLogin();
        mainpage.clickAdmin();
})