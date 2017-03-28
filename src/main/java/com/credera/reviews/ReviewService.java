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

    public String createReview(HttpHeaders headers, HttpEntity<String> entity) {
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> auth = rt.postForEntity("https://podsurfer-spring3.herokuapp.com/api/review/", entity, String.class);
        System.out.println(auth.getBody());
        return auth.getBody();
    }

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

    public String updateReview(HttpHeaders headers, HttpEntity<String> entity, String id) {
        RestTemplate rt = new RestTemplate();

        rt.put("https://podsurfer-spring3.herokuapp.com/api/podcast/" + id, entity);
        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/review/" + id, HttpMethod.PUT, entity, String.class);

        return res.getBody();
    }
}
