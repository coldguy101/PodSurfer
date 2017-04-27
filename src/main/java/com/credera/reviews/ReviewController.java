package com.credera.reviews;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
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

    @RequestMapping(
            value = "/create",
            method = RequestMethod.POST,
            consumes = MediaType.APPLICATION_FORM_URLENCODED_VALUE
    )
    public @ResponseBody String createNewReview(
            HttpEntity<String> entity){
        String result = revService.createReview(entity);
        return result;
    }

    @RequestMapping("/delete/{id}")
    public String deleteReview(
            @PathVariable(value="id") String id,
            @RequestHeader HttpHeaders headers) {
        String result = revService.deleteOldReview(headers, id);
        return result;
    }

    @RequestMapping(
            value = "/getMy",
            method = RequestMethod.GET
    )
    public String getMyReviews(@RequestHeader HttpHeaders headers) {
        System.out.println("Headers: " + headers);
        return revService.getMyReviews(headers);
    }

    @RequestMapping(
            value = "/reviewForPod/{id}",
            method = RequestMethod.GET
    )
    public ReviewModel[] getReviewsForPod(
            @PathVariable(value="id") String id,
            HttpEntity<String> entity) {
        return revService.getReviewsForPodcast(entity, id);
    }

    @RequestMapping(
            value = "/update/{id}",
            method = RequestMethod.PUT,
            consumes = MediaType.APPLICATION_JSON_VALUE
    )
    public String updateReview(
            @PathVariable(value="id") String id,
            HttpEntity<String> entity) {
        String result = revService.updateReview(entity, id);
        System.out.println("Response:" + result);
        return result;
    }
}
