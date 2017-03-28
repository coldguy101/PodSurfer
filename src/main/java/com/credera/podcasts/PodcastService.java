package com.credera.podcasts;

import org.springframework.http.HttpEntity;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 * Created by sean on 2/14/17.
 */

@Service
public class PodcastService {

    public PodcastModel[] getAllPodcasts() {
        RestTemplate rt = new RestTemplate();
        PodcastModel[] pm = rt.getForObject("https://podsurfer-spring3.herokuapp.com/api/podcast/", PodcastModel[].class);
        for(PodcastModel pmm : pm)
            System.out.println(pmm);
        return pm;
    }

    public PodcastModel getPodcast(String id) {
        RestTemplate rt = new RestTemplate();
        PodcastModel pm = rt.getForObject("https://podsurfer-spring3.herokuapp.com/api/podcast/" + id, PodcastModel.class);
        System.out.println(pm);
        return pm;
    }

    public String createPodcast(HttpHeaders headers, HttpEntity<String> entity) {
        RestTemplate rt = new RestTemplate();
        ResponseEntity<String> auth = rt.postForEntity("https://podsurfer-spring3.herokuapp.com/api/podcast/", entity, String.class);
        System.out.println(auth.getBody());
        return auth.getBody();
    }

    public String updatePodcast(HttpHeaders headers, HttpEntity<String> entity, String id) {
        RestTemplate rt = new RestTemplate();

        rt.put("https://podsurfer-spring3.herokuapp.com/api/podcast/" + id, entity);
        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/podcast/" + id, HttpMethod.PUT, entity, String.class);

        return res.getBody();
    }

    public String deletePodcast(HttpHeaders headers, String id) {
        RestTemplate rt = new RestTemplate();

        HttpEntity<HttpHeaders> head = new HttpEntity<>(headers);

        ResponseEntity<String> res = rt.exchange("https://podsurfer-spring3.herokuapp.com/api/podcast/" + id, HttpMethod.DELETE, head, String.class);

        return res.getBody();
    }
}
