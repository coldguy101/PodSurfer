package com.credera.users;

import com.credera.podcasts.PodcastModel;
import com.credera.podcasts.PodcastService;
import com.credera.reviews.ReviewModel;
import com.credera.reviews.ReviewService;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.util.HashSet;
import java.util.Set;

/**
 * Created by Mitchell on 2/19/17.
 */

@Service
public class UserService {

    @Autowired
    PodcastService podcastService;

    @Autowired
    ReviewService reviewService;

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

    public String createUser(HttpHeaders headers, HttpEntity<String> entity) {
        RestTemplate rt = new RestTemplate();

        ResponseEntity<String> auth = rt.postForEntity("https://podsurfer-spring3.herokuapp.com/api/user", entity, String.class);

        System.out.println(auth.getBody());
        return auth.getBody();
    }

    public String getUserInfo(HttpHeaders headers) {
        RestTemplate rt = new RestTemplate();

        HttpEntity<HttpHeaders> head = new HttpEntity<>(headers);

        System.out.println(headers);

        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/user/me", HttpMethod.GET, head, String.class);

        return res.getBody();
    }

    public String update(HttpHeaders headers, HttpEntity<String> entity) {
        RestTemplate rt = new RestTemplate();

        rt.put("https://podsurfer-spring3.herokuapp.com/api/user/", entity);
        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/user/", HttpMethod.PUT, entity, String.class);

        return res.getBody();
    }

    public PodcastModel[] recommended(HttpHeaders headers) {
        ObjectMapper om = new ObjectMapper();
        Set<PodcastModel> pm = new HashSet<>();
        System.out.println("Got inside recommended...");
        UserModel user = null;
        try {
            user = om.readValue(getUserInfo(headers), UserModel.class);
        } catch(IOException e) {
            System.err.println("Somethign went terribly wrong when converting from string to UserModel with Jackson 2");
            e.printStackTrace();
        }
        System.out.println("Got my usermodel: " + user.toString());
        PodcastModel[] podcasts = podcastService.getAllPodcasts();
        for(PodcastModel podcast : podcasts) {
            for(String uInterest : user.getInterests()) {
                for(String pTag : podcast.getTags()) {
                    if(uInterest.equalsIgnoreCase(pTag)) {
                        pm.add(podcast);
                    }
                }
            }
        }
        //If the size is less than 3 then we need to find 6 top-ranked podcasts to recommend!
        if(pm.size() < 3) {
            int thirdMax = 0;
            int secondMax = 0;
            int max = 0;
            for(int i = 0; i < podcasts.length; i++) {
                ReviewModel[] reviews = reviewService.getReviewsForPodcast(podcasts[i].get_id());
                int sum = 0;
                for(ReviewModel review : reviews) {
                    sum += review.getRating();
                }
                if(sum > max) {
                    thirdMax = secondMax;
                    secondMax = max;
                    max = i;
                }
            }
            pm.add(podcasts[thirdMax]);
            pm.add(podcasts[secondMax]);
            pm.add(podcasts[thirdMax]);
        }
        return pm.toArray(new PodcastModel[0]);
    }

    /*public String updateReview(HttpHeaders headers, HttpEntity<String> entity, String id) {
        RestTemplate rt = new RestTemplate();

        rt.put("https://podsurfer-spring3.herokuapp.com/api/podcast/" + id, entity);
        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/podcast/" + id, HttpMethod.PUT, entity, String.class);

        return res.getBody();
    }*/
}
