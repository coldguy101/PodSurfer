package com.credera.reviews;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
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

    public String createNewReview(HttpHeaders headers) {
        RestTemplate rt = new RestTemplate();

        HttpEntity<HttpHeaders> head = new HttpEntity<>(headers);

        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/review/", HttpMethod.POST, head, String.class);

        return res.getBody();
    }

    public String deleteReview(HttpHeaders headers) {
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

    public String updateReview(HttpHeaders headers) {
        RestTemplate rt = new RestTemplate();

        HttpEntity<HttpHeaders> head = new HttpEntity<>(headers);

        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/review/:id", HttpMethod.PUT, head, String.class);

        return res.getBody();
    }
}
