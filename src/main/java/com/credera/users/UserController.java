package com.credera.users;

import com.credera.podcasts.PodcastModel;
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
        System.out.println("Email: " + user.getEmail() + " Pass: " + user.getPassword());
        String result = usrService.loginExistingUser(user.getEmail(), user.getPassword());
        System.out.println("Response: " + result);
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
        System.out.println("Response:" + result);
        return result;
    }

    @RequestMapping(
            value = "/me",
            method = RequestMethod.GET
    )
    public String getYourInfo(@RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
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
        System.out.println("Response:" + result);
        return result;
    }

    @RequestMapping(
            value = "/recommended",
            method = RequestMethod.GET
    )
    public PodcastModel[] recommendedPodcasts(
            @RequestHeader HttpHeaders headers) {
        System.out.println("Got Here:" + headers);
        return usrService.recommended(headers);
    }

}
