package com.credera.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Mitchell on 2/19/17.
 */
@RestController
public class UserController {

    @Autowired
    private UserService usrService;

    @RequestMapping("/api/user")
    public UserModel[] getUsers() {
        return usrService.getAllUsers();
    }

    @RequestMapping("/api/user/me")
    public UserModel getYourInfo() {
        return usrService.getUserInfo();
    }

}
