package com.credera.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;

/**
 * Created by Mitchell on 2/19/17.
 */
@RestController

@RequestMapping("/api/review")
public class ReviewController {

    @Autowired
    private ReviewService revService;

    @RequestMapping("/all")
    public ReviewModel[] getReviews() {
        return revService.getAllReviews();
    }

    @RequestMapping(
            value = "/create/",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE
    )
    public String createReview(ReviewModel review) {
        System.out.println("Name: " + review.getName() + " Podcast: " + review.getPodcast());
        System.out.println("Review: " + review.getReview() + " Rating: " + review.getRating());
        String result = revService.createNewReview(review);
        System.out.println("Response: " + result);
        return result;

    }

    /* @RequestMapping(
            value = "/login",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE
    )
    public @ResponseBody String login(UserModel user) {
        System.out.println("Email: " + user.getEmail() + " Pass: " + user.getPassword());
        String result = usrService.loginExistingUser(user.getEmail(), user.getPassword());
        System.out.println("Response: " + result);
        return result;
    }*/

    @RequestMapping("/delete")
    public String deleteReview(@RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
        return revService.deleteOldReview(headers);
    }

    @RequestMapping("/getMy")
    public String getMyReviews(@RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
        return revService.getMyReviews(headers);
    }

    @RequestMapping(
            value = "/update/{id}",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE
    )
    public String updateReview(
            @PathVariable(value="id") String id,
            @RequestHeader HttpHeaders headers,
            @RequestBody MultiValueMap<String, String> bod) {
        System.out.println("Headers: " + headers);
        System.out.println("id: " + id);
        System.out.println("body: bod");
        return revService.updateReview(id, headers, bod);
    }
}
