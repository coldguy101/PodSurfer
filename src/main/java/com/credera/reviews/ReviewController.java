package com.credera.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Mitchell on 2/19/17.
 */
@RestController
public class ReviewController {

    @Autowired
    private ReviewService revService;

    @RequestMapping("/api/reviews")
    public ReviewModel[] getReviews() {
        return revService.getAllReviews();
    }

}
