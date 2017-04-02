package com.credera.users;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
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
        String result = usrService.loginExistingUser(user.getEmail(), user.getPassword());
        return result;
    }

    @RequestMapping(
            value = "/create",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE
    )
    public @ResponseBody String createUser(
            @RequestHeader HttpHeaders headers,
            HttpEntity<String> entity) {
        String result = usrService.createUser(headers, entity);
        return result;
    }

    @RequestMapping(
            value = "/me",
            method = RequestMethod.GET
    )
    public String getYourInfo(@RequestHeader HttpHeaders headers) {
        return usrService.getUserInfo(headers);
    }

    @RequestMapping(
            value = "/update",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public String updateMe(
            @RequestHeader HttpHeaders headers,
            HttpEntity<String> entity) {
        String result = usrService.update(headers, entity);
        return result;
    }
}
