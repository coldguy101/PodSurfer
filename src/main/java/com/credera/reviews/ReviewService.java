package com.credera.reviews;

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
}
