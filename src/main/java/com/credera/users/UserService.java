package com.credera.users;

import org.apache.catalina.User;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.List;

/**
 * Created by Mitchell on 2/19/17.
 */

@Service
public class UserService {

    public UserModel[] getAllUsers() {
        RestTemplate rt = new RestTemplate();
        UserModel[] pm = rt.getForObject("https://podsurfer-spring3.herokuapp.com/api/user/", UserModel[].class);
        for(UserModel pmm : pm)
            System.out.println(pmm);
        return pm;
    }

    public UserModel getUserInfo() {
        RestTemplate rt = new RestTemplate();
        UserModel you = rt.getForObject("https://podsurfer-spring3.herokuapp.com/api/user/", UserModel.class);
        System.out.println(you);
        return you;
    }
}
