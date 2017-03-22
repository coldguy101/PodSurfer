package com.credera.reviews;

import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.util.List;

/**
 * Created by Mitchell on 2/19/17.
 */

@Service
public class ReviewService {

    public ReviewModel[] getAllReviews() {
        RestTemplate rt = new RestTemplate();
        ReviewModel[] pm = rt.getForObject("https://podsurfer-spring3.herokuapp.com/api/review/", ReviewModel[].class);
        for(ReviewModel pmm : pm)
            System.out.println(pmm);
        return pm;
    }

    public String createNewReview(ReviewModel rev) {
        RestTemplate rt = new RestTemplate();

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);

       // HttpEntity<MultiValueMap<ReviewModel, String>> request = new HttpEntity<>(rev, headers);
       // ResponseEntity<String> auth = rt.postForEntity("https://podsurfer-spring#.herokuapp.com/api/review/", request, String.class);

        //System.out.println(auth.getBody());
        //return auth.getBody();
        return "Fail";
    }

    /*public String loginExistingUser(String email, String pass) {
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
    }*/

    public String deleteOldReview(HttpHeaders headers) {
        RestTemplate rt = new RestTemplate();

        HttpEntity<HttpHeaders> head = new HttpEntity<>(headers);

        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/review/:id", HttpMethod.DELETE, head, String.class);

        return res.getBody();
    }

    public String getMyReviews(HttpHeaders headers) {
        RestTemplate rt = new RestTemplate();

        HttpEntity<HttpHeaders> head = new HttpEntity<>(headers);

        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/review/mine", HttpMethod.GET, head, String.class);

        return res.getBody();
    }

    public String updateReview(String id, HttpHeaders headers, MultiValueMap<String, String> body) {
        RestTemplate rt = new RestTemplate();

        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<>(body, headers);
        //HttpEntity<HttpHeaders> head = new HttpEntity<>(headers);

        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/review/" + id, HttpMethod.PUT, request, String.class);

        return res.getBody();
    }
}
