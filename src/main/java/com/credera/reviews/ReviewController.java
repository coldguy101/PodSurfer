package com.credera.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by Mitchell on 2/19/17.
 */
@RestController

@RequestMapping("/api/reviews")
public class ReviewController {

    @Autowired
    private ReviewService revService;

    @RequestMapping("/all")
    public ReviewModel[] getReviews() {
        return revService.getAllReviews();
    }


    @RequestMapping("/create")
    public String createNewReview(@RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
        return revService.createNewReview(headers);
    }

    @RequestMapping("/delete")
    public String deleteReview(@RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
        return revService.deleteReview(headers);
    }

    @RequestMapping("/getMy")
    public String getMyReviews(@RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
        return revService.getMyReviews(headers);
    }

    @RequestMapping("/update")
    public String updateReview(@RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
        return revService.updateReview(headers);
    }
}
