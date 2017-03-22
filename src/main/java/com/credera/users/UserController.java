package com.credera.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Mitchell on 2/19/17.
 */

@RestController
@RequestMapping("/api/user")
public class UserController {

    @Autowired
    private UserService usrService;

    @RequestMapping(
            value = "/login",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE
    )
    public @ResponseBody String login(UserModel user) {
        System.out.println("Email: " + user.getEmail() + " Pass: " + user.getPassword());
        String result = usrService.loginExistingUser(user.getEmail(), user.getPassword());
        System.out.println("Response: " + result);
        return result;
    }

    @RequestMapping("/me")
    public String getYourInfo(@RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
        return usrService.getUserInfo(headers);
    }

    @RequestMapping("/update")
    public String updateMe(@RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
        return usrService.update(headers);
    }

    @RequestMapping(
            value = "/create",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE
    )
    public @ResponseBody String createUser(UserModel user) {
        System.out.println("Email: " + user.getEmail() + " Pass: " + user.getPassword());
        String result = usrService.createUser(user.getName(), user.getEmail(), user.getPassword());
        System.out.println("Response:" + result);
        return result;
    }

    /*@RequestMapping("/user")
    public UserModel[] getUsers() {
        return usrService.getAllUsers();
    }*/

}
