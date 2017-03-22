package com.credera.users;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

/**
 * Created by Mitchell on 2/19/17.
 */

@Service
public class UserService {

    public String loginExistingUser(String email, String pass) {
        RestTemplate rt = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> data = new LinkedMultiValueMap<>();
        data.add("email", email);
        data.add("password", pass);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(data, headers);
        ResponseEntity<String> auth = rt.postForEntity("https://podsurfer-spring3.herokuapp.com/auth/local/", request, String.class);

        System.out.println(auth.getBody());
        return auth.getBody();
    }

    public String createUser(String name, String email, String pass) {
        RestTemplate rt = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

        MultiValueMap<String, String> data = new LinkedMultiValueMap<>();
        data.add("email", email);
        data.add("password", pass);
        data.add("name", name);

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(data, headers);
        ResponseEntity<String> auth = rt.postForEntity("https://podsurfer-spring3.herokuapp.com/api/user", request, String.class);

        System.out.println(auth.getBody());
        return auth.getBody();
    }

    /*public UserModel[] getAllUsers() {
        RestTemplate rt = new RestTemplate();
        UserModel[] pm = rt.getForObject("https://podsurfer-spring3.herokuapp.com/api/user/", UserModel[].class);
        for(UserModel pmm : pm)
            System.out.println(pmm);
        return pm;
    }*/

    public String getUserInfo(HttpHeaders headers) {
        RestTemplate rt = new RestTemplate();

        HttpEntity<HttpHeaders> head = new HttpEntity<>(headers);

        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/user/me", HttpMethod.GET, head, String.class);

        return res.getBody();
    }

    public String update(HttpHeaders headers) {
        RestTemplate rt = new RestTemplate();

        HttpEntity<HttpHeaders> head = new HttpEntity<>(headers);

        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/user/", HttpMethod.PUT, head, String.class);

        return res.getBody();
    }
}
