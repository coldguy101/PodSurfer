package com.credera.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

import java.awt.*;

/**
 * Created by Mitchell on 2/19/17.
 */

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService usrService;

    @RequestMapping(value = "/login", method = RequestMethod.POST, consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE)
    public @ResponseBody String login(UserModel user) {
        //System.out.println("Email: " + user.getEmail() + " Pass: " + user.getPassword());
        String result = usrService.loginExistingUser(user.getEmail(), user.getPassword());
        //System.out.println("Response: " + result);
        return result;
    }

    /*@RequestMapping("/user")
    public UserModel[] getUsers() {
        return usrService.getAllUsers();
    }*/

    @RequestMapping("/me")
    public UserModel getYourInfo() {
        return usrService.getUserInfo();
    }

}
